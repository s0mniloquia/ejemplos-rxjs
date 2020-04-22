import { fromEvent, interval } from 'rxjs';
import { takeUntil, skip } from 'rxjs/internal/operators';

const observer = {
    next: value => console.log('Next:',value),
    complete: () => console.log('Completado')
}

//skip: Operador que permite omitir los primeros x valores emitidos por un observable, 
//x que le pasamos por parametro

//El ejemplo permite obviar los 3 primeros clicks sobre el document, a partir del 4º emitira un evento
//que sera escuchado por el takeUntil para finalizar la suscripcion
const click$ = fromEvent( document, 'click' ).pipe(skip(3));

const interval$ = interval(1000).pipe(takeUntil(click$)).subscribe( observer );

