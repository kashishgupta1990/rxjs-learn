let Rx = require('rxjs');
let Operators = require('rxjs/operators');
let counter = 1;

const getData1 = (param) => {
  return Rx.of(`retrieved new data with param ${param}`).pipe(
    Operators.delay(1000)
  )
}

const getData2 = (param) => {
  return Rx.of(`retrieved new data with param ${param}`).pipe(
    Operators.delay(10000)
  )
}


Rx.from([1,2,3,4]).pipe(
  Operators.switchMap((param) => {
    if(counter++%2 == 0){
      return getData1(param)
    }else{
      return getData2(param)
    }
  })
).subscribe(val => console.log(val));