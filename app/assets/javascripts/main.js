var deliveryAddress = null;
var comerceAddress = null;

$(document).ready(function() {
	$("#start_button").click(function(e){
		e.preventDefault();
		
		var beer = new Audio("/assets/open_beer.wav");
		var confirm = new Audio("/assets/confirm.ogg");
		$(".beer").toggleClass("rotate");
		beer.play();
		var price = null;
		var estimate = null;
		var merchantName = null;
		var quantity = null;
		var productName = null;
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
      	var rand = response.merchants[Math.floor(Math.random() * response.merchants.length)];
      	merchantName = rand.summary.name;
      	comerceAddress = rand.location.street;
      	quantity = response.quantity;
      	productName = response.beer.name;
      	deliveryAddress = response.delivery_address;
      	username = response.order.user_id;
      	image = response.whole_response.data.products[0].image;
      });

		setTimeout(function(){
			$("#start_button").remove();
			$(".example").remove();
			$(".form-group").append('<div class="container receipt">\
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
				<label class="control-label col-sm-2" for="delivery-asap">ASAP Delivery</label>\
				<div class="col-sm-8">\
				<input type="checkbox" class="form-control" id="delivery-asap">\
				</div>\
				</div>\
				<div class="form-group">\
				<label class="control-label col-sm-2" for="delivery-batch">Reduced Price Delivery (+ 5-10 min)</label>\
				<div class="col-sm-8">\
				<input type="checkbox" class="form-control" id="delivery-batch">\
				</div>\
				</div>\
				<div class="form-group">\
				<div class="col-sm-offset-2 col-sm-8">\
				<button type="submit" class="btn btn-default order-button">Submit</button>\
				</div>\
				</div>\
				</form>\
				</div>\
			')
				confirm.play();
		},7000);
	});

	$(".form-group").on("click",".order-button",function(e){
		e.preventDefault();
		    var Url = "https://www.google.com/maps/embed/v1/directions?";
            var origin = "origin=".concat(comerceAddress).concat("&");
            var destination = "destination=".concat(deliveryAddress).concat("&");
            var mode = "mode=".concat("driving").concat("&");
            var key = "key=".concat("AIzaSyAVmLyfYUxUNkp_v32R3uo1WpcIPijXeVo");
            Url = Url.concat( origin, destination,mode,key);
		$(".receipt").remove()
		$(".jumbotron").append('<iframe width="600" height="450" frameborder="0" style="border:0" src="'+Url+'" allowfullscreen>\
			</iframe>\
				')
		});
});