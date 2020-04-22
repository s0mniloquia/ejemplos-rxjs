//Scan: Es un acumulador pero a diferencia del reduce se ejecuta cada vez que se emite un valor nuevo.

import { range } from "rxjs";
import { scan } from "rxjs/operators";

const observer = {
    next: value => console.log(`Next:${value}`),
    complete: () => console.log('Completado')
}

const accumulated = ( acc, cur) => acc + cur;

const obser1$ = range(10,5).pipe(
    scan( accumulated, 0)
);

obser1$.subscribe( observer );

//Tambien es posible utilizar el operador spread para ir sustituyendo el estado