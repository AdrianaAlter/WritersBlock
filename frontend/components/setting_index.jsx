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
        overlay : {
          backgroundColor: 'rgba(206, 170, 120, 0.3)'
        },
        content : {
          background: 'rgba(19, 51, 89, 0.8)',
          borderColor: 'transparent',
          top: '20vh',
          left: '19vh',
          right: '19vh',
          bottom: '9vh'
        }
    };
    var self = this;
    var purchases;
    var currentSettings = [];
    var categories = ["background", "frame", "paper", "font", "color"];
    if (this.props.user.settings){
      categories.map(function(category){
        if (self.props.user.settings[category]){
          currentSettings.push(self.props.user.settings[category]);
        }
      });
    };
    if (!this.props.user || !this.props.user.prizes){
      purchases = <h1>You have no prizes yet!</h1>
    }
    else {
      var categoryItems = categories.map(function(cat){
        return <PrizeCategoryItem key={categories.indexOf(cat)} category={cat} price={""} type="settings" user={self.props.user} currentSettings={currentSettings} />
      });
    }

    return (
            <div>
              <button onClick={this.toggle}>Settings</button>
              <Modal style={style} isOpen={this.state.modalIsOpen} onRequestClose={this.toggle}>
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
