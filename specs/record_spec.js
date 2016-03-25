var assert = require("chai").assert;
var Record = require("../record");

describe("Record", function(){
  beforeEach(function(){
    record = new Record("Daft Punk", "Discovery", 15.99)
  });
  it("should construct with artist attr", function(){
    assert.equal("daft punk", record.artist);
  });
  it("should construct with album", function(){
    assert.equal("discovery", record.album);
  });
  it("should construct with price", function(){
    assert.equal(15.99, record.price);
  });
});