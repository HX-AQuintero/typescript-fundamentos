(() => {
  let userID: string | number;
  userID = 1231;
  userID = 'hola';

  function greeting(myText: string | number){
    if(typeof myText === 'string'){
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }
  greeting('hola');
  greeting(12.9931);
  greeting(NaN);
  // greeting(null);
})()
