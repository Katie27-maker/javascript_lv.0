const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    
    switch (n % 2 == 0) {
        case true:
            console.log(n + " is even");
            break;
        case false:
            console.log(n + " is odd")
            break;
    }
});