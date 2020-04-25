import { mergeAll, map, pluck, mergeMap, switchMap, concatMap, take } from 'rxjs/operators';
import { fromEvent, interval, Observer, Subscription } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/internal/operators';
import { ajax } from 'rxjs/ajax';

const observer:Observer<any> = {
    next: value => console.log('Next:',value),
    error: err => console.warn,
    complete: () => console.log('Completado')
}

const url_users:string = 'https://httpbin.org/delay/2?arg=';


//concatMap: Es un operador de aplanamiento que únicamente permite un observable hijo activo, cuando un nuevo
//observable hijo se lanza éste se coloca en una cola hasta que el observable hijo que se está ejecutando se complete. Permite varios encolar X observables.
// Observable padre ----1-------------2-----3-------------|
//  Observable hijo1    -a--b-----c--|
//  Observable hijo2          En cola --d---e---f----|  
//  Observable hijo3                En cola ----------h-i-------|       
//           Salida -----a--b-----c-----d---e---f-----h-i-------|         


const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>( input, 'keyup').pipe(
    pluck('target','value'),
/*     concatMap( texto => interval(1000).pipe(takeUntil(input$))) //El observable hijo se completará cada vez que el padre lance un next
 */    concatMap( texto => interval(1000).pipe(take(6))) //El observable hijo se completará a partir de la sexta emisión (incluida)

    );
    
    
    input$.subscribe(value=>{
        console.log(value); //Imprimirá el resultado del observable hijo que toque.
    })




