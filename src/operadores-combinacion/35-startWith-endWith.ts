import { interval, Observer } from 'rxjs';
import { startWith, take, endWith } from "rxjs/operators";

//startWith: Operador que emite inicialmente el valor que le pasamos por parámetro
//endWith: Operador que emite al final del observable el valor que le pasamos por parámetros
//Es aconsejable indicar estos operadores al final y al inicio del observable al que afectan

const observer:Observer<string|number> = {
    next: value => console.log(value),
    error: err=> console.warn(err),
    complete: () => console.log('Completado')
}

const interval$ = interval(1000).pipe(
    take(5), //Si ponemos este take entre startWith y endWith contará los valores del startWith y añadirá dos mas del intervalo
    startWith('a','b','c'),
    endWith('f','g','d')
).subscribe( observer );