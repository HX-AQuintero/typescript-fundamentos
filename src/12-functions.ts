(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ){
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);
  console.log(producto1.size);


  //arrow function
  const createProductToJson2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes //significa size: Sizes | undefined. Es parámetro opcional. Si no se pasa un valor, asume undefined
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJson2('P2', new Date(), 13, /* 'L' */);
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);
  console.log(producto2.size);

})()
