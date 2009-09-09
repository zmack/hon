class SightingsController < ApplicationController
  before_filter :require_user

  def create
    @sighting = Sighting.create!(:kana_id => params[:sighting][:kana_id], :user_id => current_user.id)

    head :ok
  rescue
    head :unprocessable_entity
  end
end
