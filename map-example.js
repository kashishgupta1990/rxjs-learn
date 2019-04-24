let Rx = require('rxjs');
let Operators = require('rxjs/operators');

const data = Rx.of([
  {
    brand: 'porsche',
    model: '911'
  },
  {
    brand: 'porsche',
    model: 'macan'
  },
  {
    brand: 'ferarri',
    model: '458'
  },
  {
    brand: 'lamborghini',
    model: 'urus'
  }
]);

data.pipe(
  Operators.map(cars => cars.filter(car => car.brand === 'porsche')),
  Operators.map(cars => cars.map(car => `${car.model} ${car.brand}`))
).subscribe(cars => console.log(cars));