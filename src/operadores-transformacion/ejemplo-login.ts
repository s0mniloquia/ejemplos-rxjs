import { fromEvent, of } from 'rxjs';
import { tap, map, exhaustMap, pluck, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const url = 'https://reqres.in/api/login';

const form = document.createElement('form');
const body = document.querySelector('body');

const inputUser = document.createElement('input');
inputUser.type = 'text';
inputUser.name = 'user';
inputUser.value = 'eve.holt@reqres.in';
inputUser.placeholder = 'Inserte usuario';

const inputPass = document.createElement('input');
inputPass.type = 'password';
inputPass.name = 'password';
inputPass.value = 'cityslicka';
inputPass.placeholder = 'Inserte password';

const buttonSbmt = document.createElement('button');
buttonSbmt.innerHTML = 'Login';

form.append(inputUser, inputPass, buttonSbmt);

body.append(form);

const doRequestLogin = ( data: {email:string, password:string} ) => 
    ajax.post(url,data).pipe(
                            pluck('response','token'),
                            catchError( err => of('No se ha encontrado el correo'))
                            )

const submitForm$ = fromEvent( form, 'submit').pipe(
    tap( ev=> ev.preventDefault() ),
    map( ev => ({ email: ev.target[0].value, password: ev.target[1].value })),
    exhaustMap( doRequestLogin ),
//    switchMap( ev => ajax.post(url,ev)),
//    concatMap( ev => ajax.post(url,ev)),
//    mergeMap( ev => ajax.post(url,ev)),
).subscribe( token => console.log(token));
