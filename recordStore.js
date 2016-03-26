// var JSON = require("JSON").stringify;
// var JSON = require("JSON").parse;


var RecordStore = function(name, city, balance, records){
  this.name = name ? name.toLowerCase() : null;
  this.city = city ? city.toLowerCase() : null;
  this.balance = balance || 0;
  this.records = records || [];
};

//listStock function seems redundant - recordStore.records is easier to use and returns the same information
RecordStore.prototype.listStock = function(){
  // console.log(this.records);
  // console.log(JSON.parse(this.records));
  return this.records;

}
RecordStore.prototype.sell = function(recordToSell){
  for (var i = 0; i < this.records.length; i++){
    if (this.records[i] === recordToSell){
      this.balance += this.records[i].price;
      return this.records.splice(i,1);
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