class Sighting < ActiveRecord::Base
  belongs_to :user
  belongs_to :kana

  validates_presence_of :user_id, :kana_id, :correct
  validates_numericality_of :user_id, :kana_id
end
