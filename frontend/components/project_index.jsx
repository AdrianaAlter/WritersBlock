var React = require('react');
var ProjectStore = require('../stores/project_store.js');
var ApiUtil = require('../util/api_util.js');
var ProjectIndexItem = require('./project_index_item.jsx');
var Link = require('react-router').Link;

var ProjectIndex = React.createClass({
  getInitialState: function(){
    return { projects: ProjectStore.all() };
  },

  componentDidMount: function(){
    this.listener = ProjectStore.addListener(this._onChange);
    ApiUtil.fetchAllProjects();
  },

  componentWillUnmount: function(){
    this.listener.remove();
  },

  checkTrophy(){
    var trophyNums = {
      1: "one",
      5: "five",
      10: "ten",
    }
    
      // if (Object.keys.includes(this.props.user.projects.length + 1)){
      //
      // }
  },


  _onChange: function(){
    this.checkTrophy();
    this.setState({ projects: ProjectStore.all() });
  },

  render: function(){
    var self = this;
    var projectItems;

    if (!self.state.projects || self.state.projects.length == 0){
      projectItems = <h2>No projects yet!</h2>
    }
    else {
      projectItems = self.state.projects.map(function(project){
        return <ProjectIndexItem project={project} key={project.id} />
      });
    }

    return(
      <div id="projects">
        <h1>My Projects</h1>
        <ul id="project-index">
          {projectItems}
        </ul>
      </div>
    )
  }

});

module.exports = ProjectIndex;
