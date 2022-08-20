var fs = require('fs');
var path = require('path')

var dire = process.argv[2];
var ext = '.'+process.argv[3];

fs.readdir( dire, function (err,files){
    if (err){return console.error(err)}

    files.forEach(function(file) {
        if (path.extname(file) === ext){
            console.log(file)
        }

        
    })
})