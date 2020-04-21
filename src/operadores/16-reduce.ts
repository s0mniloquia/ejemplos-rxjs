import { interval } from "rxjs";
import { take, reduce, tap } from "rxjs/operators";

const array = [1,2,3,4,5];

const totalAccumulated = ( accumulatedTotal, nextValue ) => accumulatedTotal + nextValue;

console.log( array.reduce(totalAccumulated,0));

//Reduce: Operador de acumulación que retorna el total una vez que se COMPLETA.

const observ1$ = interval(1000).pipe(
    take(5), //Toma los 5 primeros valores y luego lo completa
    tap( value => console.log(value)),
    reduce(totalAccumulated, 0),
    //Hasta que no se completa el operador reduce no ejecuta el TAP posterior
    tap( value => console.log(`Soy el tap posterior al reduce`))
    );

observ1$.subscribe( totalAccumulated => console.log(`Total acumulado ${totalAccumulated}`));

