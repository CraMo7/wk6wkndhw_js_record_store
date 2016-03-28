var assert = require("chai").assert;
var RecordStore = require("../recordStore");
var Record = require("../record");
var Customer = require("../customer");

var record1;
var record2;
var record3;
var record4;
var record5;
var records;
var store1;
var customer;

describe("Record Store", function(){
  beforeEach(function(){
    var record1Args = {
      artist: "Daft Punk",
      album: "Discovery",
      price: 15.99
    };
    var record2Args = {
      artist: "Talking Heads",
      album: "Speaking in Tongues",
      price: 15.99
    };
    var record3Args = {
      artist: "Todd Terje",
      album: "It's Album Time",
      price: 15.99
    };
    var record4Args = {
      artist: "Rustie",
      album: "Glass Swords",
      price: 15.99
    };
    var record5Args = {
      artist: "Kanye West",
      album: "My Beautiful Dark Twisted Fantasy",
      price: 15.99
    };

    record1 = new Record(record1Args);
    record2 = new Record(record2Args);
    record3 = new Record(record3Args);
    record4 = new Record(record4Args);
    record5 = new Record(record5Args);
    customer = new Customer({name: "Craig", wallet: 50, records: []})
    records = [record1, record2, record3, record4, record5];
    var store1Args = {
      name: "Records Records Records Records",
      city: "Edinburgh",
      balance: 784,
      records: records
    };
    store1 = new RecordStore(store1Args);
  });
  it("should construct with a name", function(){
    assert.equal(store1.name, "records records records records");
  });
  it("should construct with a city", function(){
    assert.equal(store1.city, "edinburgh");
  });
  it("should construct with an empty array of records if not passed an array of record objects", function(){
    var storeArgsNoRecords = {
      name: "someName",
      city: "someCity"
    };
    var storeNoRecordsPassedIn = new RecordStore(storeArgsNoRecords)
    assert.deepEqual(storeNoRecordsPassedIn.records, []);
  });
  it("should set name and city to null if none passed to constructor", function(){
    var storeNothingPassedIn = new RecordStore();
    assert.equal(storeNothingPassedIn.name, null);
    assert.equal(storeNothingPassedIn.city, null);
  });
  it("should have a balance of money", function(){
    assert.equal(store1.balance, 784);
  });
  it("should have a list inventory method", function(){
    assert.deepEqual(store1.listStock(), [record1, record2, record3, record4, record5]);
  });
  it("should have a sell record method", function(){
    store1.sell(record4, customer);
    assert.deepEqual(store1.listStock(), [record1, record2, record3, record5]);
    assert.equal(store1.balance, 799.99)
  });
  it("should be able to check the stores value, sell prices of all in stock and balance of cash in the stores bank added together", function(){
    assert.equal(store1.totalValue(), 863.95);
  });


});