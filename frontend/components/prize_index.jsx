var React = require('react');
var PrizeStore = require('../stores/prize_store.js');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var PrizeCategoryItem = require('./prize_category_item.jsx');

var PrizeIndex = React.createClass({

  getInitialState: function(){
    return { prizes: PrizeStore.all(), modalIsOpen: false }
  },
  componentDidMount: function(){
    this.listener = PrizeStore.addListener(this._onChange);
    ApiUtil.fetchAllPrizes();
  },
  _onChange: function(){
    this.setState({ prizes: PrizeStore.all() });
  },
  componentWillUnmount: function(){
    this.listener.remove();
  },
  toggle: function(){
    this.state.modalIsOpen ? this.setState({ modalIsOpen: false }) : this.setState({ modalIsOpen: true });
  },
  render: function(){
    var style = {
          overlay: {
            background: 'transparent'
          },
          content : {
            background: 'rgba(19, 51, 89, 1)',
            top: '10vh',
            left: '0',
            right: '0',
            bottom: '0'
          }
    };
    var self = this;
    var categoryItems;
    if (!this.state.prizes){
      categoryItems = <div></div>
    }
    else {
      categoryItems = this.state.prizes.map(function(cat){
         return <PrizeCategoryItem category={cat[0].category} price={cat[0].price} key={cat.length + cat[0].id} user={self.props.user} type="store" />
      });
    }
    return (
      <div>
        <button onClick={this.toggle}>Prizes</button>
        <Modal style={style} isOpen={this.state.modalIsOpen}>
          <div id="prize-store" className="group">
            <h1>All Prizes</h1>
            <ul>{categoryItems}</ul>
            <button onClick={this.toggle}>Done</button>
          </div>
        </Modal>
      </div>
    )
  }
});

module.exports = PrizeIndex;
