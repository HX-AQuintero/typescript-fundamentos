(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = false;
  myDynamicVar = [];

  myDynamicVar = 'hola';
  const rta = (myDynamicVar as string).toLowerCase(); //castea como string
  console.log(rta);

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed(); //casteo de forma distinta
  console.log(rta2);


})();
