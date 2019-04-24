let Rx = require('rxjs');
let operator = require('rxjs/operators');

const obs1 = Rx.of(1, 2, 3, {name:'kashish'});
const obs2 = Rx.of(5, 6, 7, 8).pipe(operator.delay(2000));
const obs3 = Rx.of(9, 10, 11, 12).pipe(operator.delay(3000));

const obsNew = Rx.forkJoin(obs1, obs2, obs3);

obsNew.subscribe(val => {
  console.log(val)
});