/**
 * Created by Michael on 5/26/2015.
 */
var Shell = function(){};
var colors = require('colors');

Shell.prototype = {

    log: function(msg){
        console.log(msg);
    },

    red: function(msg){
        console.log(colors.red(msg));
    },

    green: function(msg){
        console.log(colors.green(msg));
    },

    cyan: function(msg){
        console.log(colors.cyan(msg));
    },

    white: function(msg){
        console.log(colors.white(msg));
    },

    grey: function(msg){
        console.log(colors.grey(msg));
    },

    indent: "   ",

    newLine: function(){
        console.log('');
    }

};

module.exports = new Shell();