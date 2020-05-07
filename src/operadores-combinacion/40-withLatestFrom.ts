import { interval } from "rxjs";
import { map, share, take, withLatestFrom } from 'rxjs/operators';

//Operador withLatestFrom: Permite construir en un array el valor emitido por observable junto al ULTIMO valor emitido por otros observables.

const interval1$ = interval(1000);
const interval2$ = interval(3000).pipe(withLatestFrom(interval1$),
                                       map( ([primer, segundo]) => `El primero intervalo de 3s ${primer} y el segundo de 1s ${segundo}`) )
.subscribe(console.log);

