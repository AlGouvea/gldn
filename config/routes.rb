Rails.application.routes.draw do
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "gldn#index"
  
  get "/gldn", to: "gldn#index"
  get "/about", to:"about#about"
  get "/sale", to:"sale#index"

end
