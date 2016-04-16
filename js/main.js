$(document).ready(function() {
	$("#start_button").click(function(e){
		e.preventDefault();
		var beer = new Audio("sounds/open_beer.wav");
		$(".beer").toggleClass("rotate");
		beer.play()

		setTimeout(function(){
			$("#start_button").remove();
			$(".form-group").append('<h1 class="grey">Your Order</h1><br>\
			<form>\
			        <label for="name">Name: </label>\
			        <input id="name" type="text" name="fname" value="David Banner"><br>\
			        <label for="address">Address: </label>\
  					<input id="address" type="text" name="fname" value="212 East 63 Street"><br>\
  					<label for="order">Order: </label>\
  					<input id="order" type="text" name="fname" value="Budweiser"><br>\
  					<label for="count">Count: </label>\
  					<input id="count" type="text" name="fname" value="6"><br><br><br>\
  					<img src="img/budweiser-6.jpg" class="cart-img"><br><br>\
  					<label for="eta">ETA: </label>\
  					<input id="eta" type="text" name="fname" value="10 Minutes"><br>\
  					<label for="total">Total: </label>\
  					<input id="total" type="text" name="fname" value="$13.99"><br><br>\
  					<label for="end"></label>\
  					<input id="end" type="submit" value="CONFIRM">\
			</form>\
			')
		},2000);

		


	});
});