var React = require('react');
var TrophyStore = require('../stores/trophy_store.js');
var ApiUtil = require('../util/api_util.js');
var Modal = require('react-modal');
var TrophyIndexItem = require('./trophy_index_item.jsx');

var TrophyIndex = React.createClass({

  getInitialState: function(){
    return { trophies: TrophyStore.all(), modalIsOpen: false }
  },
  componentDidMount: function(){
    this.listener = TrophyStore.addListener(this._onChange);
    ApiUtil.fetchAllTrophies();
  },
  _onChange: function(){
    this.setState({ trophies: TrophyStore.all() });
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
    var buttonContent = this.props.mobile ? <i className="fa fa-star" aria-hidden="true"></i> : "Trophies";
    var self = this;
    var trophyItems;
    if (!this.state.trophies){
       trophyItems = <div></div>
    }
    else {
      trophyItems = this.state.trophies.map(function(trophy){
         return <TrophyIndexItem key={trophy.id} trophyName={trophy.trophy_name} won={trophy.won} />
      });
    }
    return (
      <div>
        <button onClick={this.toggle}>{buttonContent}</button>
        <Modal style={style} contentLabel="Modal" isOpen={this.state.modalIsOpen} onRequestClose={this.toggle}>
          <div id="trophies" className="group">
            <h1>Trophies</h1>
            <ul id="trophy-list">{trophyItems}</ul>
            <button onClick={this.toggle}>Done</button>
          </div>
        </Modal>
      </div>
    )
  }
});

module.exports = TrophyIndex;
