// String Length => 속성값
let hello = '안녕하세요?'
console.log(hello.length);

//String 안에서 문자열을 찾을 때
console.log(hello.indexOf('하'));
console.log(hello.indexOf('한'));

let str1 = "Please locate where 'locate' occurs!";
let pos = str1.lastIndexOf("locate");
console.log(pos);

console.log(str1.search('locate'));

// 문자열의 일부분을 추출
let str2 = "Apple, Banana, Kiwi";
let res = str2.slice(7, 13);        // 시작 인덱스, 끝 인덱스
console.log(res);
console.log(str2.slice(-4));
console.log(str2.substr(7,6));      // 시작 인덱스, 갯수

// 문자열을 대체하는 방법
str = "Please visit Microsoft!";
let n = str.replace("Microsoft", "W3Schools");
console.log(n);
newStr = str2.replace(/,/g, ':');       //Regular Expression
console.log(newStr);

// 공백 제거하기
let str3 =  "       Hello World!        ";
console.log(str3);
console.log(str3.trim());

// 문자 추출
console.log(hello.charAt(2),hello[2]);

// 문자열을 Array로 변경
let txt = "a,b,c,d,e";   // String
console.log(txt.split(","));           // Split on commas
