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
	  
$(document).ready(function() {
    proj4_data = new Array();
    $.get('/perl/jadrn047/proj4/get_products.cgi', storeData);

    var cart = new shopping_cart("jadrn047");
	//$('#count').text(cart.size());   

	
    
	 $('#milk').on('click', function() {
        tmpString = "";
    for(var i=0; i < proj4_data.length; i++) {
        if(proj4_data[i][1] == "Milk chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";//Img
            
                tmpString += "<b>" + proj4_data[i][1] + "</b><br />";//title
				tmpString += proj4_data[i][2] + "<br />";//category
				tmpString += proj4_data[i][3] + "<br />";//short desc
				tmpString += proj4_data[i][4] + "<br />";//long desc
				tmpString += "<b>Price: $" + proj4_data[i][5] + "</b><br />";//sale price
				var qtyID = proj4_data[i][0] +"qty";
				tmpString += "<input class='prodQty' name='quantity' type='text' id='" + qtyID +"' value='1' size='3' />";
       tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
				
			 
            tmpString += "<span>Added to Cart</span><br />";                        
            }
        }
    var handle = document.getElementById('content');
    handle.innerHTML = tmpString;
        })
	
	
    $('#dark').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                 tmpString += "<b>" + proj4_data[i][1] + "</b><br />";
				tmpString += proj4_data[i][2] + "<br />";
				tmpString += proj4_data[i][3] + "<br />";
				tmpString += proj4_data[i][4] + "<br />";
				tmpString += "<b>Price: $" + proj4_data[i][5] + "</b><br />";
				var qtyID = proj4_data[i][0] +"qty";
				tmpString += "<input class='prodQty' name='quantity' type='text' id='" + qtyID +"' value='1' size='3' />";
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
        
    $('#nuts').on('click', function() {   
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {  
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";                     
                 tmpString += "<b>" + proj4_data[i][1] + "</b><br />";
				tmpString += proj4_data[i][2] + "<br />";
				tmpString += proj4_data[i][3] + "<br />";
				tmpString += proj4_data[i][4] + "<br />";
				tmpString += "<b>Price: $" + proj4_data[i][5] + "</b><br />";
				var qtyID = proj4_data[i][0] +"qty";
				tmpString += "<input class='prodQty' name='quantity' type='text' id='" + qtyID +"' value='1' size='3' />";
             tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
        
    $('#brittle').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                 tmpString += "<b>" + proj4_data[i][1] + "</b><br />";
				tmpString += proj4_data[i][2] + "<br />";
				tmpString += proj4_data[i][3] + "<br />";
				tmpString += proj4_data[i][4] + "<br />";
				tmpString += "<b>Price: $" + proj4_data[i][5] + "</b><br />";
				var qtyID = proj4_data[i][0] +"qty";
				tmpString += "<input class='prodQty' name='quantity' type='text' id='" + qtyID +"' value='1' size='3' />";
             tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })  

	$('#truffle').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                 tmpString += "<b>" + proj4_data[i][1] + "</b><br />";
				tmpString += proj4_data[i][2] + "<br />";
				tmpString += proj4_data[i][3] + "<br />";
				tmpString += proj4_data[i][4] + "<br />";
				tmpString += "<b>Price: $" + proj4_data[i][5] + "</b><br />";
				var qtyID = proj4_data[i][0] +"qty";
				tmpString += "<input class='prodQty' name='quantity' type='text' id='" + qtyID +"' value='1' size='3' />";
            tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br />";                 
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })  	

	$('#gift').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                  tmpString += "<b>" + proj4_data[i][1] + "</b><br />";
				tmpString += proj4_data[i][2] + "<br />";
				tmpString += proj4_data[i][3] + "<br />";
				tmpString += proj4_data[i][4] + "<br />";
				tmpString += "<b>Price: $" + proj4_data[i][5] + "</b><br />";
				var qtyID = proj4_data[i][0] +"qty";
				tmpString += "<input class='prodQty' name='quantity' type='text' id='" + qtyID +"' value='1' size='3' />";
             tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br />";               
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 

	$('#holiday').on('click', function() {
        tmpString = "";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                 tmpString += "<b>" + proj4_data[i][1] + "</b><br />";
				tmpString += proj4_data[i][2] + "<br />";
				tmpString += proj4_data[i][3] + "<br />";
				tmpString += proj4_data[i][4] + "<br />";
				tmpString += "<b>Price: $" + proj4_data[i][5] + "</b><br />";
				var qtyID = proj4_data[i][0] +"qty";
				tmpString += "<input class='prodQty' name='quantity' type='text' id='" + qtyID +"' value='1' size='3' />";
             tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br />";                 
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 		
        
    $(document).on('click', ".buy", function() {  
        var sku = this.id;
		var qtyid = this.id+"qty";
		var qty = document.getElementById(qtyid).value;
		//alert(qty);
		
        cart.add(sku,parseInt(qty));
		
        $(this).next().fadeIn(50).fadeOut(2000);
		//alert(parseInt(cart.size())+3);
		 $('#count').text(cart.size());     
        });      
        
   function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        var innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
		displayProducts();
    }    
	
	function displayProducts(){
	var tmpString = "";
    for(var i=0; i < proj4_data.length; i++) {
		
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";
              tmpString += "<b>" + proj4_data[i][1] + "</b><br />";
				tmpString += proj4_data[i][2] + "<br />";
				tmpString += proj4_data[i][3] + "<br />";
				tmpString += proj4_data[i][4] + "<br />";
				tmpString += "<b>Price: $" + proj4_data[i][5] + "</b><br />";
				var qtyID = proj4_data[i][0] +"qty";
				tmpString += "<input class='prodQty' name='quantity' type='text'id='" + qtyID +"' value='1' size='3' />";
       tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span>Added to Cart</span><br />";                         
        }
		 var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
	}   	   
    });    
   
 /*   
function display_milk_chocolate() {
    tmpString = "";
    for(var i=0; i < proj4_data.length; i++) {
        if(proj4_data[i][1] == "Milk chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";
            for(var j=0; j < proj4_data[i].length; j++)
                tmpString += proj4_data[i][j] + "<br />";
        tmpString += "<br /><br />";                       
            }
        }
    var handle = document.getElementById('content');
    handle.innerHTML = tmpString;
    }   */     
    
    
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

 