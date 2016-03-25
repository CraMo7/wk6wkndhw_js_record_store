var assert = require("chai").assert;
var Record = require("../record");

describe("Record", function(){
  beforeEach(function(){
    record = new Record("Daft Punk")
  });
  it("should construct with artist attr", function(){
    assert.equal("Daft Punk", record.artist);
  });
});