import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const observer = {
    next: value => console.log(`[next]:${value}`),
    complete: () => console.log('Complete')
}

//sampleTime: Devuelve el ultimo valor emitido en un periodo de X milisegundos, 
//el periodo se ejecuta continuamente como un intervalo


const click$ = fromEvent<MouseEvent>(document, 'click').pipe(
    sampleTime(2000),
    map(({x,y})=>({x,y})) //sampleTime sirve de filtro en este caso, si pusiesemos el operador map previo al 
                          //sampleTime funcionaria igual pero seria menos eficiente ya que ejecutaria el map pero 
                          //el operador sampleTime haria de filtro para omitir los resultados que toquen 
).subscribe( console.log );