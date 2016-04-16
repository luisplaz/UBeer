class OrdersController < ApplicationController

	def index

	end

	def create
		order_data = {
	    "deliver_at": "15:00:00",
	    "deliver_to": "114 W. 24th Street, New York, NY 10011",
	    "customer_id": "1234",
	    "beer_kind": "Sam Adams", 
	    "quantity": "6 packs"
		}

		query = order_data[:beer_kind].rstrip!.squeeze(" ").gsub!(" ", "%20")

		delivery_api_uri = "https://www.delivery.com/api/data/search?search_type=alcohol&address=1006+Avenue+of+the+Americas,10018&order_time=ASAP&order_type=delivery&client_id=brewhacks2016&keyword=" + query

		if request.xhr?

		end
	end
end