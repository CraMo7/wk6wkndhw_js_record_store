var assert = require("chai").assert;
var RecordStore = require("../recordStore");
var Record = require("../record");

describe("Record Store", function(){
  beforeEach(function(){
    store = new RecordStore("Records Records Records Records", "Edinburgh")
  });
  it("should construct with a name", function(){
    assert.equal("records records records records", store.name);
  });
  it("should construct with a city", function(){
    assert.equal("edinburgh", store.city);
  });
  it("should construct with an empty array of records", function(){
    assert.deepEqual([], store.records);
  });

});