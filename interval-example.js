let Rx = require('rxjs');

const source = Rx.interval(5000);

source.subscribe(val => {
  console.log(val);
});