/**
 * TNA API
 * v0.1.x
 * Jan 2013
 */
var http = require('http');

exports.index = function(req, res){
    var optionsget = {
        host : 'discovery.nationalarchives.gov.uk',
        path : '/DiscoveryAPI/json/informationasset/C1',
        method : 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    var retdata = "No Data";
    var callback = function(response) {
        var str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });
        response.on('end', function () {
            console.log(str);
            var ret =  JSON.parse(str);
            res.render('index',{
                    o : ret.assetView
                }
            );
        });
        response.on('error', function () {
            res.render('index',{
                    displaydata: retdata
                }
            );
        });
    };
    http.request(optionsget, callback).end();
};