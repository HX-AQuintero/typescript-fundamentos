import { Product } from './product.model';

export const products: Product[] = [];

export const addProduct = (data: Product): Product[] => {
  products.push(data);
  return products;
}

export const calcStock = (): number => {
  let total = 0;
  products.forEach((item) => {
    total += item.stock;
  });
  return total;
}
