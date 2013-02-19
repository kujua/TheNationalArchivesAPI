/**
 * TNA API
 * v0.1.x
 * Feb 2013
 */
"use strict";
var http = require('http');
var IA = require('../lib/informationasset');

var tnaapi = (function(){
    var callercallback;
    var optionsget = {
        host : 'discovery.nationalarchives.gov.uk',
        path : '/DiscoveryAPI/json/informationasset/C2',
        method : 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //var retdata = "No Data";
    function _apicallback(response) {
        var str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });
        response.on('end', function () {
            var ret, ia;
            console.log(str);
            ret =  JSON.parse(str);
            ia = IA(ret.assetView);
            callercallback(ia);
        });
        response.on('error', function () {

        });
    }
    function _callapi(callback) {
        callercallback = callback;
        http.request(optionsget, _apicallback).end();
    }

    return {
        call: _callapi
    };
}());
module.exports = tnaapi;