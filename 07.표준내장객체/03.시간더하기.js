let date = new Date();

// 현재 날짜에서 100일을 더한 날짜 구하기
console.log(date.toDateString());
date.setDate(date.getDate()+100);
console.log(date.toDateString());

