(() => {
  //alias type
  type UserID = string | number;
  let userID: UserID;

  //literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type SizesCustom = 'S' | 5667 | number | 'XL';
  let shirtSize: SizesCustom;
  shirtSize = 'S';
  shirtSize = 'XL';
  shirtSize = 234;
  // shirtSize = 'M';
  console.log(`Tu talla es ${shirtSize}`);

  function greeting(userID: UserID, size: SizesCustom){
    if(typeof userID === 'string'){
      return `usuario ${userID} tiene talla ${size}`;
    } else {
      return `usuario #${userID} tiene talla ${size}`;
    }
  }
  console.log(greeting(1234, 456));
  console.log(greeting('Alejo', 'XL'));
  console.log(greeting(1243, 5667));
})()
