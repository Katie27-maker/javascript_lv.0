const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) { // 문자열 => "4 5"
    input = line.split(' '); // input[0] = "4" , input[1] = "5"
}).on('close', function () {
    console.log("a = " + Number(input[0]));
    console.log("b = " + Number(input[1]));
});