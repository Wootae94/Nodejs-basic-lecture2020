// 시간을 측정합니다.
console.time(`alpha`);

/* let output = 1;
for(let i=1; i<= 10; i++){
    output *= i;
}
 */

 let sum = 0;
 for( let i=1; i<=1e6; i++){
     sum += i;
 }
console.log('Result:',sum);

// 시간 측정을 종료합니다.
console.timeEnd('alpha');