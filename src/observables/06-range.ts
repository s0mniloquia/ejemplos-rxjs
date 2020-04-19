import { range, asyncScheduler } from "rxjs";

//El operador range genera una secuencia numérica de forma SINCRONA definida por varios parámetros, el primero
//se corresponde con el valor inicial de la secuencia, el segundo se corresponde con el numero de la
//valores que se van a obtener, por ultimo es posible incluir un asynScheduler para simular asincrónia
const range$ = range(1,5);

console.log("Inicio Range");
//Devolverá la secuencia 1...5
range$.subscribe(console.log);
console.log("Fin Range");

const range2$ = range(-5,10);//Devolverá la secuencia -5...4, empezará por -5 y devolverá 10 resultados
range2$.subscribe(console.log);

const range3$ = range(1,5, asyncScheduler);
console.log("Inicio Range asincrono");
//Devolverá la secuencia 1...5 de forma asincrona, ejecutndo primero los console.log y despues la secuencia
range$.subscribe(console.log);
console.log("Fin Range asincrono");

