var React = require('react');

var LogOutButton = React.createClass({

  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  logOut: function () {
    ApiUtil.logOut();
    this.context.router.push("/login");
  },

  render: function(){
    var buttonContent = this.props.mobile ? <i className="fa fa-sign-out" aria-hidden="true"></i> : "Log Out";
    return <button onClick={this.logOut}>{buttonContent}</button>
  }

});

module.exports = LogOutButton;
