import { Observer, of, fromEvent, from } from 'rxjs';
import { pluck } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.log('Completado')
}

//Operador PLUCK: Sirve para extraer una UNICA propiedad de un objeto. 
const obser1$ = of<any>({ nombre: 'He-man', domicilio: 'Castillo Greyskull'}).pipe(pluck('nombre'));
obser1$.subscribe( observer );

//Si es un array de objetos extraerá la propiedad de cada
//uno de los elementos.
const obser2$ = from<any>([
    { nombre: 'He-man', domicilio: 'Castillo Greyskull'},
    { nombre: 'Skeletor', domicilio: 'Eternia'}]
  ).pipe(pluck('nombre'));

obser2$.subscribe( observer );

//Si es un objeto anidado en otro se accederian a la jerarquia mediante el simbolo ","
const obser3$ = fromEvent<MouseEvent>( document, 'click').pipe(pluck('view','innerWidth'));
obser3$.subscribe(observer); 