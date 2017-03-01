var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var TrophyConstants = require('../constants/trophy_constants.js');

var TrophyStore = new Store(Dispatcher);
var _trophies = [];

TrophyStore.all = function(){
  return _trophies;
};

TrophyStore.resetTrophies = function(trophies){
  _trophies = trophies
};

TrophyStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case TrophyConstants.ALL_TROPHIES_RECEIVED:
      TrophyStore.resetTrophies(payload.trophies);
      TrophyStore.__emitChange();
      break;
    }
};

module.exports = TrophyStore;
