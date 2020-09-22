//완전수 구하기
//약수 구하는 함수
function getDivisors(num) {
    let divArray = [];
    for(let k=1; k<num; k++){
        if (num%k === 0){
            divArray.push(k);
        }
}
return divArray;
}

//Array 원소의 합을 계산해주는 함수
function sumArray(arr) {
    let sum = 0;
    for (let element of arr)
        sum += element;
    return sum;
}
// 완전수 찾기
for (let i=2; i<= 10000; i++){
    let array = getDivisors(i);
    let divSum = sumArray(array);
    if (i === divSum){
        console.log(i);
        console.log(array);
    }
}