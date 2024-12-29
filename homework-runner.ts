import { Calculator } from "./Calculator";
import { Product } from "./Product";
import { BankAccount } from "./BankAccount";

const cal1 = new Calculator(5,2);
const firstNum = 4;
const secondNum = 7;

console.log(cal1.addition(5,4));
console.log(firstNum + ' is Greater than ' + secondNum + '? ' + cal1.isGreater(firstNum,secondNum));

const product1 = new Product('box', 3, 4);
const product2 = new Product('key', 6, 1);
const product3 = new Product('airplane', 3, 0);

console.log('Is the ' + product1.name + ' in Stock? - ' + product1.isInStock());
console.log('Is the ' + product3.name + ' in Stock? - ' + product3.isInStock());
console.log('Total Value of ' + product2.name + ' is - ' + product2.getTotalValue());

const myAccount = new BankAccount('123456789', 1000);

myAccount.deposit(500);
console.log('Balance after deposit: ' + myAccount.balance);

myAccount.withdraw(200);
console.log('Balance after withdraw: ', myAccount.balance);
