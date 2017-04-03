class Api::ProjectsController < ApplicationController

  def index
    @projects = current_user.projects
    render :index
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def create
    @project = Project.new(title: params[:title], rate: params[:rate], user_id: current_user.id, count: 0)
    if @project.save
      render :index
    end
  end

  def update
    @project = Project.find(params[:id])
    # @project.update(body: params[:body], count: params[:count])
    @project.update(project_params)
    render :show
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy
    @projects = current_user.projects
    render :index
  end
  private

  def project_params
    params.require(:project).permit(:title, :rate, :body, :count)
  end
end
