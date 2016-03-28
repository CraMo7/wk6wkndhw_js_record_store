var assert = require("chai").assert;
var Record = require("../record");

var record1;

describe("Record", function(){
  beforeEach(function(){
    var record1Args = {
      artist: "Daft Punk",
      album: "Discovery",
      price: 15.99
    };
    record1 = new Record(record1Args);
  });
  it("should construct with artist attr", function(){
    assert.equal("daft punk", record1.artist);
  });
  it("should construct with album", function(){
    assert.equal("discovery", record1.album);
  });
  it("should construct with price", function(){
    assert.equal(15.99, record1.price);
  });
});