import { fromEvent, interval } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators';

const observer = {
    next: value => console.log('Next:',value),
    complete: () => console.log('Completado')
}

//takeUntil: Operador que permite completar una suscripcion monitorizando otro observable
//cuando este segundo observable emite un valor.

const click$ = fromEvent( document, 'click' );

const interval$ = interval(1000).pipe(takeUntil(click$)).subscribe( observer );

