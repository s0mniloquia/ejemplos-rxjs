import { Observer, Observable } from 'rxjs';
const observer: Observer<any> = {
    next: value => console.log('next:',value),
    error: error => console.error('error:',error),
    complete: () => console.log('completado')
  }    

// Ejemplo de fuga de memoria, aunque cancelamos la suscripcion no estamos llamando al metodo complete
// ni eliminando el interval.

const intervalo$: Observable<number> = new Observable<number>( subs => {
    let count:number = 0;

    const interval = setInterval( ()=> {
        subs.next(count++);
        console.log(count);
    }, 1000);

    //Solucion posible 1
    /* setTimeout(() => {
        clearInterval(interval)
    }, 4000); */

    //Solucion posible 2
    /* setTimeout(()=> {
        subs.complete();
    }, 4000)*/

  
});

//Se crea una instancia de observable por suscripcion
const subscrp1 = intervalo$.subscribe( observer );

//Nos desuscribimos directamente una vez transcurridos 4 segundos
setTimeout( () => {
    subscrp1.unsubscribe();
    console.log('Completado timeout');
}, 4000);
