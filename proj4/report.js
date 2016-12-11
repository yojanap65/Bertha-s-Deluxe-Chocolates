/*  We load the global array proj4_data once, then use it as needed
    to retrieve product information.
    
    The Milk Chocolate handler is done the old-fashion way, with an 
    'onclick' call in the xhtml code.  The rest of the buttons have 
    handlers assigned the correct way.
    
    Alan Riggins
    CS545
    Fall 2016
*/    

var proj4_data;
var sumOfSales = 0;
var totalProfit = 0;
var sumQuantity = 0;


	  
$(document).ready(function() {
    proj4_data = new Array();
    $.get('/perl/jadrn047/proj4/report.cgi', storeData);
    
    });    
 
 function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        var innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
		
	 var tmpString = "<table>";
	 tmpString += "<tr><td><b>SKU</b></td><td><b>Title</b></td><td><b>Quantity</b></td><td><b>DATE</b></td><td><b>Sales($)</b></td><td><b>Profit($)</b></td></tr>" ;
	for(var i=0; i < proj4_data.length-1; i++) {
		
		tmpString += "<tr><td>" + proj4_data[i][0]  + "</td>"; // sku
		tmpString += "<td>" + proj4_data[i][1] + "</td>"; //title
		tmpString += "<td>" + proj4_data[i][2] + "</td>"; //qty
		tmpString += "<td>" + proj4_data[i][3]  + "</td>"; //date
		tmpString += "<td>" + proj4_data[i][4]  + "</td>"; //sales
		tmpString += "<td>" + proj4_data[i][5]  + "</td></tr>"; // profit
		sumOfSales = sumOfSales + parseFloat(proj4_data[i][4]);
		sumQuantity = sumQuantity + parseInt(proj4_data[i][2]);
		totalProfit = totalProfit + parseFloat(proj4_data[i][5]);
    }
	tmpString += "<tr><td><b>Total</b></td><td></td><td>" + sumQuantity + "</td><td></td><td>"+sumOfSales.toFixed(2)+ "</td><td>" +totalProfit.toFixed(2) +"</td>/<tr>";
	tmpString += "</table>"
    var handle = document.getElementById('report');
    handle.innerHTML = tmpString;
}   
    
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
var tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;
} 

 