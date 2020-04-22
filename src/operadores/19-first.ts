import { from, fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/internal/operators';

const observer = {
    next: value => console.log('Next:',value),
    complete: () => console.log('Completado')
}

//First: Operador que retorna el primer valor emitido por un observable.
//Acto seguido completa la suscripción.
//Se le puede añadir un predicado para filtrar el valor emitido.

const obser1$ = from([1,2,3,4,5]);

obser1$.pipe(
    tap((x)=>console.log('Tap')), //Emitirá todos los elementos pero al suscriptor le llegará el primero que cumpla la condicion
    first( x => x==3 )
).subscribe( observer);

//Filtramos si el usuario pulsa la tecla Enter.
const obser2$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
    map<KeyboardEvent, any>( ({code})=>({code})), //Destructurando lo que nos llega del evento
    tap(x => console.log(x)),
    first(value => value.code === 'Enter')
).subscribe(observer);