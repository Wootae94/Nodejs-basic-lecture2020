// 여러개 파일 동기적으로 읽기
const async = require ('async');
const fs = require ('fs');

// 순서보장이 안 되는 것을 async 모듈을 사용하여 해결 하는 방법
async.parallel({
    bufA:   function (callback) {
        fs.readFile('tmp/a.txt' , 'utf8', callback);
    },
    bufB:  callback => {
        fs.readFile('tmp/b.txt' , 'utf8', callback);
    },
    bufC:  callback => {
        fs.readFile('tmp/c.txt' , 'utf8', callback);
    }
},function (e, results) {
    console.log(results.bufA);
    console.log(results.bufB);
    console.log(results.bufC);
});
