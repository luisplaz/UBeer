class OrdersController < ApplicationController
	# layout false

	def index

	end

	def create
		order_data = {
	    "deliver_at": "15:00:00",
	    "deliver_to": "119 W. 24th Street, New York, NY 10011",
	    "customer_id": "1234",
	    "beer_kind": "Budweiser", 
	    "quantity": "6 pack"
		}

		query = order_data[:beer_kind].rstrip.squeeze(" ").gsub(" ", "%20")
		address = "1006+Avenue+of+the+Americas,10018"
		delivery_api_uri = "https://www.delivery.com/api/data/search?search_type=alcohol&section=beer&address=" + address + "&order_time=ASAP&order_type=delivery&client_id=brewhacks2016&keyword=" + query
		response = HTTParty.get(delivery_api_uri)
		beer = response["data"]["products"][0]
		price = beer["price"].to_s

		merchants = response["data"]["merchants"]  ## Array of merchants willing to deliver

		default_merchant = merchants.first ## Choose first merchant by default

		default_merchant_name = default_merchant["summary"]["name"] 
		default_merchant_address = default_merchant["location"] ## Address hash
		
		if request.xhr?

			@order = Order.create!(user_id: "Adam", start_address: default_merchant_address["street"], end_address: order_data[:deliver_to], price: price)
			render json: {order: @order,
				whole_response: response,
				beer: beer,
				price: price,
				merchants: merchants,
				quantity: order_data[:quantity],
				delivery_address: order_data[:deliver_to]
			}
		else

			Order.create!(user_id: "Adam", start_address: order_data[:deliver_to], end_address: default_merchant_address["street"], price: price)
			redirect_to root_path

		end
	end
end