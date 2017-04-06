var React = require('react');

var DetailHeader = React.createClass({
  getInitialState: function(){
    return { view: "header", title: this.props.title, rate: this.props.rate };
  },

  toggle: function(){
    this.state.view == "header" ? this.setState({ view: "form" }) : this.setState({ view: "header" });
  },
  updateTitle: function(e){
    this.setState({title: e.currentTarget.value});
  },
  updateRate: function(e){
    this.setState({rate: e.currentTarget.value});
  },
  submit: function(){
    var project = {};
    project.title = this.state.title;
    project.rate = this.state.rate;
    ApiUtil.editProject(this.props.id, project);
    this.toggle();
  },
  render: function(){
    var component;
    var rateSelect = [5, 10, 25, 50, 100].map(function(num){
      return <option key={num} value={num}>{num}</option>
    });
    if (this.state.view == "header") {
      component =  <h2 onClick={this.toggle}>{this.state.title}:  {this.state.rate} words per point</h2>
    }
    else {
      component = <section id="edit-header">
                      <input value={this.state.title} onChange={this.updateTitle}></input>
                      <select defaultValue={this.state.rate} onClick={this.updateRate}>{rateSelect}</select>
                      <button onClick={this.submit}>Save</button>
                      <button onClick={this.toggle}>Cancel</button>
                  </section>
    }
    return component;
  }
});

module.exports = DetailHeader;
