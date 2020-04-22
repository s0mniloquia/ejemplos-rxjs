import { range } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const observer = {
    next: (value) => console.log(`next:${value}`), 
    complete: () => console.log(`Completado`)
}

//Take: Operador que deja pasar los x primeros valores devueltos por el observable, 
//una vez devueltos completa la suscripción. NO EL OBSERVABLE.

const obser1$ = range(1,5);

obser1$.pipe(
    tap(() => {console.log('Antes del take')}),
    take(3),
    tap(() => {console.log('Despues del take')} )
).subscribe( observer );

