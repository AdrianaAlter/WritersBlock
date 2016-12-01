var PrizeConstants = require('../constants/prize_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var PrizeActions = {

  allPrizesReceived: function(prizes){
    Dispatcher.dispatch({
      actionType: PrizeConstants.ALL_PRIZES_RECEIVED,
      prizes: prizes
    });
  }


};

module.exports = PrizeActions;
