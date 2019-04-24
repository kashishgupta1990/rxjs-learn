let Rx = require('rxjs');

const source = Rx.timer(5000);

source.subscribe(val => {
  console.log(val);
});