import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/internal/operators';
import { map, tap } from 'rxjs/operators';

const observer = {
    next: value => console.log(`[next]:${value}`),
    complete: () => console.log('Complete')
}

//debounceTime: Operador de tiempo que devuelve el ultimo valor emitido una vez transcurridos los milisegundos
//especificados por parametro, si se vuelve a emitir un nuevo valor el contador de tiempo se inicializa.
const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent<KeyboardEvent>( input, 'keyup').pipe(
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged() //A este operador le afecta lo que le devuelve el operador anterior, es decir, debounceTime sirve de filtro
                           //ya que al no dejar pasar segun que valores el distincUntilChanged solamente actua sobre los valores que le llegan
    ).subscribe( observer );

