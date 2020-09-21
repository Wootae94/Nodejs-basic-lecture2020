// 사용자가 입력한 글을 받는 방법
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('성적 입력> ');
rl.prompt();
rl.on('line', function(buf) {
    let Score = parseInt(buf);
    let grade;
    switch(parseInt(Score/10)) {
        case 10:
        case 9:
            grade = 'A';
            break;
        case 8:
            grade = 'B';
            break;
        case 7:
            grade = 'C';
            break;
        case 6:
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
    console.log(`성적 : ${Score} 학점 : ${grade}`);
    rl.close();
});


