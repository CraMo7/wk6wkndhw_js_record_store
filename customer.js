var Customer = function(name, wallet, records){
  this.name = name ? name.toLowerCase() : null;
  this.wallet = wallet || 0;
  this.records = records || [];
};

Customer.prototype.buy = function(record, store){
  this.records.push(record);
  store.sell(record);
};

Customer.prototype.sell = function(record, store){

};

module.exports = Customer;