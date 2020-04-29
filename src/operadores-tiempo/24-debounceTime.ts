import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/internal/operators';
import { map, tap } from 'rxjs/operators';

const observer = {
    next: value => console.log(`[next]:${value}`),
    complete: () => console.log('Complete')
}

//debounceTime: Operador de tiempo que devuelve el ultimo valor emitido una vez transcurridos los milisegundos
//especificados por parametro, si se vuelve a emitir un nuevo valor el contador de tiempo se inicializa.
//Ej. debounceTime(2000)
//interval$ ---a----------b-c------------------->
//             2 seg.->   X 2 seg.->  Cuando emitimos b se empiezan a contar los 2 segundos pero se cancelan porque emitimos rapidamente c y vuelve a empezar el contador 
//          ----------a------------c------------>

const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent<KeyboardEvent>( input, 'keyup').pipe(
    debounceTime(1000),
    pluck('target','value'),
    distinctUntilChanged() //A este operador le afecta lo que le devuelve el operador anterior, es decir, debounceTime sirve de filtro
                           //ya que al no dejar pasar segun que valores el distincUntilChanged solamente actua sobre los valores que le llegan
    ).subscribe( observer );

