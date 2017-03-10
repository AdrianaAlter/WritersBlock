var React = require('react');
var ApiUtil = require('../util/api_util.js');

var Body = React.createClass({

  getInitialState: function(){
    return {text: this.props.text, count: this.props.count}
  },

  update: function(e){
    this.setState({text: e.currentTarget.value, count: e.currentTarget.value.split(" ").length - 1});
    if (this.state.text && this.state.text[this.state.text.length - 1] == " "){
      this.checkPoints();
    }
    this.save();
  },

  save: function(){
    ApiUtil.editProject(this.props.id, this.state.text, this.state.count);
  },

  edit: function(){

  },

  checkPoints: function(e){
    if ((this.state.count > 0) && ((this.state.count % this.props.rate) === 0)){
      ApiUtil.adjustPoints(this.props.userId, 1);
    }
  },

  render: function(){
    var style = {color: this.props.color, fontFamily: this.props.fontFamily}
    var color = {color: this.props.color};
    var value = this.state.text ? this.state.text : "";
    return(
      <section id="holder" className={this.props.frame + " group"}>
        <textarea value={value} onChange={this.update} className={this.props.paper} style={style}></textarea>
        <section id="buttons" className={this.props.paper} style={color}>
          <section>{this.state.count}</section>
          <button onClick={this.save}>Save</button>
          <button onClick={this.props.delete}>Delete</button>
        </section>
      </section>
    )
  }

});

module.exports = Body;
