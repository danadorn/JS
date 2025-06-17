// logical operator
let n1= 10;
let n2 = 40;
let n3 = 10;
let n4 = 40;

let resultOfLogicalAND = (n1 < n4) && (n2 == n3);
console.log(`The Result of Using Logical And: ${resultOfLogicalAND}`);

let resultOfLogicalOR = (n1 < n4) || (n2 == n3);
console.log(`The result of using logical or: ${resultOfLogicalOR}`);

let resultOfLogicalNOT = !(resultOfLogicalAND);
console.log(`The result of using logical not: ${resultOfLogicalNOT}`);logi