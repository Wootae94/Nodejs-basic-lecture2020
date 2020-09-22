//완전수 구하기 ver1
for(let i=2; i<10000; i++){
    let sum = 0
    for(let k=1; k<i; k++){
        if (i%k === 0){
            sum += k;
        }
    }
    if (sum == i){
        console.log(sum);
    }
}
//완전수 구하기 ver2
for (let i=2; i<= 10000; i++){
    let divArray = [];
    for(let k=1; k<i; k++){
        if (i%k === 0){
            divArray.push(k);
        }
}
let sum = 0;
for (let divisor of divArray)
    sum += divisor;
    if (i === sum){
        console.log(i);
        console.log(divArray);
    }
}
//plusCycle
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt('0~99 사이의 숫자 입력> ');
rl.prompt();

rl.on('line', function(buf) {
 
    let orgNumber = (buf.length > 1) ? buf : '0'+buf[0];
    let number = orgNumber;

    let cycle = 0;
    while(true) {        
        let sum = parseInt(number[0]) + parseInt(number[1]);
        let newNumber = number[1] + sum % 10;
        cycle++;
        console.log(number, newNumber, cycle);
        if (parseInt(orgNumber) === parseInt(newNumber))
            break;
        /* if (cycle > 100)
            break; */
        number = newNumber;
    }

    rl.close();
});

