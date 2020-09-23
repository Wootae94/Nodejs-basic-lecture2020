/* 양의 정수 N을 입력으로 받아 1부터 N까지 제곱의 합과
    합의 제곱을 구하시오.*/

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.setPrompt('양의 정수 N > ');
    rl.prompt();
    rl.on('line', function(buf) {
        let Num = parseInt(buf);
        let Sum1 = 0
        let Sum2 = 0
        let power = x => { return x*x }
        
        for(let i=1; i<=Num; i++)
        {Sum1+=power(i);
         Sum2+=i}
            console.log(`1에서 ${Num}까지 제곱의 합> ${Sum1}`); //N 의 제곱의 합
            console.log(`1에서 ${Num}까지 합의 제곱> ${power(Sum2)}`); //N까지 합의 제곱
            rl.close();
    });

    