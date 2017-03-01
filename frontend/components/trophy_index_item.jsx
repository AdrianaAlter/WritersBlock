var React = require('react');

var TrophyIndexItem = React.createClass({

  render: function(){
    return(
        <li>
          <h2>{this.props.trophyName}</h2>
        </li>
    )
  }

});

module.exports = TrophyIndexItem;
