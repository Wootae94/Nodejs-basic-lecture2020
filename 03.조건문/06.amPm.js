let today = new Date();
console.log(today);
console.log(today.getFullYear()); //년
console.log(today.getMonth()+1);    //월
console.log(today.getDay());      //요일
console.log(today.getDate());     //날짜
console.log(today.getHours());    //시
console.log(today.getMinutes());  //분
console.log(today.getSeconds());  //초



/* console.log(today.toLocaleString());
console.log(today.toISOString()); */

/* const moment = require('moment'); 
require('moment-timezone'); 
moment.tz.setDefault("Asia/Seoul"); 
var date = moment().format('YYYY-MM-DD HH:mm:ss'); 
console.log(date); */

let date = new Date();

if (date.getHours() < 12) {
    console.log("오전입니다.");
} else { 
    console.log("오후입니다.");
}

