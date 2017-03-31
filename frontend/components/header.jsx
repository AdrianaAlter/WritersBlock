var React = require('react');
var SessionStore = require('../stores/session_store.js');
var UserStore = require('../stores/user_store.js');
var ApiUtil = require('../util/api_util.js');
var Link = require('react-router').Link;
var LogOutButton = require('./log_out_button.jsx');
var SettingIndex = require('./setting_index.jsx');
var PrizeIndex = require('./prize_index.jsx');
var TrophyIndex = require('./trophy_index.jsx');
var NewProjectForm = require('./new_project_form.jsx');

var Header = React.createClass({
  contextTypes: { router: React.PropTypes.object.isRequired },
  getInitialState: function(){
    return { user: this.getStateFromStore(), width: window.innerWidth }
  },
  getStateFromStore: function(){
    ApiUtil.fetchCurrentUser();
    return SessionStore.currentUser();
  },
  componentWillMount() {
    window.addEventListener('resize', this.resize);
  },
  componentDidMount: function(){
    this.listener = UserStore.addListener(this._onChange);
  },
  _onChange: function(){
    this.setState({ user: UserStore.all() });
  },
  componentWillUnmount: function(){
    this.listener.remove();
    window.removeEventListener('resize', this.resize);
  },
  resize: function(){
    this.setState({ width: window.innerWidth });
  },
  render: function(){
    var mobile = this.state.width <= 375 ? true : false;
    var projectIcon = mobile ? <i className="fa fa-th" aria-hidden="true"></i> : "Projects";
    return(
      <header className="group">
        <h1>Writer's Block</h1>
        <nav>
          <button id="point-count">{this.state.user.points}</button>
          <Link to="/"><button>{projectIcon}</button></Link>
          <NewProjectForm mobile={mobile} user={this.state.user}/>
          <PrizeIndex user={this.state.user} mobile={mobile}/>
          <SettingIndex user={this.state.user} mobile={mobile}/>
          <LogOutButton mobile={mobile}/>
        </nav>
      </header>
    )
  }


});

module.exports = Header;
// <TrophyIndex mobile={mobile}/>
