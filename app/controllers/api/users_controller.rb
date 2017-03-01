class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_name: params[:user_name], password: params[:password], points: '0')
    if @user.save
      log_in(@user)
    end
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    if params[:points]
      new_points = @user.points + params[:points].to_i
      @user.update(points: new_points)
    elsif params[:prize]
      new_prizes = @user.prizes.push(params[:prize])
      @user.update(prizes: new_prizes)
    elsif params[:setting]
      category = params[:setting]["category"].to_sym
      name = params[:setting].first.last
      new_settings = @user.settings
      new_settings[category] = name
      new_used = @user.used.push(params[:setting]).uniq
      @user.update(settings: new_settings)
      @user.update(used: new_used)
    elsif params[:trophy]
      new_trophies = @user.trophies.push(params[:trophy])
      @user.update(trophies: new_trophies)
    end
    @prizes = @user.prizes
    render :show
  end

end
