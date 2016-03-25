var assert = require("chai").assert;
var RecordStore = require("../recordStore");
var Record = require("../record");

var record1;
var record2;
var record3;
var record4;
var record5;
var records;
var store1;

describe("Record Store", function(){
  beforeEach(function(){
    record1 = new Record("Daft Punk", "Discovery", 15.99);
    record2 = new Record("Talking Heads", "Speaking in Tongues", 15.99);
    record3 = new Record("Todd Terje", "It's Album Time", 15.99);
    record4 = new Record("Rustie", "Glass Swords", 15.99);
    record5 = new Record("Kanye West", "My Beautiful Dark Twisted Fantasy", 15.99);
    records = [record1, record2, record3, record4, record5];
    store1 = new RecordStore("Records Records Records Records", "Edinburgh", 784, records);
  });
  it("should construct with a name", function(){
    assert.equal("records records records records", store1.name);
  });
  it("should construct with a city", function(){
    assert.equal("edinburgh", store1.city);
  });
  it("should construct with an empty array of records if not passed an array of record objects", function(){
    var storeNoRecordsPassedIn = new RecordStore("someName", "someCity")
    assert.deepEqual([], storeNoRecordsPassedIn.records);
  });
  it("should set name and city to null if none passed to constructor", function(){
    var storeNothingPassedIn = new RecordStore();
    assert.equal(null, storeNothingPassedIn.name);
    assert.equal(null, storeNothingPassedIn.city);
  });
  it("should have a balance of money", function(){
    assert.equal(784, store1.balance);
  });
  it("should have a list inventory method", function(){
    assert.deepEqual([record1, record2, record3, record4, record5], store1.listStock());
  });


});