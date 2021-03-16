let variable = 228;

console.log(variable, typeof variable);
// 결과 : 228 number

variable = String(variable);
console.log(variable, typeof variable);
// 결과 : 228 string

variable = Object(variable);
console.log(variable, typeof variable);
// 결과 : [String: '228'] object

variable = Boolean(variable);
console.log(variable, typeof variable);
// 결과 : true boolean

console.log(typeof 'good'); // string
console.log(typeof 333333); // int