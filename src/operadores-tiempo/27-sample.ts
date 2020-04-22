import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';
//sample: Operador que emite el ultimo valor de un observable cuando un segundo observable emita un valor.
//Si el observable 1 emite un valor cada 5 s. y el segundo observable emite un valor cada 2, unicamente se 
//emitirá un valor para el observable 1 hasta que no emita mas valores, es decir, los valores no se repiten

//interval$ ---a---b------c-------------------------------------->
//click$    ---------ev------ev-----ev--------------------------->
//          ----------b-------c---------------------------------->

const click$ = fromEvent( document, 'click');

const interval$ = interval(1000).pipe(sample(click$)).subscribe(console.log);

