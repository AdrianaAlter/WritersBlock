var React = require('react');
var ApiUtil = require('../util/api_util.js');

var PrizeIndexItem = React.createClass({

  render: function(){
    var className = this.props.item.name + " prize " + this.props.item.category;
    var self = this;
    var buy = function(){
      var deduction = self.props.item.price * -1;
      className += " bought";
      ApiUtil.adjustPoints(self.props.user.id, deduction);
      ApiUtil.acquirePrize(self.props.user.id, self.props.item);
    }
    var saveSetting = function(userId, setting){
      ApiUtil.saveSetting(self.props.user.id, self.props.item)
    };
    var style;
    var text;
    var fn;
    var purchased = [];
    var used = [];
    if (this.props.user.prizes){
      this.props.user.prizes.map(function(prize){
        if (prize !== null){
          purchased.push(prize.name);
        }
      });
    }
    if (this.props.user.used){
      this.props.user.used.map(function(usedPrize){
        if (usedPrize !== null){
          used.push(usedPrize.name);
        }
      });
    }
    if (this.props.type == "store"){
      if (purchased.includes(this.props.item.name)){
        fn = "";
        className += " bought"
      }
      else if (this.props.item.price > this.props.user.points){
        fn = "";
        className += " locked"
      }
      else {
        fn = buy;
      }
    }
    else if (this.props.type == "settings"){
      fn = saveSetting;
      if (!used.includes(this.props.item.name)){
        className += " new";
      }
      if (this.props.user.settings[this.props.item.category] == this.props.item.name){
        className += " selected";
      }
    }
    if (this.props.item.category == "color"){
      style = { backgroundColor: this.props.item.name }
    }
    if (this.props.item.category == "font"){
      style = { fontFamily: this.props.item.name }
      text = "Abc";
    }

    return (
      <li onClick={fn} style={style} className={className}>{text}</li>
    )
  }

});

module.exports = PrizeIndexItem;
