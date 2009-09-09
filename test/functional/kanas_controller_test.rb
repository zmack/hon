require 'test_helper'

class KanasControllerTest < ActionController::TestCase
  # Replace this with your real tests.
  context "get Kanas index" do
    setup do
      get :index
    end

    should_assign_to :kanas
    should_respond_with :success
  end

  context "get specific Kana" do
    setup do
      get :show, :id => Kana.first
    end

    should_assign_to :kana
    should_respond_with :success
  end
end
