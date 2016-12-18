var React = require('react');
var PrizeStore = require('../stores/prize_store.js');
var UserStore = require('../stores/user_store.js');
var PurchaseStore = require('../stores/purchase_store.js');
var PrizeIndexItem = require('./prize_index_item.jsx');

var PrizeCategoryItem = React.createClass({
  getInitialState: function(){
    if (this.props.type == "store"){
      return { items: PrizeStore.byCategory(this.props.category)}
    }
    else {
      return { items: PurchaseStore.byCategory(this.props.category)}
    }
  },
  render: function(){
    var style;
    var self = this;
    var indexItems;
    if (!this.state.items){
      indexItems =  <div>You don't have any {this.props.category}s yet!</div>
    }
    else {
      indexItems = this.state.items.map(function(item){
        return <PrizeIndexItem key={item.id} item={item} user={self.props.user} type={self.props.type} />
      });
    }
    return (

      <li className="category group">
        <section className="cat-header group">
          <h2 className="cat-name">{this.props.category}</h2>
          <h2 className="cat-price">{this.props.price}</h2>
        </section>
        <ul className="cat-list group">
          {indexItems}
        </ul>
      </li>
    )
  }

});

module.exports = PrizeCategoryItem;
