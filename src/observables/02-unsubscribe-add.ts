import { Observer, Observable } from 'rxjs';
const observer: Observer<any> = {
    next: value => console.log('next:',value),
    error: error => console.error('error:',error),
    complete: () => console.log('completado')
  }    

const intervalo$: Observable<number> = new Observable<number>( subs => {
    let count:number = 0;

    const interval = setInterval( ()=> {
        subs.next(count++);
    }, 1000);

    setTimeout( () => {
        subs.complete();
    }, 3500);
    
    //Función que se ejecutará cuando se elimine la subscripcion de este observable O SE COMPLETE, en caso de existir 
    //la llamada al complete y el unsubscribe, el return del observable se ejecutara posterior al complete y en el unsubscribe 
    //no se ejecutará, es importante mencionar que en caso de no existir el clearInterval podría producirse una fuga de memoria.
    return () => {
        clearInterval(interval);
        console.log('Intervalo eliminado');
    }

  
});

//Se crea una instancia de observable por suscripcion
const subscrp1 = intervalo$.subscribe( observer );
const subscrp2 = intervalo$.subscribe( observer );
const subscrp3 = intervalo$.subscribe( observer );

//Para concatenar llamada al unsubscribe de varias suscripciones.
subscrp1.add(subscrp2)
        .add(subscrp3);

//Nos desuscribimos directamente una vez transcurridos 4 segundos
setTimeout( () => {
    subscrp1.unsubscribe();
    console.log('Completado timeout');
}, 8000);
