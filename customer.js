var Customer = function(name, wallet, records){
  this.name = name ? name.toLowerCase() : null;
  this.wallet = wallet || 0;
  this.records = records || [];
};

module.exports = Customer;