import { range } from 'rxjs';
import { takeWhile } from 'rxjs/internal/operators';

const observer = {
    next: value => console.log('Next:',value),
    complete: () => console.log('Completado')
}

//takeWhile: Permite devolver los valores hasta que deja de cumplirse la condicion,
//una vez cumplida la condicion se completa la suscripcion

const range$ = range( 1, 10 ).pipe(
    takeWhile( value => value<5)
).subscribe( observer );

const range2$ = range( 1, 10 ).pipe(
    takeWhile( value => value<5, true) //El parametro segundo permite dejar pasar el valor que ha roto la condicion
).subscribe( observer );

