import { ajax } from 'rxjs/ajax';
import { pluck, map, mergeAll } from 'rxjs/operators';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators';

const url_users:string = 'https://api.github.com/users/';

//mergeAll: Operador de aplanamiento que mergea todas las peticiones de observables hijos en una única salida
// Observable padre -----------------------------------|
//  Observable hijo1    -a--b---c---------------|
//  Observable hijo2        --d---e--f-------------------------|         
//           Salida -----a--b-d-c-e-f------------------------|         
//La suscripción se completa cuando todos los observables tanto hijos como padre se completan

const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>( input, 'keyup').pipe(
    debounceTime(1000),
    pluck('target','value'),
    map( texto => ajax(`${url_users}${texto}`)),
    mergeAll(),
    pluck('items') //Este operador afectaria al resultado del observable devuelto por mergeAll
    ).subscribe(res=>{
        console.log(res); //Imprimiría el resultado de los observables hijos
    })



