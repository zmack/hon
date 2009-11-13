class SightingsController < ApplicationController
  before_filter :require_user

  def index
    @groups = Group.all(:include => :kanas)
  end

  def create
    @sighting = Sighting.new(params[:sighting].merge(:user_id => current_user.id))
    @sighting.save!

    head :ok
  rescue
    head :unprocessable_entity
  end
end
