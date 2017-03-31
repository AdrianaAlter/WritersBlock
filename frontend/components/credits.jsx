var React = require('react');
var Modal = require('react-modal');

var Credits = React.createClass({

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
    return  <section>
              <button onClick={this.toggle}>Credits</button>
              <Modal style={style} contentLabel="Modal" isOpen={this.state.modalIsOpen} onRequestClose={this.toggle}>
                <form>
                  <section className="footer-content">
                   <button className="xout" onClick={this.toggle}><i className="fa fa-close" aria-hidden="true"></i></button>
                   <h1>Credits</h1>
                   <h2>Writer's Block is designed, developed, and created by Adriana Alter.</h2>
                   <h4>For more information, please visit <a href="http://www.adrianaalter.site/">adrianaalter.site</a>.</h4>
                  </section>
                </form>
              </Modal>
            </section>
  }


});

module.exports = Credits;
