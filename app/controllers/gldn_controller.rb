class GldnController < ApplicationController
  def index
    @products = Product.all
  end
end
