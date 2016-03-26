var assert = require("chai").assert;
var RecordStore = require("../recordStore");
var Record = require("../record");
var Customer = require("../customer");

var cust;

describe("Customer", function(){
  beforeEach(function(){
    cust = new Customer("Matt");
  });
  it("should construct with a name", function(){
    assert.equal(cust.name, "matt");
  });
  it("should construct with a wallet, defaulting to 0", function(){
    assert.equal(cust.wallet, 0);
  });
  it("should have a collection of records", function(){
    assert.deepEqual(cust.records, []);
  });
});