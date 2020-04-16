//OF - Es un operador que nos devuelve una serie de
//elementos de forma SINCRONA y que se autocompleta al
//enviar el último

import { of, Observer } from "rxjs";

const observer: Observer<number> = {
    next: value =>  console.log(`Valor devuelto ${value}`),
    error: error => console.error(`Error devuelto ${error}`),
    complete: () => console.log(`Se ha completado el observable of`)
}

//Se puede incluir el tipo de parámetro que se va a enviar,
//incluido un any si se piensa enviar distintos tipos de parámetros
/* const obs1$ = of<any>(1,'he-man',[1,2,3,4],function u(){});*/
const obs$ = of<number>(1,2,3,4,5,6);

//El operador of emite los valores de forma sincrona, ejecutará el primer console.log
//despues imprimirá todos los valroes y por ultimo ejecutará el segundo console.log,

console.log('Inicio consumo observable of');
obs$.subscribe( observer );
console.log('Fin de consumo observable of');