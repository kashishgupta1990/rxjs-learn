let Rx = require('rxjs');

const subject = new Rx.AsyncSubject();

// subscriber 1
subject.subscribe((data) => {
    console.log('Subscriber A:', data);
});

subject.next(Math.random())
subject.next(Math.random())
subject.next(Math.random())

// subscriber 2
subject.subscribe((data) => {
    console.log('Subscriber B:', data);
});

subject.next(Math.random());
subject.complete();

// Subscriber A: 0.4447275989704571
// Subscriber B: 0.4447275989704571