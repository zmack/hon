class CreateKanas < ActiveRecord::Migration
  def self.up
    create_table :kanas do |t|
      t.string :romaji, :length => 10
      t.string :char, :length => 10

      t.timestamps
    end
  end

  def self.down
    drop_table :kanas
  end
end
