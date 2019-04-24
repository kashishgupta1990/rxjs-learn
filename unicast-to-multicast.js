let Rx = require('rxjs');

const observable = Rx.Observable.create((observer) => {
    observer.next(Math.random());
});

const subject = new Rx.Subject();

// subscriber 1
subject.subscribe((data) => {
    console.log(data); // 0.24957144215097515 (random number)
});

// subscriber 2
subject.subscribe((data) => {
    console.log(data); // 0.24957144215097515 (random number)
});

observable.subscribe(subject);