
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('시 : 분 입력> '); //3,7,6,22
rl.prompt();
rl.on('line', function(buf) {
    // 입력을 받아서 처리하는 logic
    let time = buf.split(':');
    let hour = parseInt(time[0])
    let min = parseInt(time[1])
   
   if (min - 45 >0) {
        newHour = hour;
        newMin = min - 45;
   } else {
        newHour = hour-1;
        newMin = min + 15;
    }
   
    console.log(`새로운 알람 시은 ${newHour} : ${newMin > 59 ? '00' : newMin} 입니다.`);   

    rl.close();
});

