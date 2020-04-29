import { Observer, Observable, Subject, Subscription } from 'rxjs';
const observer: Observer<any> = {
    next: value => console.log('next:',value),
    error: error => console.error('error:',error),
    complete: () => console.log('completado')
  }    

// Ejemplo de subject para compartir consumir datos comunes en distintas suscripciones

const random$: Observable<number> = new Observable<number>( subs => {
    const interval = setInterval( ()=> {
        subs.next(Math.random());
        console.log('Emito y sigo emitiendo');
    }, 3000);

    return () => {
        clearInterval(interval);
        console.log('Oh no, se me acaba el chollo!!');
    }
});

// Propiedades de subject:
// 1. Broadcast multiple: permite compartir los mismos datos de un observable de forma multiple 
//    para distintas subscripciones
// 2. Es un observer
// 3. Implementa next, subscribe y complete

const subject$ : Subject<number> = new Subject<number>();
const subscription: Subscription = random$.subscribe(subject$);

subject$.subscribe( observer); //Utilizamos el observer que hemos implementado

subject$.subscribe( observer ); // idem

setTimeout( () => {
    subject$.next(1091); //Usando el metodo next del subject intercedemos en el valor emitido por el observable al cual esta suscrito el subject y emitimos un valor "extra"
    subject$.complete(); //Completamos el subject pero no el observable al cual esta suscrito
}, 7500);

//Cuando completamos el subject vemos que el observable padre no se ha completado al ejecutar el complete del subject,
//y se sigue produciendo fuga de memoria puesto que sigue emitiendo, para ello tendremos que eliminar la subscripcion 
//generada en la linea 29 random$.subscribe(subject$);
/* setTimeout( () => {
    subscription.unsubscribe();
}, 10000); */
