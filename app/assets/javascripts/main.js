$(document).ready(function() {
	$("#start_button").click(function(e){
		e.preventDefault();
		var beer = new Audio("/assets/open_beer.wav");
		$(".beer").toggleClass("rotate");
		beer.play()
		setTimeout(function(){
			$("#start_button").remove();
			$(".form-group").append('<div class="container">\
				<h2>ORDER INFORMATION</h2>\
  				<img src="/assets/budweiser-6.jpg" class="cart-img"><br><br>\
				<form class="form-horizontal" role="form">\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="name">Full Name</label>\
				<div class="col-sm-10">\
				<input type="text" class="form-control" id="name" value="Adam Samuels">\
				</div>\
				</div>\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="address">Adress</label>\
				<div class="col-sm-10">\
				<input type="text" class="form-control" id="address" value="212 East 63 Street">\
				</div>\
				</div>\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="order">Order</label>\
				<div class="col-sm-10">\
				<input type="text" class="form-control" id="order" value="Budweiser">\
				</div>\
				</div>\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="quantity">Quantity</label>\
				<div class="col-sm-10">\
				<input type="text" class="form-control" id="quantity" value="6 Pack">\
				</div>\
				</div>\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="eta">ETA</label>\
				<div class="col-sm-10">\
				<input type="text" class="form-control" id="eta" value="10 Minutes">\
				</div>\
				</div>\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="total">Total</label>\
				<div class="col-sm-10">\
				<input type="text" class="form-control" id="total" value="$13.99">\
				</div>\
				</div>\
				<div class="form-group">\
				<div class="col-sm-offset-2 col-sm-10">\
				<button type="submit" class="btn btn-default">Submit</button>\
				</div>\
				</div>\
				</form>\
				</div>\
			')
		},2000);
	});
});