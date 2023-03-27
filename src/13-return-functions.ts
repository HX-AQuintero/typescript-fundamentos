(() => {
  const calcTotal = (prices: number[]) => { //infiere lo que retornará la función
    let total: number = 0;
    total = prices.reduce((acc,num) => acc + num, 0);
    return total;
  }

  const rta = calcTotal([1,2,3,3,4]);
  console.log(rta);


  const calcTotal2 = (prices: number[]): number => { //le decimos explícitamente qué retornará la función
    let total: number = 0;
    total = prices.reduce((acc,num) => acc + num, 0);
    return total;
  }

  const rta2 = calcTotal([1,2,3,3,5]);
  console.log(rta2);

  //función sin return son de tipo void
  const printTotal = (prices: number[])/* : void */ => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
    return rta;
  }
  printTotal([1,2,3,3,5]);

})()
