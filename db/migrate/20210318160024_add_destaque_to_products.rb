class AddDestaqueToProducts < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :destaque, :boolean
  end
end
