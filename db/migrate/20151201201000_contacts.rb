class Contacts < ActiveRecord::Migration
  def change
    create_table :homies do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.timestamps
    end
  end
end
