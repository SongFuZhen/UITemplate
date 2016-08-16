Rails.application.routes.draw do
  resources :icons
  resources :panels
  resources :buttons
  resources :tables
  resources :forms
  resources :dashboards
  resources :users


  root :to => 'users#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
