class Api::TrophiesController < ApplicationController
  def index
    @trophies = Trophy.all
    render :index
  end

  def update
    @trophy = Trophy.find(params[:id])
    @trophy.update(won: true)
    render :index
  end
end
