const config = require('config');

const debug = (function(){

    var instance = function(name){
        this.name = name;
    }
    var information = function(message){
        console.log("\x1b[36m",this.name, message);
    }
    var log = function(message){
        if(process.env.NODE_ENV === config.environment.current){
            console.log("\x1b[35m", name, message)
        }
    }
    var err = function(message){
        console.log("\x1b[31m", this.name, message);
    }

    return{
        label: function(label){
            name = `[${label}]`
        },

        info: function(message){
            information(message)
        },

        log: function(message){
            log(message)
        },
        
        err: function(message){
            err(message)
        }
    }

})()

module.exports=debug