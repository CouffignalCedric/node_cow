const inform = require('./information.js');
var cowsay = require("cowsay");
const { name } = require('./information.js');
const myName = require('./information.js');

console.log(cowsay.say({
    text : "Hello Im " +  myName.name +" from " + myName.campus,
    e : "oO",
    T : "U "
}));

