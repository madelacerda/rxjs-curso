import {Observable, Observer} from 'rxjs'

const observer: Observer<any> = {
    next: value => {
        console.log('siguiente [next]:', value)
    },
    error: err => console.warn('error: ', err),
    complete: () => console.info('completado [obs]')
}

//const obs$ = Observable.create();
const obs$ = new Observable<string>(subs => {
    subs.next('Hola');
    subs.next('mundo');

    subs.next('Hola');
    subs.next('mundo');

    // Forzar un error
    //const a = undefined;
    //a.nombre = 'Fernando'

    subs.complete();

    subs.next('Hola');
    subs.next('mundo');
});

obs$.subscribe(observer);

//obs$.subscribe(valor => console.log('next', valor),
//   error => console.warn('error', error),
//  () => console.info('completado'))