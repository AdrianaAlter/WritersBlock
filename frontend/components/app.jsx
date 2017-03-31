var React = require('react');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var SessionStore = require('../stores/session_store.js');
var ApiUtil = require('../util/api_util.js');

var App = React.createClass({

  render: function(){
    return(
      <div id="app">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }


});

module.exports = App;
