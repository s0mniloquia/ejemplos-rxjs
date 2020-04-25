import { ajax } from 'rxjs/ajax';
import { pluck, catchError, map } from 'rxjs/operators';
import { of, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators';

const url_users:string = 'https://api.github.com/users/';

//problema aplanamiento: Ejemplo de problema que resuelven los operadores de aplanamiento

const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>( input, 'keyup').pipe(
    debounceTime(1000),
    pluck('target','value'),
    map( texto => ajax(`${url_users}${texto}`))).subscribe(res=>{
        console.log(res); //Imprimiría un objeto Observable pero no los valores esperados, que estan incluidos en ese observable
        res.subscribe( value => console.log(value.response)); //Necesitamos suscribirnos al resultado ya que nos devuelve un observable tambien
    })



