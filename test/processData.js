//test/processData.js
const {getData,getRaw} = require('./utils')

function processData(){
    return `Process:${getData()}`;
    //processed real data
}
function processRaw(){
    return getRaw();
}
module.exports = {processData, processRaw}