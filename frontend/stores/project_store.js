var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var ProjectConstants = require('../constants/project_constants.js');

var ProjectStore = new Store(Dispatcher);
var _projects = [];

ProjectStore.all = function(){
  return _projects;
};

ProjectStore.find = function(id){
  for (var i = 0; i < _projects.length; i++){
    if (_projects[i].id == id){
      return _projects[i];
    }
  }
};

ProjectStore.resetProjects = function(projects){
  _projects = projects;
};

ProjectStore.resetProject = function(project){
  if (_projects.includes(project)){
    for (var i = 0; i < projects.length; i++){
      if (_projects[i].id == project.id){
        _projects[i] = project;
      }
    }
  }
  else {
    _projects.push(project);
  }
};

ProjectStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ProjectConstants.ALL_PROJECTS_RECEIVED:
      ProjectStore.resetProjects(payload.projects);
      ProjectStore.__emitChange();
      break;
    case ProjectConstants.SINGLE_PROJECT_RECEIVED:
      ProjectStore.resetProject(payload.project);
      ProjectStore.__emitChange();
      break;
    }
};

module.exports = ProjectStore;
