const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('연도 입력> ');
rl.prompt();
rl.on('line', function(buf) {
    let Year = parseInt(buf);
    if (Year % 4 === 0) {
        if (Year % 100 > 0) {
            console.log(`${Year}는 윤년입니다.`);
        } else if (Year % 100 === 0) {
            if (Year % 400 === 0) {
                console.log(`${Year}는 윤년입니다.`);
            }
            else {
                console.log(`${Year}는 윤년이 아닙니다.`);
            }
         }
    } else {
        console.log(`${Year}는 윤년이 아닙니다.`);
    }
 
    rl.close();
    });

