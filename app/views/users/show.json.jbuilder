json.extract! @user, :id, :user_name, :points, :settings, :prizes, :used, :trophies

json.projects @user.projects do |project|
  json.title project.title
end
