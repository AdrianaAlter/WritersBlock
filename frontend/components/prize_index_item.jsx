var React = require('react');
var ApiUtil = require('../util/api_util.js');

var PrizeIndexItem = React.createClass({

  getInitialState: function(){
    return { selected: false, new: true }
  },
  select: function(){
    this.setState({ selected: true });
  },
  break: function(){
    this.state.new == true ? this.setState({ new: false }) : null;
  },
  render: function(){
    var selected = (this.state.selected || (this.props.currentSettings && this.props.currentSettings.includes(this.props.item.name))) ? " selected" : "";
    var isNew = this.state.new ? " new" : "";
    var className = this.props.item.name + " prize " + this.props.item.category + selected + isNew;
    var self = this;
    var buy = function(){
      self.select();
      var deduction = self.props.item.price * -1;
      className += " bought";
      ApiUtil.adjustPoints(self.props.user.id, deduction);
      ApiUtil.acquirePrize(self.props.user.id, self.props.item);
    }
    var saveSetting = function(userId, setting){
      self.select();
      self.break();
      ApiUtil.saveSetting(self.props.user.id, self.props.item)
    };
    var style;
    var text;
    var fn;
    var purchased = [];
    if (this.props.user.prizes){
      this.props.user.prizes.map(function(prize){
        if (prize !== null){
          purchased.push(prize.name);
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
