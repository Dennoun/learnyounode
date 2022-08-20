const fs = require('fs');
var file = process.argv[2];
fs.readFile(file, function(err, text){
    if(err){
        return console.log(err);
    }
    var lines = text.toString().split('\n').length -1;
    console.log(lines);
})

