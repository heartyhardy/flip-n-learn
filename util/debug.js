const config = require('config');

const debug = (function(){

    var instance = function(name){
        this.name = name;
    }
    var information = function(message, label){
        if(!label){
            console.log("\x1b[36m",this.name, message);
        }else{
            console.log("\x1b[36m",label, message);
        }
    }
    var log = function(message, label){
        if(process.env.NODE_ENV === config.environment.current){
            if(!label){
                console.log("\x1b[35m", name, message)
            }else{
                console.log("\x1b[35m", label, message)
            }
        }
    }
    var err = function(message,label){
        if(!label){
            console.log("\x1b[31m", this.name, message);
        }else{
            console.log("\x1b[31m", label, message);
        }
    }

    return{
        label: function(label){
            name = `[${label}]`
        },

        info: function(message, label){
            if(label){
                information(message, `[${label}]`)
            }else{
                information(message)
            }
        },

        log: function(message, label){
            if(label){
                log(message, `[${label}]`)
            }else{
                log(message)
            }
        },
        
        err: function(message, label){
            if(label){
                err(message, `[${label}]`)
            }else{
                err(message)
            }
        }
    }

})()

module.exports=debug