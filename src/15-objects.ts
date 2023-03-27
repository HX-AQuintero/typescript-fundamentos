(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];

  const addProduct = (data: Product): Product[] => {
    products.push(data);
    return products;
  }

  addProduct({
    title: 'Product1',
    createdAt: new Date(),
    stock: 34,
    size: 'XL'
  })


  addProduct({    // no importa el orden de las key-values, pero SI el tipado de cada propiedad
    size: 'L',
    title: 'Product2',
    stock: 2341,
    createdAt: new Date()
  })
  console.log(products);
})()
