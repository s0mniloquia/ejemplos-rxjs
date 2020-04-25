import { mergeAll, map, pluck, mergeMap } from 'rxjs/operators';
import { fromEvent, interval, Observer, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators';
import { ajax } from 'rxjs/ajax';

const observer:Observer<any> = {
    next: value => console.log('Next:',value),
    error: err => console.warn,
    complete: () => console.log('Completado')
}

const url_users:string = 'https://httpbin.org/delay/2?arg=';


//switchMap: Es un operador de aplanamiento que únicamente permite un observable hijo activo, cuando un nuevo
//observable hijo se lanza si existe un observable hijo anterior ejecutandose este se completa y pasa a suscribirse al nuevo observable hijo.
// Observable padre ----1-----2----3----------------------|
//  Observable hijo1    -a--b-|
//  Observable hijo2          --d--|  
//  Observable hijo3               ------h-i-----------------------|       
//           Salida -----a--b---d--------h-i-----------------------|         
//La suscripción se completa cuando todos los observables tanto hijos como padre se completan


const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>( input, 'keyup').pipe(
    pluck('target','value'),
    mergeMap( texto => ajax(`${url_users}${texto}`))
    ).subscribe(res=>{
        console.log(res); //Imprimiría el resultado del observable hijo que ha podido completar su petición
    })




