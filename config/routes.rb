ActionController::Routing::Routes.draw do |map|
  map.login '/login', :controller => :user_session, :action => :new

  map.resource :account, :controller => "users"
  map.resources :users
  map.resource :user_session

  map.resources :sightings
  map.resources :kanas

  map.root :controller => "user_sessions", :action => "new"
end
