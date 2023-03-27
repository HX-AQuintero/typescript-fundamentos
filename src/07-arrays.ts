(() => {
  let prices = [1,23,456,53453,63457,934];
  // prices.push(true)
  // prices.push('hola')
  prices.push(12312);
  console.log('prices:', prices);

  let prices2 = [1,23,456,'hola',true];
  prices2.push(true)
  prices2.push('hola')
  prices2.push(12312);
  // prices2.push(()=>{});
  console.log('prices2:', prices2);

  let mixedValues: (number | string | boolean)[] = [true, 'hola'];
  // mixedValues.push(()=>{});
  console.log('mixedValues:', mixedValues);

  let moreValues: (number | string | boolean | object)[] = [true, 'hola'];
  moreValues.push(2);
  moreValues.push({});
  moreValues.push();
  moreValues.push([1,2,3,4]);
  // moreValues.push(undefined);
  console.log('moreValues:', moreValues);

  let numbers = [1,2,3,4,5, 'hola'];
  // numbers.map(item => item * 2)
})()
