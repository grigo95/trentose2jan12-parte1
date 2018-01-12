var area = require('./area');
var readline=require('readline');

var base;
var altezza;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('base: ', function (base) {
    rl.question('altezza: ', function (altezza) {

        console.log("l'area è " + area.getArea
        (base,altezza));

        rl.close();
    });
});
