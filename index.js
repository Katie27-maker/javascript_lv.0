// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];
// rl.on('line', function (line) { // line = "string 5"
//     input = line.split(' ');  // 4 5 -> input[0] = string, input[1] = 5    
// }).on('close', function () {
//     str = input[0];
//     n = Number(input[1]);
//     // console.log(str.repeat(n));
// });



// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split('');     // 먼저 하나로 쪼개서 배열로 만들어주기 하나씩 넣어 주려면 배열의 메소드 이용하기
//     input.forEach((e, index)=>{    // e -> 배열의 원소 e에 넣어서 하나씩 보내주기, index배열의 0번째부터 
//         if(e !== e.toLowerCase()) {      // 만약에 원소 e가(만약에 'a') e.toUpperCase 대문자 였을때 일치하지 않으면 
//             input[index] = e.toLowerCase();    // 원소를 소문자로 바꿔서 index의 0번째 자리에(배열) = input에 넣어주기
//         } else {
//             input[index] = e.toUpperCase();
//         }
//     })
//     console.log(input.join(""));    // 합치기
     


// }).on('close',function(){
      
// });

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     str1 = input[0];
//     str2 = input[1];
//     const concatenated = str1.concat(str2);
//     console.log(concatenated);
// });



// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     str1 = input[0];
//     str2 = input[1];
//     const concatenated = str1.concat(str2);
//     console.log(concatenated);
// });



// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = [line];
// }).on('close',function(){
//     str = input[0].split("");   // 몇 번쨰에 있는 문자를 spalit메소드로 쪼개주기 그럼 글자 수데로 배열이 만들어짐 그럼 forEach를 쓸 수 있음
//     console.log(str);
//     str.forEach((e) => {
//         console.log(e+'\n');
//     });
// });



// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     n = Number(input[0]);
    
//     switch (n % 2 == 0) {
//         case true:
//             console.log(n + " is even");
//             break;
//         case false:
//             console.log(n + " is odd")
//             break;
//     }
// });
// const result = Number(line) % 2 ? 'odd' : 'even'
// console.log(line, 'is', result)



// function solution(my_string, overwrite_string, s) {         //     2  +  7 + 2 = 11
//     console.log(my_string.substring(0,s) +  // "He"         원본 : He11oWor1dA  
//                     overwrite_string +      // "lloWorl"    변환 : HelloWorl
//                                                             //     2  +  7 + ?  = 11
//                     my_string.substring(s+overwrite_string.length)); 
// }


// solution("He11oWor1d","lloWorl",2);
// // console.log("He11oWor1d".substring(0,2)); //  처음부터 전부다!
// // console.log("He11oWor1d".substring(1,2)); // index 1번부터 전부다!
// // console.log("He11oWor1d".substring(2,2)); 
// console.log("He11oWor1d".substring(9));



// function solution(str1, str2) {
//     let list = str1.split("");
//     let list2 = str2.split("");

//     let result = [];

//     list.forEach((e, index) => {
//         result.push(e, list2[index]);
//         console.log(index+"번째" + result);   
//     });
// }
// solution("aaaa","bbbb");






// function solution(str1, str2) {
//     let list = str1.split("");
//     let list2 = str2.split("");

//     let result = [];

//     list.forEach((e, i) => {
//         result.push(e, list2[i]);
//     });
//     console.log(result.join(""));
// }

// solution("aaaaa","bbbbb");



// function solution(arr) {
//     let  list = arr;
//     console.log(list.join());
// }

// solution(["a","b","c"]);


function solution(my_string, k) {
    console.log(my_string.repeat(k));
}

solution("string", 3)