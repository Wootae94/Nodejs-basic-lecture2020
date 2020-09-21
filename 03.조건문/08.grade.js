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
    if (Score >= 90) {
        grade = 'A';
    } else if (Score>=80)  {
        grade = 'B';
    } else if (Score>=70)  {
        grade = 'C';
    } else if (Score>=60)  {
        grade = 'D';  
    } else {
        grade = 'E'; 
      }
    console.log(`성적 : ${Score} 학점 : ${grade}`);
    rl.close();
});


