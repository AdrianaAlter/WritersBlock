var React = require('react');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');

var NewProjectForm = React.createClass({

  getInitialState: function(){
    return { title: "", modalIsOpen: false, formHidden: true };
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
  mobileToggle: function(){
    this.state.formHidden == false ? this.setState({formHidden: true}) : this.setState({formHidden: false});
  },

  render: function(){
    var style = {
          overlay: {
            background: 'rgba(206, 170, 120, 0.8)'
          },
          content : {
            background: 'rgba(19, 51, 89, 1)',
            borderColor: 'transparent',
            top: '5vh',
            left: '5vh',
            right: '5vh',
            bottom: '5vh'
          }
    };
    var buttonContent = this.props.mobile ? <i className="fa fa-plus" aria-hidden="true" onClick={this.mobileToggle}></i> : "New";
    var createContent = this.props.mobile ? <i className="fa fa-check" aria-hidden="true"></i> : "Create";
    var cancelContent = this.props.mobile ? <i className="fa fa-times" aria-hidden="true"></i> : "Cancel";
    var button = <button onClick={this.toggle}>{buttonContent}</button>
    var hidden = this.state.formHidden ? "hidden" : "";
    var form = <form id="project-form" className={hidden}>
      <h1>New Project</h1>
      <input id="project-input" type="text" placeholder="Project Title" onChange={this.updateTitle}></input>
      <section className="welcome-buttons">
        <button onClick={this.submit} className="left">{createContent}</button>
        <button onClick={this.toggle}>{cancelContent}</button>
      </section>
    </form>
    var component = this.state.display == "button" ? button : form;
    if (this.props.mobile){
      return (
        <div id="form-button">
            {buttonContent}
            {form}
        </div>
      )
    }
    else {
      return (
        <div>
          {button}
          <Modal style={style} contentLabel="Modal" isOpen={this.state.modalIsOpen} onRequestClose={this.toggle}>
            {form}
          </Modal>
        </div>
      );
    }

  }




});

module.exports = NewProjectForm;
