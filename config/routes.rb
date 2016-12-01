Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resource :session
    resources :users
    resources :projects
    resources :prizes
  end
  match "*path" => "static_pages#root", via: [:get, :post]
end
