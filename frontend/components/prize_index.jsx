var React = require('react');
var PrizeStore = require('../stores/prize_store.js');
var SessionStore = require('../stores/session_store.js');
var UserStore = require('../stores/user_store.js');
var ApiUtil = require('../util/api_util.js');
var Link = require('react-router').Link;
var PrizeCategoryItem = require('./prize_category_item.jsx');

var PrizeIndex = React.createClass({
  contextTypes: { router: React.PropTypes.object.isRequired },
  getInitialState: function(){
    return { prizes: PrizeStore.all(), user: UserStore.all() }
  },
  componentDidMount: function(){
    this.listener1 = UserStore.addListener(this._onChange);
    this.listener2 = PrizeStore.addListener(this._onChange);
    ApiUtil.fetchCurrentUser();
    ApiUtil.fetchAllPrizes();
  },
  _onChange: function(){
    this.setState({ prizes: PrizeStore.all(), user: UserStore.all() });
  },
  componentWillUnmount: function(){
    this.listener1.remove();
    this.listener2.remove();
  },
  goBack: function(){
    this.context.router.goBack();
  },

  render: function(){
    var self = this;
    var categoryItems;
    if (!this.state.prizes){
      categoryItems = <div></div>
    }
    else {
      categoryItems = this.state.prizes.map(function(cat){
         return <PrizeCategoryItem category={cat[0].category} price={cat[0].price} key={cat.length + cat[0].id} user={self.state.user} type="store" />
      });
    }
    return (
      <div id="prize-store" className="group">
        <h1>All Prizes</h1>
        <ul>{categoryItems}</ul>
        <button onClick={this.goBack}>Done</button>
      </div>
    )
  }
});

module.exports = PrizeIndex;
