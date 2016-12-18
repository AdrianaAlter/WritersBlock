var React = require('react');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');

var NewProjectForm = React.createClass({

  getInitialState: function(){
    return { title: "", modalIsOpen: false };
  },

  updateTitle: function(e){
    this.setState({title: e.currentTarget.value});
  },

  submit: function(){
    ApiUtil.createProject(this.state.title);
    this.toggle;
  },

  toggle: function(){
    this.state.modalIsOpen == false ? this.setState({modalIsOpen: true}) : this.setState({modalIsOpen: false});
  },

  render: function(){
    var style = {
        overlay : {
          backgroundColor: 'rgba(19, 51, 89, 0.5)'
        },
        content : {
          background: 'rgba(19, 51, 89, 0.75)',
          borderColor: 'transparent'
        }
    };
    var button = <button onClick={this.toggle}>New Project</button>
    var form = <form>
      <h1>New Project</h1>
      <label>Title:</label>
      <input type="text" onChange={this.updateTitle}></input>
      <section className="welcome-buttons">
        <button onClick={this.submit} className="left">Create</button>
        <button onClick={this.toggle}>Cancel</button>
      </section>
    </form>

    var component = this.state.display == "button" ? button : form;

    return (
      <div>
        {button}
        <Modal style={style} contentLabel="Modal" isOpen={this.state.modalIsOpen} onRequestClose={this.toggle}>
          {form}
        </Modal>
      </div>
    );

  }




});

module.exports = NewProjectForm;
