import { fromEvent, interval, of, from } from 'rxjs';
import { takeUntil, skip, distinct } from 'rxjs/internal/operators';

const observer = {
    next: value => console.log('Next:',value),
    complete: () => console.log('Completado')
}

//distinct: Operador que permite no repetir valores devueltos previamente sin importar en que orden han sido devuelto,
// los valores repetidos son omitidos, hace uso del operador === por tanto un 1:number != '1':string

of(1,1,1,2,2,3,3,4,4,6,9,67,7,8,1,8,9).pipe( //El ultimo 9 sera omitido asi como algunos otros casos
    distinct()
).subscribe( observer );

//Para el caso de objetos, por defecto los objetos son iguales si la posicion de memoria a la que 
//apuntan es igual, {nombre:1}=={nombre:1} => false, distinct permite añadir un predicado para definir
//cual es el campo o campos por el que tiene que comparar
interface Personaje {
    nombre: string,
    tipo: string
};

const personajes: Personaje[] = [{nombre:'He-Man', tipo:'bueno'},
{nombre:'Skeletor', tipo:'malisimo'},
{nombre:'He-Man', tipo:'bueno'},
{nombre:'Evil-lyn', tipo:'malisima'}]

from<Personaje[]>(personajes).pipe(distinct(p=> p.nombre && p.tipo)).subscribe( observer );
