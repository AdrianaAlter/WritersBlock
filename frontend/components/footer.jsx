var React = require('react');
var Help = require('./help.jsx');
var Credits = require('./credits.jsx');


var Footer = React.createClass({

  render: function(){
    return <footer>
              <Help />
              <button><h5>Copyright (c) 2016 Adriana Alter All Rights Reserved.</h5></button>
              <Credits />
          </footer>
  }
});

module.exports = Footer;
