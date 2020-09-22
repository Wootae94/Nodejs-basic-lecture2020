/* 디지털 시계에 하루동안(00:00~23:59) 3이 표시되는 시간을 
초로 환산하면 총 몇 초(second) 인가? */
let cnt1 = 0;
let cnt2 = 0;
for(let hour=0; hour<24; hour++){
    for(let min=0; min<60; min++){
        let hourStr = hour.toString();
        let minStr = min.toString();
        if (hourStr.indexOf('3')!=-1){
            cnt1++;
    } else if (minStr.indexOf('3')!=-1){
        cnt2++;
    }
}
}
totalSec = cnt1 * 60 + cnt2 * 60
console.log(cnt1);
console.log(cnt2);
console.log(totalSec);

