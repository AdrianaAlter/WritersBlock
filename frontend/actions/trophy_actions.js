var TrophyConstants = require('../constants/trophy_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var TrophyActions = {

  allTrophiesReceived: function(trophies){
    Dispatcher.dispatch({
      actionType: TrophyConstants.ALL_TROPHIES_RECEIVED,
      trophies: trophies
    });
  }


};

module.exports = TrophyActions;
