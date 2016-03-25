var RecordStore = function(name, city, records){
  this.name = name.toLowerCase();
  this.city = city.toLowerCase();
  this.records = records || [];
};


module.exports = RecordStore;