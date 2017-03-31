var React = require('react');
var Modal = require('react-modal');

var Help = React.createClass({

  getInitialState: function(){
    return {modalIsOpen: false};
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
            backgroundColor: 'transparent',
            borderColor: 'transparent'
          }
      };
    return <section>
              <button onClick={this.toggle}>Help</button>
              <Modal style={style} contentLabel="Modal" isOpen={this.state.modalIsOpen} onRequestClose={this.toggle}>
                <form>
                  <button className="xout" onClick={this.toggle}><i className="fa fa-close" aria-hidden="true"></i></button>
                  <h1>Help</h1>
                  <section className="footer-content">
                    <h2>Welcome to Writer's Block!  Here's how to get started:</h2>
                    <h3>To create a new project, click New, then type in your title and select your rate of words per point.</h3>
                    <h3>You can see how many points you have at the top of the screen.  To spend them, open the Prizes menu.  If the prizes are faded out, that means you can't afford them yet; keep writing!</h3>
                    <h3>You can find your prizes in the Settings menu; click on the ones you want to use for your project!</h3>
                    <h2>Happy writing!</h2>
                  </section>
                </form>
              </Modal>
            </section>
  }

});

module.exports = Help;
