import { ajax } from 'rxjs/ajax';
import { pluck, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

const url_users:string = 'https://apixxx.github.com/users?per_page=10';

const observer = {
    next: value => console.log(value),
    error: err => console.warn(err.message),
    complete: () => console.log('Completado')
}

//catchError: Operador que nos permite capturar los errores de la petición o los generados en el observable
//

ajax(url_users).pipe(
    catchError( err   => {
        console.log(err.message)
        return of([])
    })
).subscribe( observer ); //El subscribe no ejecuta el error porque lo procesa el catchError y emite un observable vacio,
                        //para la suscripción es un next.

