let Rx = require('rxjs');

const obs1 = Rx.of(1, 2, 3, 4, 5);
const obs2 = Rx.of(5, 6, 7, 8);
const obs3 = Rx.of(9, 10, 11, 12);

const obsNew = Rx.zip(obs1, obs2, obs3);

obsNew.subscribe(val => {
  console.log(val);
});