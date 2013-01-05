var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var should = chai.should();

chai.use(sinonChai);

describe('Score', function(){
    it('should return -1 when no exam result object passed', function(done){
        var ret = exam.check();
        ret.should.equal(-1);
        done();
    });

});