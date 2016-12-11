#!/usr/bin/perl  

use CGI;
use CGI::Cookie;
use POSIX qw(strftime);
$q = new CGI;

use DBI;


my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn047";
my $username = "jadrn047";
my $password = "socket";
my $database_source = "dbi:mysql:$database:$host:$port";

	
my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';


#send a blank cookie.  You must insert this into the header before
#printing anything.  Also, using the CGI module makes printing
#content-type: text/html redundant.

my $cookie = $q->cookie(-name=>'jadrn047',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);
print <<END_CONTENT;
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Cookie Reader</title>
        	<meta http-equiv="content-type"
                		content="text/html;charset=utf-8" />
            	<meta http-equiv="Content-Style-Type" content="text/css" />
</head>

<body>
    <div>
            <h1>Cookie Reader</h1>
END_CONTENT
my %cookies = $ENV{COOKIE};
for( keys %cookies) {
print "The value of the cookie is: $cookies{$_}\n";
}

print "<table>\n";
my ($key, $value);
     
%cookies = CGI::Cookie->fetch;
for(keys %cookies) {
    print "$cookies{$_}\n";
    }
    
print "<h1>Shopping cart cookie</h1>";
my $v = $q->cookie('jadrn047');
print "The raw cookie value is $v<br />";  

my $date = strftime "%m/%d/%Y", localtime; 

@rows = split('\|\|',$v);
foreach $row (@rows) {
    ($sku, $qty) = split('\|',$row);
	my $query = "INSERT INTO transaction(SKU,qty,date) VALUES('$sku',$qty,'$date');";
	my $sth = $dbh->prepare($query) or die "Prepare Error";
	
	$sth->execute or die "Execute Error";
	$sth->finish();
	
    print "$sku = $qty<br />";
    } 
     
print "<h1>Parameters passed to script:</h1>\n";
my ($key, $value);

                
foreach $key ($q->param) {
    print "<tr>\n";
    print "<td>$key</td>\n";
    foreach $value ($q->param($key)) {
        print "<td>$value</td>\n";
        }
    print "</tr>\n";
}
print "</table>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";
foreach $key ($q->param) {
    print "<tr>\n";
    print "<td>$key</td>\n";
    foreach $value ($q->param($key)) {
        print "<td>$value</td>\n";
        }
    print "</tr>\n";
}
print "</table>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";
