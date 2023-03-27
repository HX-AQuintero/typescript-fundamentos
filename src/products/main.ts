import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'Product1',
  createdAt: new Date(),
  stock: 34,
  size: 'XL'
});

addProduct({
  size: 'L',
  title: 'Product2',
  stock: 2341,
  createdAt: new Date()
});


console.log(products);

const total = calcStock();

console.log(total);

