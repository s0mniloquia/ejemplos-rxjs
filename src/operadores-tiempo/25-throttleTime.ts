import { fromEvent } from 'rxjs';
import { pluck, distinctUntilChanged } from 'rxjs/internal/operators';
import { throttleTime } from 'rxjs/operators';

const observer = {
    next: value => console.log(`[next]:${value}`),
    complete: () => console.log('Complete')
}

//throttleTime: Operador de tiempo que devuelve un valor emitido y no vuelve a escuchar valores pasado el tiempo indicado, los valores emitidos
//durante es periodo de tiempo se pierden. Es posible emitir el ultimo y el primer valor del intervalo
//Ej. throttleTime(2000)
//interval$ ---a--b-c------d--e-------f------------>
// salida   ---a-----------d----------f-->
//             2seg.-->|   2seg.-->|  2seg.-->|
const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent<KeyboardEvent>( input, 'keyup').pipe(
    throttleTime(1000),
    pluck('target','value'),
    distinctUntilChanged() //A este operador le afecta lo que le devuelve el operador anterior, es decir, debounceTime sirve de filtro
                           //ya que al no dejar pasar segun que valores el distincUntilChanged solamente actua sobre los valores que le llegan
    ).subscribe( observer );

