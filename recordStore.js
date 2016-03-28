// var JSON = require("JSON").stringify;
// var JSON = require("JSON").parse;
var Customer = require("./customer");
var Record = require("./record");
// var RecordStore = require("./recordStore");
//^^thought this might help with: (it didn't)
//  1) Customer should be able to buy records:
// TypeError: RecordStore is not a function
//  at Customer.buy (customer.js:20:15)
//  at Context.<anonymous> (specs/customer_spec.js:41:10)

var RecordStore = function(args){
  if (args){
    this.name = args.name ? args.name.toLowerCase() : null;
    this.city = args.city ? args.city.toLowerCase() : null;
    this.balance = args.balance || 0;
    this.records = args.records || [];
  } else {
    this.name = null;
    this.city = null;
    this.balance = 0;
    this.records = [];
  }
  
};

//listStock function seems redundant - recordStore.records is easier to use and returns the same information
RecordStore.prototype.listStock = function(){
  // console.log(this.records);
  // console.log(JSON.parse(this.records));
  return this.records;

}
RecordStore.prototype.sell = function(recordToSell, customer){
  for (var i = 0; i < this.records.length; i++){
    if (this.records[i].artist === recordToSell.artist && this.records[i].album === recordToSell.album){
      this.balance += this.records[i].price;
      customer.wallet -= this.records[i].price;
      customer.records.push(recordToSell);
      this.records.splice(i,1);
      return recordToSell;
    };
  };
  return null;
};

RecordStore.prototype.buyFromCustomer = function(recordToBuy, customer){
  for (var i = 0; i < customer.records.length; i++){
    if (customer.records[i].artist === recordToBuy.artist && customer.records[i].album === recordToBuy.album){
      this.balance -= (this.records[i].price / 3);
      customer.wallet += (this.records[i].price / 3);
      return this.records.push(customer.records.splice(i,1));
    };
  };
  return null;
};

RecordStore.prototype.totalValue = function(){
  //add quantities to record objects and quantity multiplication to this function
  var prices = this.records.map(function(curr){
    return curr.price
  });

  return prices.reduce(function(prev, curr){
    return prev + curr;
  }, this.balance)
};

module.exports = RecordStore;