/**
 * TNA API
 * v0.1.x
 * Jan 2013
 */
"use strict";
//var http = require('http');
//var IA = require('../lib/informationasset');
var tnaapi = require('../lib/apiaccess');

exports.index = function(req, res){
    tnaapi.call(function(ia) {
        res.render('index',{
                o : ia
            }
        );
    });
};

exports.simplebrowse = function(req, res){
    res.render('simplebrowse',{
        }
    );
};

exports.simplesearch = function(req, res){
    res.render('simplesearch',{
        }
    );
};

exports.integration = function(req, res){
    res.render('integration',{
        }
    );
};
