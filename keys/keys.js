const fs = require("fs"),
  path = require("path");

const keys = (function() {
  const keymap = new Map();

  const add = function(key, value) {
    keymap.set(key.toLowerCase(), value);
  };

  const get = function(key) {
    return keymap.get(key.toLowerCase());
  };

  const clear = function() {
    keymap.clear();
  };

  const readall = function() {
    const filename = path.join(path.dirname(process.mainModule.filename), '/keys/keys.json');
    let data = fs.readFileSync(filename);
        
        keyvals = JSON.parse(data);

        for(k in keyvals){
            add(k, keyvals[k])
        }
  };

  const printall = function(){
    for (var [key, value] of keymap.entries()) {
        console.log(key + ' = ' + value);
      }
  }

  return {
    add: function(key, value) {
      add(key, value);
    },
    get: function(key) {
      return get(key);
    },
    clear: function() {
      clear();
    },
    readall: function(){
        readall()
    },
    printall: function(){
        printall()
    }
  };
})();

module.exports = keys
