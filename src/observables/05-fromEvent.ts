import { fromEvent } from "rxjs";

//fromEvent es un generador de Observables que convierte los eventos del DOM
//en observables, al que hay que pasarle el elemento a monitorizar, en este caso le pasamos el 
//objeto 'document' completo y el evento a monitorizar.
const click$ = fromEvent<MouseEvent>( document , 'click' );

//Monitorazimos el evento click del 'document'
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

//Usando destructuracion vemos que podemos extraer propiedades del objeto que nos devuelve el observable
click$.subscribe( ({x,y}) => console.log(x,y));
keyup$.subscribe( (event:KeyboardEvent) => console.log(event.key));

