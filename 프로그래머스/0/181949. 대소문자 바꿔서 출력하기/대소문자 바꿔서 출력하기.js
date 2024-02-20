const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split('');
    input.forEach((e, index)=>{
        if(e !== e.toLowerCase()) { 
            input[index] = e.toLowerCase();
        } else {
            input[index] = e.toUpperCase();
        }   
    })
    console.log(input.join(""));
     


}).on('close',function(){
      
});