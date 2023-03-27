(() => {
  let productTitle = 'My amazing product';
  productTitle = 'My new amazing product';
  console.log('productTitle:', productTitle);

  let productOwner = 'I\'m the owner'; //escape de caracteres
  console.log('productOwner:', productOwner);

  let price: number = 500;
  let discountPrice: boolean = true;


  const summary = `
    title: ${productTitle},
    owner: ${productOwner},
    ${price},
    ${discountPrice}
  `; // interpolación de strings (Template literals(strings))
  console.log('summary:', summary);

  const myString: string = 'hola';

})()
