let Rx = require('rxjs');
let Operators = require('rxjs/operators');

const obs1 = Rx.of(1);
const obs2 = Rx.of(2);
const obs3 = Rx.of(3);
const obs4 = Rx.of(4);
const obs5 = Rx.of(5);

obs1
  .pipe(
    Operators.concatMap(() => obs2, (x, y) => {
      // x contains the value returned by Observable obs1

      // y contains the value returned by Observable obs2
      return x + y;
    }),
    Operators.concatMap(() => obs3, (x, y) => {
      // x contains the value returned 
      // by combining Observable obs1 & obs2

      // y contains the value returned by Observable obs3
      return x + y;
    }),
    Operators.concatMap(() => obs4, (x, y) => {
      // x contains the value returned by
      // combining Observable obs1, obs2 and obs3

      // y contains the value returned by Observable obs3
      return x + y;
    }),
    Operators.concatMap(() => obs5, (x, y) => {
      // x contains the value returned by 
      // combining Observable obs1, obs2, obs3 and obs4

      // y contains the value returned by Observable obs3
      return x + y;
    })
  )
  .subscribe((val) => {
    // final value after combing all 5 observables 
    // is received in the val parameter
    console.log('>> ', val);
  });