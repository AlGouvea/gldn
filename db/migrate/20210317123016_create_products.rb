class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :nome
      t.string :acessorio
      t.string :material
      t.decimal :price

      t.timestamps
    end
  end
end
