import { interval } from "rxjs";
import { map, share, take } from 'rxjs/operators';

//Operador share: Permite compartir una única instancia de Observable. Hasta que no se completan todos los subscribers no se completa el observable.
//Convierte un COLD observable en un HOT observable
const interval$ = interval(1000).pipe(map(val => Math.random() ), share())

const subs1 = interval$.pipe(take(5)).subscribe(console.log);
const subs2 = interval$.subscribe(console.log);
