var proj4_data;
var toggle = 0;

 function checkValidState(stateName) {
     var states = new Array("AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
         "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
         "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
         "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
         "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
         "AS", "DC", "FM", "GU", "MH", "MP", "PR", "PW", "VI");
     for (var i = 0; i < states.length; i++) {
         if (states[i] == $.trim(stateName))
             return true;
     }
     return false;
 }
 
  function isValidEmail(email) {
     var regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
     return regex.test(email);
 }


$(document).ready( function() {
	
	
	 function validateData() {
         var fname = $('#fname').val(),
             lname = $('#lname').val(),
             address = $('#address').val(),
             city = $('#city').val(),
             state = $('#state').val(),
             zipcode = $('#zipcode').val(),
             area_code = $('#area_code').val(),
             prefix = $('#prefix').val(),
             phone = $('#phone').val(),
             email = $('#email').val(),
             m = $('#m').val(),
             d = $('#d').val(),
             y = $('#y').val(),
             experience = $('#experience'),
             category = $('#category'),
             gender = $('#gender'),
             picture = $('#picture').val();


         var errorMessage = $('#error_message');

         if ($.trim(fname).length == 0) {
             $('#error_message').text("Please enter first name");
             $('#fname').focus();
             return false;
         } else if ($.trim(email).length == 0) {
             errorMessage.text("Please enter email ID");
             $('#email').focus();
             return false;
         } else if (!isValidEmail(email)) {
             errorMessage.text("Please enter valid email ID");
             $('#email').focus();
             return false;
         }  else if ($.trim(address).length == 0) {
             errorMessage.text("Please enter address");
             $('#address').focus();
             return false;
         } else if ($.trim(city).length == 0) {
             errorMessage.text("Please enter city");
             $('#city').focus();
             return false;
         } else if ($.trim(state).length == 0) {
             errorMessage.text("Please enter state");
             $('#state').focus();
             return false;
         } else if (!checkValidState($('#state').val().toUpperCase())) {
             errorMessage.text("Please enter valid state");
             $('#state').focus();
             return false;
         } else if ($.trim(zipcode).length == 0) {
             errorMessage.text("Please enter zipcode");
             $('#zipcode').focus();
             return false;
         } else if (!$.isNumeric(zipcode)) {
             errorMessage.text("Zipcode should be numeric");
             $('#zipcode').focus();
             return false;
         } else if (zipcode.length != 5) {
             errorMessage.text("Please enter valid zipcode");
             $('#zipcode').focus();
             return false;
         } else if ($.trim(phone).length == 0) {
             errorMessage.text("Please enter phone number");
             $('#phone').focus();
             return false;
         } else if (!$.isNumeric(phone)) {
             errorMessage.text("Please enter numeric phone number");
             $('#phone').focus();
             return false;
         } else if (phone.length != 10) {
             errorMessage.text("Please enter 4 digit phone number");
             $('#phone').focus();
             return false;
         } else if ($.trim(cvv).length == 0) {
             errorMessage.text("Please enter cvv");
             $('#cvv').focus();
             return false;
         } else if ($.trim(cardname).length == 0) {
             errorMessage.text("Please enter name on card");
             $('#cardname').focus();
             return false;
         } else {
             return true;
         }
     }

    var cart = new shopping_cart("jadrn047");
	
	

	proj4_data = new Array();
	
	$.get('/perl/jadrn047/proj4/get_products.cgi', storeData);
	
    updateDisplay();
	
	/*$('input.delProduct').on('click', function() {
		alert("sdhfj");
		cart.delete(this.id);
		updateDisplay();
		alert(this.id);
		$('#count').text(cart.size());  
	});
	
	$('#checkout').on('click', function() {
		if (toggle == 0){
				$('#ordernow').hide();
				$('#cart').show()
				toggle = 1;
		}else{
				$('#cart').hide();
				$('#ordernow').show();
				toggle = 0;
		}
	});
        */
        
    function updateDisplay() {
        var cartArray = cart.getCartArray();
       if (cartArray.length == 0){
		   return;
	   }
		var toWrite = "<table>";
        toWrite += "<tr><th>Title</th><th>Quantity</th><th>Update cart</th></tr>";
        for(var i=0; i < cartArray.length; i++) {
            toWrite += "<tr>";
			for(var j=0;j < proj4_data.length ; j++) {
				if(cartArray[i][0] == proj4_data[j][0]){
					toWrite += "<td><b>"+proj4_data[j][2]+"</b></br>";
					toWrite += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[j][0]+".jpg\" alt=\""+proj4_data[j][2]+"\""+
                " width=\"200px\"  /></td>";
					
            toWrite += "<td>"+cartArray[i][1]+"</td>"; 
			toWrite += "<td>" +" <input type='button' class='delProduct' id='" +cartArray[i][0] + "' value='delete' /></td>";
            toWrite += "</tr>";
				}
					
				
			}
            
        }
        toWrite += "</table>"; 
        $('#cart').html(toWrite); 
        $('#count').text(cart.size());
		$('#ordernow').hide();
		
		$('.delProduct').on('click', function() {
		
		cart.delete(this.id);
		updateDisplay();
	
		$('#count').text(cart.size());  
	});
	
	$('#ordernow').hide();
	$('#checkout').on('click', function() {
		
		if (toggle == 0){
				$('#ordernow').hide();
				
				$('#cart').show();
				
				toggle = 1;
		}else{
				$('#cart').hide();
				var toWrite1 = "Your cart is empty!"; 
				 $('#cart').html(toWrite1); 
				$('#ordernow').show();
				toggle = 0;
		}
	});
		
    } 
		
	function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        var innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
		updateDisplay();
    } 
	
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
});