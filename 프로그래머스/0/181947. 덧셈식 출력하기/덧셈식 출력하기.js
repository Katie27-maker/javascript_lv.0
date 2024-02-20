const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    number = Number(input[0])
    number2 = Number(input[1]);
    console.log(`${number} + ${number2} = ${number + number2}`)
});