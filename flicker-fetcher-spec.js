'use strict';
var expect = require('chai').expect;

describe("FlickrFetcher", function () {
  it ("should exist", function () {
    var FlickrFetcher = require("./flicker-fetcher.js");
    expect(FlickrFetcher).to.not.be.undefined;
  })
})
