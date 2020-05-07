import { pairwise, tap, map, pluck } from "rxjs/operators";
import { fromEvent } from 'rxjs';

for(let i=0; i<100; i++){
    document.write(i.toString());
    document.write('<br>');
}

//Operador pairwise() => Devuelve un array con los 2 ultimos valores, el anterior y el actual.
const scroll$ = fromEvent<Event>( document, 'scroll').pipe(
                                                    pluck<Event,number>('target','scrollingElement','scrollTop'),
                                                    pairwise(),
                                                    tap( ([anterior,actual])=> anterior<actual?console.log('Bajo'):console.log('Subo') ));

scroll$.subscribe(event => console.log(event));