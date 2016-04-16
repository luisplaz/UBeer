class Order < ActiveRecord::Base
	validates :name, :start_address, :end_address, :price, :delivered, presence: true

end