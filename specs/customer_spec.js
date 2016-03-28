var assert = require("chai").assert;
var RecordStore = require("../recordStore");
var Record = require("../record");
var Customer = require("../customer");

var cust;
var record;
var store;

describe("Customer", function(){
  beforeEach(function(){
    var custArgs = {
      name: "Matt",
      wallet: 100,
      records: [record]
    };
    cust = new Customer(custArgs);
    var recordArgs = {
      artist: "Daft Punk",
      album: "Discovery",
      price: 15.99
    };
    record = new Record(recordArgs);
    var storeArgs = {
      name: "the funky store",
      city: "tokyo",
      balance: 0,
      records: [record]
    };
    store = new RecordStore(storeArgs);
    // store.records.push(record);
  });
  it("should construct with a name", function(){
    assert.equal(cust.name, "matt");
  });
  it("should construct with a wallet, defaulting to 0", function(){
    assert.equal(cust.wallet, 100);
  });
  it("should have a collection of records", function(){
    assert.deepEqual(cust.records, [record]);
  });
  it("should be able to buy records", function(){
    cust.buy(record, store);
    assert.deepEqual(cust.records[0], record);
    assert.equal(store.records.length, 0);
  });
  it("should be able to sell records", function(){
    cust.sell(record, store)
    assert.equal(cust.records.length, 0);
  });
  it("should lower wallet by price of bought record", function(){
    cust.buy(record, store);
    assert.equal(cust.wallet, 84.01);
  });
  it("should not be able to buy if insufficient wallet", function(){
    cust.wallet = 5;
    assert.equal(cust.buy(record, store), null);
  });
});