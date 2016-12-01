var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var PurchaseConstants = require('../constants/purchase_constants.js');

var PurchaseStore = new Store(Dispatcher);
var _purchases = {};

PurchaseStore.all = function(){
  var purchases = [];
  var categories = Object.keys(_purchases);
  categories.forEach(function (category) {
    purchases.push((_purchases[category]));
  });
  return purchases;
};

PurchaseStore.resetPurchases = function(purchases){
  _purchases = {};
  for (var i = 0; i < purchases.length; i++){
    var purchase = purchases[i];
    if (purchase !== null){
      var category = purchase.category;
      var newItems = [];
      if (!_purchases[category]){
        _purchases[category] = [purchase];
      }
      else {
        newItems.push(purchase);
        _purchases[category] = _purchases[category].concat(newItems);
      }
    }
  }
};

PurchaseStore.byCategory = function(category){
  return _purchases[category];
};

PurchaseStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case PurchaseConstants.ALL_PURCHASES_RECEIVED:
      PurchaseStore.resetPurchases(payload.purchases);
      PurchaseStore.__emitChange();
      break;
    }
};

module.exports = PurchaseStore;
