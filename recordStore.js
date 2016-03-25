var RecordStore = function(name, city, balance, records){
  this.name = name ? name.toLowerCase() : null;
  this.city = city ? city.toLowerCase() : null;
  this.balance = balance || 0;
  this.records = records || [];
};


module.exports = RecordStore;