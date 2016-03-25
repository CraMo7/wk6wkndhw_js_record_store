var RecordStore = function(name, city, records){
  this.name = name ? name.toLowerCase() : null;
  this.city = city ? city.toLowerCase() : null;
  this.records = records || [];
};


module.exports = RecordStore;