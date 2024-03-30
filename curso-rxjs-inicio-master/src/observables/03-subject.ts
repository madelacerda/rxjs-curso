import {Observable, Observer, Subject} from 'rxjs'

const observer: Observer<any> = {
    next: value => {
        console.log('next:', value)
    },
    error: err => console.warn('error: ', err),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(subscriber => {

    const intervalId = setInterval(() => {
        subscriber.next(Math.random())
    }, 1000)

    return () => {
        clearInterval(intervalId)
        console.log('intervalo destuido')
    };
});

/** 1- Casteo multiple
 * 2- Tambien es un observer
 * 3- Next, error, complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

//const sub1 = intervalo$.subscribe(rnd => console.log('subs1', rnd))
//const sub2 = intervalo$.subscribe(rnd => console.log('subs2', rnd))

const sub1 = subject$.subscribe(observer)
const sub2 = subject$.subscribe(observer)

setTimeout(() => {
    subject$.next(10);
    subject$.complete();

    subscription.unsubscribe();
}, 3500)
