//1에서 1000까지 각 숫자의 갯수를 구하시오.

let counts = [0,0,0,0,0,0,0,0,0,0];
for (let i=1; i<=1000; i++){
    let numString = String(i);
    for (let digit of numString) {
        counts[parseInt(digit)]++;
    }
}
console.log(counts);