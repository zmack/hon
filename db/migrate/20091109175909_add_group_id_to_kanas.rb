class AddGroupIdToKanas < ActiveRecord::Migration
  def self.up
    add_column :kanas, :group_id, :integer, :unsigned => true
  end

  def self.down
    remove_column :kanas, :group_id
  end
end
