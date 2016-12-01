var React = require('react');
var Header = require('./header.jsx');
var SessionStore = require('../stores/session_store.js');
var ApiUtil = require('../util/api_util.js');

var App = React.createClass({

  render: function(){
    return(
      <div id="app">
        <Header />
        {this.props.children}
      </div>
    )
  }


});

module.exports = App;
