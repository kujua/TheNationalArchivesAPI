//- TNA API
//- v0.1.x
//- Feb 2013
"use strict";
var casper = require("casper").create();
//use following statement for debugging problems (comment out previous statement then)
//var casper = require("casper").create({
//    verbose: true,
//    logLevel: "debug"
//});
var t = casper.test;
var baseurl = 'http://localhost:8070/';

function getAssertionForUrl(u, status) {
    t.comment(baseurl + u);
    t.assertHttpStatus(status, 'route ' + u + ' returns status ' + status);
    t.comment('');
}

casper.start();

// home page
casper.thenOpen(baseurl, function() {
    getAssertionForUrl('', 200);
});

casper.thenOpen(baseurl + 'integration', function() {
    getAssertionForUrl('integration', 200);
});

casper.thenOpen(baseurl + 'simplebrowse', function() {
    getAssertionForUrl('simplebrowse', 200);
});

casper.thenOpen(baseurl + 'simplesearch', function() {
    getAssertionForUrl('simplesearch', 200);
});

casper.run(function() {
    t.renderResults(true);
    this.exit();
});