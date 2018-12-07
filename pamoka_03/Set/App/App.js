const aibe = new Set();
const obj = { a: 1, b: 2 };
aibe.add(obj);
aibe.add({ a: 1, b: 2 }); // ok - kitas objektas
console.log(aibe); // 2 objektai
console.log("----------------------");

for (let item of aibe) {
    console.log(item);
}
console.log("----------------------");

aibe.forEach(item => console.log(item));
console.log("----------------------");