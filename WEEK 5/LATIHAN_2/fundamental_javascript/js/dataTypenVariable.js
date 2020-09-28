let stringData = 'data string';
let numberData = 1;
const dataConst = 3.14; //tidak bisa diubah
var oldSchool = 'tua';
var booleanData = true;
let isGreater = 4 > 1;
let age;
let thisEmptyObject = {};


console.log(`let | String : ${stringData}`);
console.log(`let | Number : ${numberData}`);
console.log(`Const : ${dataConst}`);
console.log(`Var : ${oldSchool}`);
console.log(`booleanType : ${booleanData}`);
console.log(`booleanType : ${isGreater}`);
console.log(`undifined : ${age}`);
console.log(`thisEmptyObject : ${thisEmptyObject}`);
console.log('Open thisEmptyObject :' ,JSON.stringify(thisEmptyObject));

console.log(typeof(stringData));
console.log(typeof(numberData));
console.log(typeof(dataConst));
console.log(typeof(booleanData));
console.log(typeof(isGreater));
console.log(typeof(thisEmptyObject));
