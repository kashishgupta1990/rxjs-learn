let Rx = require('rxjs');

const obs1 = Rx.interval(1000);
const obs2 = Rx.interval(1100);

const obsNew = Rx.combineLatest(obs1, obs2);

const subscription = obsNew.subscribe(val => {
  console.log(">> ", val);
});

setTimeout(() => {
  subscription.unsubscribe();
}, 8000);