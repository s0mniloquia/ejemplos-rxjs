import { Observer, range, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const observer: Observer<string> = {
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.log('Completado')
}

//MapTo: Transforma la entrada en una salida especifica sin necesidad de conocer la entrada, como seria el caso del map.
//Es posible mapear el valor de entrada y el de salida a fin de mejorar el tipado y evitar errores
const obser1$ = range(1,5).pipe(mapTo<number, string>('Emitimos nuevo valor'));
obser1$.subscribe( observer );

const obser2$ = fromEvent<KeyboardEvent>(document, 'click').pipe(mapTo<KeyboardEvent, string>('Presionamos la tecla'));
obser1$.subscribe( observer );





