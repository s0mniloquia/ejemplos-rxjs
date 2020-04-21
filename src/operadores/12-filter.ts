import { Observer, of, range } from 'rxjs';
import { filter } from 'rxjs/operators';

const observer: Observer<number> = {
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.log('Completado')
}
 
//Filter: Sirve para filtrar contenido del observable, recibe por parametro el valor del observable
of(20,30,45,12,23).pipe(
    filter( value => value % 2 === 0)
).subscribe( observer );

//La funcion filter te permite acceder al indice del observable
range(15,10).pipe(
    filter( (value, index) => {
        console.log(`El indice es ${index}`);
        return value % 2 === 0;
    })
).subscribe( observer );




