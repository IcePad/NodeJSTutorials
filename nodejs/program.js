//Baby steps
/*
var result = 0

for (var i = 2; i<process.argv.length; i++){
    result += Number(process.argv[i])
}

console.log(result)
*/



//MY FIRST I/O
/*
var fs = require('fs')

var contents = fs.readFileSync(process.argv[2])
//var contents = fs.readFileSync(process.argv[2], 'utf8')
var lines = contents.toString.split('\n').length-1
console.log(lines)
*/

//MY FIRST ASYNC I/O
/*
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, 'utf8', function(err,contents){
    var lines = contents.split('\n').length-1
    console.log(lines)
})
*/


//FILTERED LS
/*
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = ("." + process.argv[3])

fs.readdir(folder,function(err,files){
    if (err){
        return console.err(err)
    }

    files.forEach(function (file){
        //Checks the extension name of the string passed. 
        if (path.extname(file)===ext){
            console.log(file)
        }
    })
})
*/


var path = require('path');
var mymodule = require('./filteringModule.js');


var dir = process.argv[2];
var filterExtenstion = process.argv[3];

mymodule(dir,filterExtenstion, function(err,list){
    if (err) {
        return console.error('There was an error:', err)   
    }
    list.forEach(function (file) {
        console.log(file);
    })
})







