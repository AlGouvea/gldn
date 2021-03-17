class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :id
      t.string :type
      t.string :material
      t.decimal :price

      t.timestamps
    end
  end
end
