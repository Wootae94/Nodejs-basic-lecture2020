//1에서 1000까지 각 숫자의 갯수를 구하시오.

let counts = [0,0,0,0,0,0,0,0,0,0];
//한 자리수
for (let i=1; i<=9;i++){
    counts[i]++;
}
//두 자리수
for(let i=10; i<=99;i++){
    counts[parseInt(i/10)]++; //10의 자리수
    counts[i%10]++;           //1의 자리수
}
//세 자리수
for(let i=100; i<=999;i++){
    counts[parseInt(i/100)]++;            //100의 자리수
    counts[parseInt((i%100)/10)]++;       //10의 자리수
    counts[i%10]++;                       //1의 자리수
}
//네 자리수
for(let i=1000; i<=1000; i++){
    counts[parseInt(i/1000)]++;              //1000의 자리수
    counts[parseInt((i%1000)/100)]++;        //100의 자리수
    counts[parseInt((i%100)/10)]++;          //10의 자리수
    counts[i%10]++;                          //1의 자리수
}
console.log(counts);