(() => {
  const login = (data: {email: string, password: number}): void => {
    console.log(data.email, data.password);
  }

  login({
    email: 'mail@mail.com',
    password: 123456789
  });


  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: 'Product1',
    createdAt: new Date(),
    stock: 34,
    size: 'XL'
  })

  console.log(products);

})()
