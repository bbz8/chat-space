Rails.application.routes.draw do
  devise_for :users
  # root 'messages#index'
  # root 'user#index'
  root 'groups#index'
  # root 'group#new'
  resources :users, only: [:index, :edit, :update]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end
