import { Observer, range, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const observer: Observer<number|string> = {
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.log('Completado')
}

//Operador MAP: Modifica el flujo inicial del observable, se le puede mapear el valor que recibe y el que devolverá
//Al ser una función de flecha si fuese necesario añadir llaves seria necesario añadir el "return" para que devuelva "algo"

const range$ = range(1,5).pipe(map<number,number>( val => val * 5));

range$.subscribe( observer );

//Emitimos el evento de pulsar una tecla (El evento se lanza al levantar el dedo de la tecla) y 
//modificamos el resultado 
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map<KeyboardEvent, string>( event => event.code )
);

keyup$.subscribe( observer );