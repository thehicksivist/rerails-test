Rails.application.routes.draw do
  # resources :posts
  root 'pages#index'
  match '*path', to: 'pages#index', via: :all
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
