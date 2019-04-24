let Rx = require('rxjs');

const subject = new Rx.ReplaySubject(2, 2000);

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

// Subscriber A: 0.3541746356538569
// Subscriber A: 0.12137498878080955
// Subscriber A: 0.531935186034298
// Subscriber B: 0.12137498878080955
// Subscriber B: 0.531935186034298
// Subscriber A: 0.6664809293975393
// Subscriber B: 0.6664809293975393