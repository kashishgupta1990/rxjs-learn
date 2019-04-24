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

// using a regular map
Rx.from([1,2,3,4]).pipe(
  Operators.map(param => getData(param))
).subscribe(val => val.subscribe(data => console.log(data)));

// using map and mergeAll
Rx.from([1,2,3,4]).pipe(
  Operators.map(param => getData(param)),
  Operators.mergeAll()
).subscribe(val => console.log(val));

// using mergeMap
Rx.from([1,2,3,4]).pipe(
  Operators.mergeMap((param) => {
    if(counter++%2 == 0){
      return getData1(param)
    }else{
      return getData2(param)
    }
  })
).subscribe(val => console.log(val));