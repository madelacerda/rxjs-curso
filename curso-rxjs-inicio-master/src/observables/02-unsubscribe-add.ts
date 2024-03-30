import {Observable, Observer} from 'rxjs'

const observer: Observer<any> = {
    next: value => {
        console.log('next:', value)
    },
    error: err => console.warn('error: ', err),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(susbcriber => {
    //Crear un contador 1,2,3,4,5,6.....

    let count = 0;

    const interval = setInterval(() => {
        // cada segundo
        count++;
        susbcriber.next(count)
        console.log(count)

    }, 1000);

    setTimeout(() => {
        susbcriber.complete()
    }, 2500)

    return () => {
        clearInterval(interval);
        console.log('intervalo destruido')
    }
})

const subs1 = intervalo$.subscribe(observer)
const subs2 = intervalo$.subscribe(observer)
const subs3 = intervalo$.subscribe(observer)

subs1.add(subs2)
subs1.add(subs3);


setTimeout(() => {
    subs1.unsubscribe()
    //subs2.unsubscribe()
    //subs3.unsubscribe()

    console.log('completado timeout')
}, 6000)