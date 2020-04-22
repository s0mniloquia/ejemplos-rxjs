import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/internal/operators';

const observer = {
    next: value => console.log('Next:',value),
    complete: () => console.log('Completado')
}

//distinctUntilChanged: Operador que permite no repetir el valor anterior,
// los valores repetidos son omitidos, hace uso del operador === por tanto un 1:number != '1':string

of(1,1,1,2,2,3,3,4,4,6,9,67,7,8,1,8,9).pipe( //El ultimo 9 sera mostrado asi como algunos otros casos
    distinct()
).subscribe( observer );

//Para el caso de objetos, por defecto los objetos son iguales si la posicion de memoria a la que 
//apuntan es igual, {nombre:1}=={nombre:1} => false, distinctUntilChanged permite añadir un predicado donde
//se le pasa el objeto anterior y el actual para comparar.
interface Personaje {
    nombre: string,
    tipo: string
};

const personajes: Personaje[] = [{nombre:'He-Man', tipo:'bueno'},
{nombre:'Skeletor', tipo:'malisimo'},
{nombre:'He-Man', tipo:'bueno'},
{nombre:'Evil-lyn', tipo:'malisima'}]

//Si es true no dejará pasar el valor y lo bloquea
from<Personaje[]>(personajes).pipe(distinctUntilChanged((ant,act)=> ant.nombre === act.nombre)).subscribe( observer );

//Tambien existe el operador distinctUntilKeyChanged donde se le pasa una key para comparar
from<Personaje[]>(personajes).pipe(distinctUntilKeyChanged('nombre')).subscribe( observer );
