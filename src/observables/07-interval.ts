import { interval, Observer } from 'rxjs';

const observer: Observer<number> = {
    next: number => console.log(number),
    error: error => console.error(error),
    complete: () => console.log('Completado')
}

//Interval: Emite una secuencia ASINCRONA de numeros en un intervalo de tiempo definido
//por el parametro que le pasamos al método. Da igual el # de milisegundos que le pasemos por
//parámetro, siempre se ejecutará de forma asíncrona, no es posible completar el observable, se ha de 
//hacer mediante operadores

const interval$ = interval(1000);

console.log('Inicio interval');
interval$.subscribe( observer );
console.log('Fin interval');

