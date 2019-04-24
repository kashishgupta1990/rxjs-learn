let Rx = require('rxjs');

const subject = new Rx.Subject();

// subscriber 1
subject.subscribe((data) => {
    console.log(data); // 0.24957144215097515 (random number)
});

// subscriber 2
subject.subscribe((data) => {
    console.log(data); // 0.24957144215097515 (random number)
});

subject.next(Math.random());