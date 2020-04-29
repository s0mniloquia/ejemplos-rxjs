
import { interval, fromEvent, combineLatest } from 'rxjs';
import { pluck } from 'rxjs/operators';

const observer = {
    next: value => console.log('Next:',value),
    complete: () => console.log('Completado')
}

//combineLatest: Función que permite combinar y emitir el ultimo valor emitido por los observables en un array en orden de insercion en la funcion declarativa.
//observable1 ---a------b-------c|
//observable2 -------1------2------3-|
// salida     -------a1-b1--b2--c2-c3|

const obser1$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(pluck('code'));
const obser2$ = interval(2000);

combineLatest(obser1$, obser2$).subscribe( observer );