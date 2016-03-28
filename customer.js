var Customer = function(args){
  if (args){
    this.name = args.name ? args.name.toLowerCase() : null;
    this.wallet = args.wallet || 0;
    this.records = args.records || [];
  } else {
    this.name = null;
    this.wallet = 0;
    this.records = [];
  };
};

Customer.prototype.buy = function(record, store){


  // 1) Customer should be able to buy records:
  //  TypeError: RecordStore is not a function
  // at Customer.buy (customer.js:20:15)
  // at Context.<anonymous> (specs/customer_spec.js:41:10)

  if (this.wallet >= record.price){
    var bought = store.sell(record, this);
    return (bought) ? bought : null;
  } else {
    return null;
  }
  //ternary version just for fun:
  return (this.wallet >= record.price) ? store.sell(record, this) : null;


};

Customer.prototype.sell = function(recordToSell, store){
  for (var i = 0; i < this.records.length; i++){
    if (this.records[i].artist === recordToSell.artist && this.records[i].album === recordToSell.album){
      return store.buyFromCustomer(recordToSell, this);
    }; 
  };
  return null;
};

module.exports = Customer;

//classnotesrepo/week_6/day_2/shopping_basket_lab/code/bogof.js
// ^ lookup hash to fill object with price etc from lookup table