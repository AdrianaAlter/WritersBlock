var React = require('react');
var Modal = require('react-modal');
var PrizeIndexItem = require('./prize_index_item.jsx');
var PrizeCategoryItem = require('./prize_category_item.jsx');

var SettingIndex = React.createClass({

  getInitialState: function(){
    return { modalIsOpen: false };
  },

  toggle: function(){
    this.state.modalIsOpen == false ? this.setState({modalIsOpen: true}) : this.setState({modalIsOpen: false});
  },

  render: function(){
    var style = {
          overlay: {
            background: 'rgba(206, 170, 120, 0.8)'
          },
          content : {
            background: 'rgba(19, 51, 89, 1)',
            top: '5vh',
            left: '5vh',
            right: '5vh',
            bottom: '5vh'
          }
    };
    var buttonContent = this.props.mobile ? <i className="fa fa-cogs" aria-hidden="true"></i> : "Settings";
    var self = this;
    var purchases;
    var categories = ["background", "frame", "paper", "font", "color"];
    if (!this.props.user || !this.props.user.prizes){
      purchases = <h1>You have no prizes yet!</h1>
    }
    else {
      var categoryItems = categories.map(function(cat){
        return <PrizeCategoryItem key={categories.indexOf(cat)} category={cat} price={""} type="settings" user={self.props.user} />
      });
    }
    return (
            <div>
              <button onClick={this.toggle}>{buttonContent}</button>
              <Modal style={style} contentLabel="Modal" isOpen={this.state.modalIsOpen} onRequestClose={this.toggle}>
                <div id="settings">
                  <h1>My Prizes</h1>
                  <ul>{categoryItems}</ul>
                  <button onClick={this.toggle}>Done</button>
                </div>
              </Modal>
            </div>
          );
  }

});

module.exports = SettingIndex;
