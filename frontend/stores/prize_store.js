var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var PrizeConstants = require('../constants/prize_constants.js');

var PrizeStore = new Store(Dispatcher);
var _prizes = {};

PrizeStore.all = function(){
  var prizes = [];
  var categories = Object.keys(_prizes);
  categories.forEach(function (category) {
    prizes.push((_prizes[category]));
  });
  return prizes;
};

PrizeStore.resetPrizes = function(prizes){
  _prizes = {};
  for (var i = 0; i < prizes.length; i++){
    var prize = prizes[i];
    var category = prize.category;
    var newItems = [];
    if (!_prizes[category]){
      _prizes[category] = [prize];
    }
    else {
      newItems.push(prize);
      _prizes[category] = _prizes[category].concat(newItems);
    }
  }
};

PrizeStore.byCategory = function(category){
  return _prizes[category];
};

PrizeStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case PrizeConstants.ALL_PRIZES_RECEIVED:
      PrizeStore.resetPrizes(payload.prizes);
      PrizeStore.__emitChange();
      break;
    }
};

module.exports = PrizeStore;
