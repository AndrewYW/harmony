Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:index, :create]
    resources :servers, only: [:index, :show, :create, :update, :destroy]
    resources :channels, only: [:index, :show, :create, :update, :destroy]
    resources :server_members, only: [:index, :create, :destroy]
    resources :channel_members, only: [:index, :create, :destroy]

    resources :messages, only: [:index, :create, :show, :destroy]
    resources :dms, only: [:index, :create, :show, :destroy]
  end

  mount ActionCable.server, at: '/cable'
end
