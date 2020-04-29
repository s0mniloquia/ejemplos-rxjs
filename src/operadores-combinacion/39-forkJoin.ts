
import { interval, forkJoin, of } from 'rxjs';
import { take, delay } from 'rxjs/operators';

const observer = {
    next: value => console.log('Next:',value),
    complete: () => console.log('Completado')
}

//forkJoin: Función que permite combinar la última emisión de los observables cuando todos ellos han finalizado.
//Devuelve la salida en forma de array.
//observable1 ---a------b-------c|
//observable2 -------1------2------3-|
// salida     -----------------------c3-|

const obser1$ = of('a','b','c',{letra: 'd', codigo: 23});
const obser2$ = interval(2000).pipe(take(5));
const obser3$ = of(1,2,3,4,5).pipe(delay(3500));

/* forkJoin(obser1$, obser2$, obser3$).subscribe( observer );
 */
//Es posible devolver el resultado en forma de objeto
forkJoin({
            letras: obser1$, 
            interval: obser2$, 
            numeros: obser3$}).subscribe( observer );