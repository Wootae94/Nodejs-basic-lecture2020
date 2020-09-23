//피보나치 수열

function Fibo(n) {
    if (n===0|| n===1)
        return 1;
    return Fibo(n-1)+ Fibo(n-2);
}
for(let i=0; i<10; i++){
    console.log(`fibonacci(${i}) = ${Fibo(i)}`);
}