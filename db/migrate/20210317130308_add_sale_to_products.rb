class AddSaleToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :sale, :boolean
  end
end
