class Order < ActiveRecord::Base
	validates :user_id, :start_address, :end_address, :price, presence: true

end