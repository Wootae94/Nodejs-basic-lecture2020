// Array 생성
let cars = ["Saab", "Volvo", "BMW"];

let persons = new Array('John', 'Mary', 'Tom');
console.log(cars,persons);

console.log(cars.length,persons.length);
cars.sort();
console.log(cars);

//맨 마지막 Element
let fruits = ["Banana","Orange","Apple","Mango"];
console.log(fruits[fruits.length -1]);

let html = '';
html += '<ul>\n';
for (let fruit of fruits) {
    html += '\t<li>' + fruit + '</li>\n';
}
html += '</ul>\n';
console.log(html);

fruits[fruits.length]= "Cherry";
console.log(fruits.join(','));

let popItem = fruits.pop();         // 맨 끝 Element 제거
console.log(popItem, fruits);

let shiftItem = fruits.shift();     // 처음 Element 제거
console.log(shiftItem, fruits);

fruits.unshift('Lemon');
console.log(fruits);

delete fruits[0];
console.log(fruits);

let fruit = ["Banana","Orange","Lemon","Apple","Mango"];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
/* let spliceItem = fruit.splice(2,1);
console.log(spliceItem,fruit);
 */
console.log(cars.concat(fruit));

let citrus = fruit.slice(1,3);
console.log(citrus);
console.log(fruit.toString());

fruit.forEach(function(value, index){
    console.log(index, value);
})