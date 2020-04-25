import { mergeAll, map, pluck, mergeMap } from 'rxjs/operators';
import { fromEvent, interval, Observer, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators';
import { ajax } from 'rxjs/ajax';

const observer:Observer<any> = {
    next: value => console.log('Next:',value),
    error: err => console.warn,
    complete: () => console.log('Completado')
}

const url_users:string = 'https://api.github.com/users/';


//mergeMap: Es un operador map combinado con un operador mergeAll, hasta que no se completan todos no se completa la suscripción, 
//aunque esta se desuscriba... no se llama al metodo complete de su observer;
// Observable padre -----1--2----------------------------|
//  Observable hijo1     -a--b---c---------------|
//  Observable hijo2        ---d---e--f-------------------------|         
//           Salida ------a--b-d-c-e--f------------------------|         
//La suscripción se completa cuando todos los observables tanto hijos como padre se completan


const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>( input, 'keyup').pipe(
    debounceTime(1000),
    pluck('target','value'),
    mergeMap( texto => ajax(`${url_users}${texto}`)),
    pluck('items') //Este operador afectaria al resultado del observable devuelto por mergeAll
    ).subscribe(res=>{
        console.log(res); //Imprimiría el resultado de los observables hijos
    })




