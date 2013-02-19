/**
 * TNA API
 * v0.1.x
 * Feb 2013
 */
"use strict";
var IA = function(ia){
    function _getProperty(pname){
        try {
            return ia[pname] || '';
        }
        catch(ex) {
            return '';
        }
    }
    return {
        getProperty: _getProperty,
        asset: ia
    };
};
module.exports = IA;