$(document).ready(function() {
	$("#start_button").click(function(e){
		e.preventDefault();
		var beer = new Audio("/assets/open_beer.wav");
		$(".beer").toggleClass("rotate");
		beer.play()
		var price = null;
		var estimate = null;
		var merchantName = null;
		var quantity = null;
		var productName = null;
		var deliveryAddress = null;
		var username = null;
		var image = null;

		$.ajax({
        type: "POST",
        url: "/orders",
        data: {},
        dataType: "JSON"
      }).done(function(response){
      	price = response.price;
      	estimate = response.merchants[0].ordering.availability.delivery_estimate;
      	merchantName = response.merchants[0].summary.name;
      	quantity = response.quantity;
      	productName = response.beer.name;
      	deliveryAddress = response.delivery_address;
      	username = response.order.user_id;
      	image = response.whole_response.data.products[0].image;
      });

		setTimeout(function(){
			$("#start_button").remove();
			$(".example").remove();
			$(".form-group").append('<div class="container">\
				<h2>ORDER INFORMATION</h2>\
  				<img src="'+image+'" class="cart-img"><br><br>\
				<form class="form-horizontal" role="form">\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="name">Full Name</label>\
				<div class="col-sm-8">\
				<input type="text" class="form-control" id="name" value="'+ username +'">\
				</div>\
				</div>\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="address">Adress</label>\
				<div class="col-sm-8">\
				<input type="text" class="form-control" id="address" value="'+ deliveryAddress +'">\
				</div>\
				</div>\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="order">Order</label>\
				<div class="col-sm-8">\
				<input type="text" class="form-control" id="order" value="'+ productName +'">\
				</div>\
				</div>\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="quantity">Quantity</label>\
				<div class="col-sm-8">\
				<input type="text" class="form-control" id="quantity" value="'+ quantity +'">\
				</div>\
				</div>\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="eta">Merchant</label>\
				<div class="col-sm-8">\
				<input type="text" class="form-control" id="merchant" value="'+merchantName+'">\
				</div>\
				</div>\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="eta">ETA</label>\
				<div class="col-sm-8">\
				<input type="text" class="form-control" id="eta" value="'+estimate+' minutes">\
				</div>\
				</div>\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="total">Total</label>\
				<div class="col-sm-8">\
				<input type="text" class="form-control" id="total" value="$'+price+'">\
				</div>\
				</div>\
				<div class="form-group">\
				<div class="col-sm-offset-2 col-sm-8">\
				<button type="submit" class="btn btn-default">Submit</button>\
				</div>\
				</div>\
				</form>\
				</div>\
			')
		},7000);
	});
});