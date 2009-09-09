class CreateSightings < ActiveRecord::Migration
  def self.up
    create_table :sightings do |t|
      t.integer :kana_id, :unsigned => true
      t.integer :user_id, :unsigned => true
      t.string :answer, :length => 10
      t.boolean :correct, :default => false

      t.timestamps
    end
  end

  def self.down
    drop_table :sightings
  end
end
