class SessionsController < ApplicationController
  def create
    @user_session = UserSession.new(params[:user_session])

    if @user_session.save
      flash[:notice] = "Logged in"

      redirect_to root_url
    else
      render :action => :new
    end
  end

  def destroy
    @user_session = UserSession.find
    @user_session.destroy

    flash[:notice] = "Logged out"

    redirect_to root_url
  end
end
