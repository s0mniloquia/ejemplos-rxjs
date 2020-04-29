
import { asyncScheduler, of, range, interval, merge } from 'rxjs';
import { take } from 'rxjs/operators';

const observer = {
    next: value => console.log('Next:',value),
    complete: () => console.log('Completado')
}

//merge: Función que permite mezclar observables, se van mostrando los valores a medida que van emitiendose
//observable1 ---a--b-c---|
//observable2 ---1--2--3-----------|
//observable3 -----d--e--f----------------|
// salida     ---a1db2ce3f----------------->
const obser1$ = interval(1000);
const obser2$ = interval(2000);
const obser3$ = interval(3000);

merge(obser1$, obser2$, obser3$.pipe(take(9))).subscribe( observer );