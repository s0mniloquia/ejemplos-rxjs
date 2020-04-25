import { pluck, exhaustMap, take } from 'rxjs/operators';
import { fromEvent, interval, Observer } from 'rxjs';

const observer:Observer<any> = {
    next: value => console.log('Next:',value),
    error: err => console.warn,
    complete: () => console.log('Completado')
}

const url_users:string = 'https://httpbin.org/delay/2?arg=';


//exhaustMap: Es un operador de aplanamiento que únicamente permite un observable hijo activo, cuando un nuevo
//observable hijo se lanza si existe un observable hijo ejecutandose éste nuevo observable es omitido.
//No permite la suscripción a un nuevo observable hijo hasta que el actual no se ha completado. NO ENCOLA.
// Observable padre ----1---2----3------4----------|
//  Observable hijo1    -a--b-----c--|
//  Observable hijo2        X //No lo carga porque ya existe el hijo1 ejecutandose  
//  Observable hijo3             X //No lo carga porque ya existe el hijo1 ejecutandose  
//  Observable hijo1                    -x--s--|   
//           Salida -----a--b-----c------x--s----|         


const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>( input, 'keyup').pipe(
    pluck('target','value'),
    exhaustMap( texto => interval(1000).pipe(take(9)))
    )
    input$.subscribe(value=>{
        console.log(value); //Imprimirá el resultado del observable hijo que toque.
    })




