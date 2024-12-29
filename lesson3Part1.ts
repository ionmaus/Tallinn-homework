import {Calculator} from "./Calculator";

let cal1 = new Calculator(5,2);
const num1 = 4;
const num2 = 7;

console.log(cal1.addition(5,4));
console.log(num1 + ' is Greater than ' + num2 + '? ' + cal1.isGreater(num1,num2));
