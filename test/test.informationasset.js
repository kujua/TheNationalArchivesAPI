/**
 * TNA API
 * v0.1.x
 * Feb 2013
 */
"use strict";
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var should = chai.should();

var IA = require('../lib/informationasset');

chai.use(sinonChai);

describe('InformationAsset - constructor', function(){
    it('should return valid object when no object provided', function(done){
        var ia = IA();
        should.exist(ia);
        done();
    });
    it('should have invalid asset object when no object provided in constructor', function(done){
        var ia = IA();
        should.exist(ia);
        should.not.exist(ia.asset);
        done();
    });
});

describe('InformationAsset - getProperty', function(){
    it('should return empty string when parameter does not exist', function(done){
        var tempia = {"IAID":"C1"};
        var ia = IA(tempia);
        var ret = ia.getProperty('doesnotexist');
        should.exist(ret);
        ret.should.equal('');
        done();
    });
    it('should return empty string when parameter is null', function(done){
        var tempia = {"IAID":"C1"};
        var ia = IA(tempia);
        var ret = ia.getProperty(null);
        should.exist(ret);
        ret.should.equal('');
        done();
    });
    it('should return empty string when asset is undefined', function(done){
        var ia = IA();
        var ret = ia.getProperty('IAID');
        should.exist(ret);
        ret.should.equal('');
        done();
    });
});
