let number = 5;

let isEven = (5%2 === 0) ? true : false;
console.log(isEven);

let x = 5, y = 20;

let isDivisor = (y%x === 0) ? true : false;
console.log(isDivisor);

let test;
test = test ? test : '초기화합니다_1'; //undefined 는 false
test = test ? test : '초기화합니다_2';
console.log(test);
