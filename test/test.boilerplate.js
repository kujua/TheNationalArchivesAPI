var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var should = chai.should();

chai.use(sinonChai);

describe('Always Succeeds', function(){
    it('should succeed, because only boilerplate', function(done){
        done();
    });

});