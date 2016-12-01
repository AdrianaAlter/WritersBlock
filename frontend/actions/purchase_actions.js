var PurchaseConstants = require('../constants/purchase_constants.js');
var Dispatcher = require('../dispatcher/dispatcher.js');

var PurchaseActions = {
  allPurchasesReceived: function(purchases){
    Dispatcher.dispatch({
      actionType: PurchaseConstants.ALL_PURCHASES_RECEIVED,
      purchases: purchases
    });
  }
};

module.exports = PurchaseActions;
