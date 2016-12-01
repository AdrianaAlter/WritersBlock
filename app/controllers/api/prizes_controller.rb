class Api::PrizesController < ApplicationController
  def index
    @prizes = Prize.all
    render :index
  end
end
