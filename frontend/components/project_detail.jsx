var React = require('react');
var ProjectStore = require('../stores/project_store.js');
var SessionStore = require('../stores/session_store.js');
var UserStore = require('../stores/user_store.js');
var ApiUtil = require('../util/api_util.js');
var Body = require('./body.jsx');

var ProjectDetail = React.createClass({
  contextTypes: {
		router: React.PropTypes.object.isRequired
	},
  getInitialState: function(){
    return { project: this.getStateFromStore(), user: SessionStore.currentUser() }
  },
  getStateFromStore: function(){
    return ProjectStore.find(this.props.params.project_id);
  },
  componentDidMount: function(){
    this.listener1 = ProjectStore.addListener(this._onChange);
    this.listener2 = SessionStore.addListener(this._onChange);
    ApiUtil.fetchSingleProject(this.props.params.project_id);
  },
  componentWillUnmount: function(){
    this.listener1.remove();
    this.listener2.remove();
  },
  _onChange: function(){
    this.setState({ project: this.getStateFromStore(), user: SessionStore.currentUser() });
  },
  delete: function(){
    ApiUtil.deleteProject(this.props.params.project_id);
  },

  render: function(){
    var color = this.state.user.settings.color ? this.state.user.settings.color : "";
    var fontFamily = this.state.user.settings.font ? this.state.user.settings.font : "";
    var background = this.state.user.settings.background ? this.state.user.settings.background : "";
    var frame = this.state.user.settings.frame ? this.state.user.settings.frame : "";
    var paper = this.state.user.settings.paper ? this.state.user.settings.paper : "";
    if (!this.state.project){
      return <div></div>
    }
    return (
      <div id="detail" className={background + " group"}>
        <h2>{this.state.project.title}:  {this.state.project.rate} words per point</h2>
        <Body text={this.state.project.body} rate={this.state.project.rate} color={color} frame={frame} paper={paper} fontFamily={fontFamily} id={this.state.project.id} userId={this.state.project.user_id} count={this.state.project.count} delete={this.delete} />
      </div>
    )
  }

});

module.exports = ProjectDetail;
