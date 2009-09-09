require 'test_helper'

class SightingTest < ActiveSupport::TestCase
  should_validate_presence_of :user_id, :kana_id, :correct
  should_validate_numericality_of :user_id, :kana_id

  context "a sighting" do
    subject do
      @sighting = Factory(:sighting)
    end
  end
end
