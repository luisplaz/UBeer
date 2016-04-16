class CreateOrdersTable < ActiveRecord::Migration
  def change
    create_table :orders do |t|
    	t.string :user_id, index: true
    	t.string :start_address, null: false
    	t.string :end_address, null: false
    	t.string :price, null: false
    	t.boolean :delivered, default: false, null: false
    	t.timestamps null: false
    end
  end
end
