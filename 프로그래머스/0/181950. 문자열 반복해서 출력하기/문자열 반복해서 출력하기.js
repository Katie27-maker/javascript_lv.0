const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) { // line = "string 5"
    input = line.split(' ');  // 4 5 -> input[0] = string, input[1] = 5    
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    console.log(str.repeat(n));
});