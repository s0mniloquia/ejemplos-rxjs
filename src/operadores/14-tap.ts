import { Observer, range } from 'rxjs';
import { tap, filter, map } from 'rxjs/operators';

const observer: Observer<number> = {
    next: value => console.log(`Next: ${value}`),
    error: error => console.error(`Error:${error}`),
    complete: () => console.log('Completado')
}



//Tap: Es un operador que te permite observar el flujo de datos ya que no devuelve nada, aunque los indiquemos explicitamente
//con la instrucción return. También permite realizar tareas colaterales al pasar la información por ahí.

const obser1 = range(3,15).pipe(
        tap( value => console.log(`Soy el tap 1 ${value}`)),
        map( value => value * 5 ),
        //El operador tap puede recibir un observer
        tap( { next: (value) => console.log(`Soy el tap 2 ${value}`),
               complete: ()=> console.log(`Soy el tap 2 completado`)
            }),
        filter( value => value % 2 === 1)

).subscribe( observer );







