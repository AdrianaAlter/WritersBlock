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
        <Modal style={style} isOpen={this.state.modalIsOpen} onRequestClose={this.toggle}>
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
