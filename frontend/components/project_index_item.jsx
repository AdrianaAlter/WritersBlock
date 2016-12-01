var React = require('react');
var Link = require('react-router').Link;

var ProjectIndexItem = React.createClass({

  render: function(){
    return(
      <Link to={"/projects/" + this.props.project.id}>
        <li>
          <h2>{this.props.project.title}</h2>
          <h3>{this.props.project.count}</h3>
        </li>
      </Link>
    )
  }

});

module.exports = ProjectIndexItem;