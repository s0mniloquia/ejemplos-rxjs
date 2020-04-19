import { from } from 'rxjs';

//From: Convierte en un array (si es posible) el parametro que le pasamos y envia uno a uno cada uno de los elementos
//a diferencia del 'of' que los envia todos de golpe si son el mismo objeto
const from$ = from('Pruebas');
from$.subscribe(console.log);
//Emitira:
//P
//r
//u
//e
//b
//a
//s

//Emitira el listado de elementos del array uno a uno
const from2$ = from([1,2,3,4,5]);
from2$.subscribe(console.log);