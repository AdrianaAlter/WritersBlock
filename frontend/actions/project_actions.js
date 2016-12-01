var ProjectConstants = require('../constants/project_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var ProjectActions = {

  allProjectsReceived: function(projects){
    Dispatcher.dispatch({
      actionType: ProjectConstants.ALL_PROJECTS_RECEIVED,
      projects: projects
    });
  },

  singleProjectReceived: function(project){
    Dispatcher.dispatch({
      actionType: ProjectConstants.SINGLE_PROJECT_RECEIVED,
      project: project
    });
  }

};

module.exports = ProjectActions;
