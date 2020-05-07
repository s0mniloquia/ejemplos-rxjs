import { fromEvent } from 'rxjs';
import { pluck, takeWhile, takeLast, tap } from 'rxjs/operators';

//Operador: takeLast -> Emite los ultimos x eventos de un observable una vez que este se completa, hasta que no se completa no ejecuta este operador
const event$ = fromEvent( document, 'keyup').pipe(
                                            pluck('code'),
                                            //Emite mientras la condicion se cumple
                                            takeWhile( code => code !== 'Enter'),
                                            //Una vez se finaliza el observable se emiten los últimos 4 eventos
                                            takeLast(4),
                                            //Emite un tap por cada emision del takeLast
                                            tap( val => console.log('Paso por aqui'))
).subscribe(console.log);