require 'test_helper'

class SightingsControllerTest < ActionController::TestCase
  context "logged in as a user" do
    setup do
      @user = Factory(:user)
      UserSession.create(@user)
    end

    context "create with proper params" do
      setup do
        post :create, { :sighting => { :kana_id => Kana.first.id, :correct => 1 } }
      end

      should_respond_with :success
    end

    context "create with screwy params" do
      setup do
        post :create, { :sighting => { :kana_id => 0, :correct => nil } }
      end

      should_respond_with :unprocessable_entity
    end

    context "get index" do
      setup do
        get :index
      end

      should_respond_with :success
      should_assign_to :groups
    end
  end


  context "not logged in" do
    context "create" do
      setup do
        post :create, { :sighting => { :kana_id => Kana.first.id, :correct => false } }
      end

      should_redirect_to('login page') do
        login_path
      end
    end
  end
end
