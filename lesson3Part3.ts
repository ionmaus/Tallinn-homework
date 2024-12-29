import { Product } from "./Product";

const product1 = new Product('box', 3, 2);

console.log('Is the ' + product1.name + ' in Stock? - ' + product1.isInStock());