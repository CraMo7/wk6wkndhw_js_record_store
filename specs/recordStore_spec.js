var assert = require("chai").assert;
var RecordStore = require("../recordStore");
var Record = require("../record");

describe("Record Store", function(){
  beforeEach(function(){
    store1 = new RecordStore("Records Records Records Records", "Edinburgh")
  });
  it("should construct with a name", function(){
    assert.equal("records records records records", store1.name);
  });
  it("should construct with a city", function(){
    assert.equal("edinburgh", store1.city);
  });
  it("should construct with an empty array of records", function(){
    assert.deepEqual([], store1.records);
  });

});