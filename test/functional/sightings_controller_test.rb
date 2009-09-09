require 'test_helper'

class SightingsControllerTest < ActionController::TestCase
  context "logged in as a user" do
    setup do
      @user = Factory(:user)
      UserSession.create(@user)
    end

    context "create" do
      setup do
        post :create, { :sighting => { :kana_id => Kana.first.id, :correct => false } }
      end

      should_respond_with :success
    end
  end
end
