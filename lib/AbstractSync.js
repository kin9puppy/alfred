/**
 * Created by Michael on 5/26/2015.
 */
var AbstractSync = function(){};
var shell = require('./Shell.js');
var extend = require('extend');

AbstractSync.prototype = {

    start: function(){
        //Sync(function(){
            try{
                this.main();
            } catch (er){
                shell.fail(er);
                process.exit(1)
            }
            process.exit(0);
        //});

    },

    extend: function(obj){
        return extend(this, obj);
    }

};

module.exports = new AbstractSync();