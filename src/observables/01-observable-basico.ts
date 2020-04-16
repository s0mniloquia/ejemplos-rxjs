import { Observable, Subscription, Observer } from 'rxjs';

const obs$: Observable<string> = new Observable<string>( subs => {
    subs.next('Hola');
    subs.next('Mundo');

    //Forma de disparar un error
    //const a = undefined;
    //a.nombre = 'Paco Lumbreras';

    subs.complete();
  });

  //El método subscribe puede raecibir tres parámetros callback en forma de funciones (success, error y complete) 
  //que pueden ser opcionales. o bien puede recibir un Observer, que no es mas que una interfaz
  obs$.subscribe( value => console.log(value), 
                  error => console.error(error),
                  () => { console.log('completado');});

  //O bien podría recibir un objeto Observer
  const observer: Observer<string> = {
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.log('completado')
  }    
  
  obs$.subscribe( observer );





