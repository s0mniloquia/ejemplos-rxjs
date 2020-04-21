import { Observer, fromEvent} from 'rxjs';
import { pluck, filter, take } from 'rxjs/operators';

const observer: Observer<string> = {
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.log('Completado')
}

//Concatenando operadores
//Es posible concatenar operadores mediante el símbolo  ',' y se ejecutarán uno tras
//En este caso generamos un observable por cada tecla presionada (concretamente al levantar el dedo de la tecla)
//extraemos el parametro 'code' con el operador pluck y filtramos ese valor por la tecla 'Enter',
//Utilizamos el operador take para coger únicamente los 5 primeros casos, a partir el 5º se completa el observable
const obser1$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(take(5), pluck('code'), filter( value => value === 'Enter'));
obser1$.subscribe( observer );




