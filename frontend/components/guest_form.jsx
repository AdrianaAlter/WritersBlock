var React = require('react');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');

var GuestForm = React.createClass({

  contextTypes: { router: React.PropTypes.object.isRequired },

  getInitialState: function(){
    return {user_name: "Guest", password: "guest"};
  },

  guest: function(e){
    e.preventDefault();
    var router = this.context.router;
    ApiUtil.logIn(this.state, function () {
      router.push("/");
    });
  },

  render: function(){
    var style = {
          overlay : {
            backgroundColor: 'rgba(19, 51, 89, 0.5)'
          },
          content : {
            backgroundColor: 'transparent',
            borderColor: 'transparent'
          }
      };

    return(
      <section>
        <button onClick={this.guest}>Guest</button>
      </section>
    )
  }

});


module.exports = GuestForm;
