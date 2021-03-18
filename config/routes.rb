Rails.application.routes.draw do
  resources :products
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "gldn#index"
  
  #root
  get "/gldn", to: "gldn#index"

  #Brincos
  get '/products/brincos/ouro', to: 'products#brincosOuro'
  get '/products/brincos/prata', to: 'products#brincosPrata'

  #Aneis
  get '/products/aneis/ouro', to: 'products#aneisOuro'
  get '/products/aneis/prata', to: 'products#aneisPrata'
  

  #Outros
  get "/about", to:"about#about"
  get "/sale", to:"sale#index"
  get '/products/:id', to: 'products#show'

end
