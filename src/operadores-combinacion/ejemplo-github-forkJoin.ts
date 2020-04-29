import { ajax } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';
import { forkJoin, of } from 'rxjs';

const URL_GITHUB = 'https://api.github.com/users/';
const USER_GITHUB = 's0mniloquia';


const data_user$ = ajax(`${URL_GITHUB}${USER_GITHUB}`).pipe(pluck('response'));
const repos$ = ajax(`${URL_GITHUB}${USER_GITHUB}/repos`).pipe(pluck('response'));
const gists$ = ajax(`${URL_GITHUB}${USER_GITHUB}/gits`).pipe(
                                                                pluck('response'), 
                                                                catchError( error => { 
                                                                                        console.log(error.message);
                                                                                        return of([]) }));


//En caso que falle una peticion ninguna de ellas se resolverá, a menos que se gestione el error en cada uno
//de los propios observables añadiendo el catchError y decidiendo como gestionar, para el caso devolveremos un array vacio y emitiremos un error;
forkJoin({ user: data_user$, repos: repos$, gists: gists$ }).subscribe(console.log);
