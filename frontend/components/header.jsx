var React = require('react');
var SessionStore = require('../stores/session_store.js');
var UserStore = require('../stores/user_store.js');
var ApiUtil = require('../util/api_util.js');
var Link = require('react-router').Link;
var LogOutButton = require('./log_out_button.jsx');
var SettingIndex = require('./setting_index.jsx');
var PrizeIndex = require('./prize_index.jsx');

var Header = React.createClass({

  getInitialState: function(){
    return { user: this.getStateFromStore() }
  },
  getStateFromStore: function(){
    ApiUtil.fetchCurrentUser();
    return SessionStore.currentUser();
  },
  componentDidMount: function(){
    this.listener = UserStore.addListener(this._onChange);
  },
  _onChange: function(){
    this.setState({ user: UserStore.all() });
  },
  componentWillUnmount: function(){
    this.listener.remove();
  },
  render: function(){
    return(
      <header className="group">
        <h1>Writer's Block</h1>
        <LogOutButton />
        <button id="point-count">Points: {this.state.user.points}</button>
        <Link to="/"><button>Projects</button></Link>
        <Link to="/prizes"><button>Prizes</button></Link>
        <SettingIndex user={this.state.user}/>
      </header>
    )
  }


});

module.exports = Header;
