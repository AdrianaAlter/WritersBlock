var React = require('react');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');

var LogInForm = React.createClass({

  contextTypes: { router: React.PropTypes.object.isRequired },

  getInitialState: function(){
    return {user_name: "", password: "", modalIsOpen: false};
  },

  updateName: function(e){
    this.setState({user_name: e.currentTarget.value});
  },

  updatePassword: function(e){
    this.setState({password: e.currentTarget.value});
  },

  toggle: function(){
    this.state.modalIsOpen == false ? this.setState({modalIsOpen: true}) : this.setState({modalIsOpen: false});
  },
  submitInfo: function(e){
    e.preventDefault();
    var router = this.context.router;
    ApiUtil.logIn(this.state, function () {
      router.push("/");
    });
    this.toggle();
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
        <button onClick={this.toggle}>Log In</button>
        <Modal style={style} contentLabel="Modal" isOpen={this.state.modalIsOpen} onRequestClose={this.toggle}>
          <form>
            <h1>Log In</h1>
            <input type="text" placeholder="User Name" onChange={this.updateName}></input>
            <input type="password" placeholder="Password" onChange={this.updatePassword}></input>
            <section className="welcome-buttons">
              <button onClick={this.submitInfo}>Submit</button>
              <button onClick={this.toggle}>Cancel</button>
            </section>
          </form>
        </Modal>
      </section>
    )
  }

});


module.exports = LogInForm;
