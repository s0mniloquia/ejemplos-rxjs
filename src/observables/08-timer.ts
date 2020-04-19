import { timer, Observer } from 'rxjs';

const observer: Observer<number> = {
    next: value => console.log(value),
    error: error => console.error(error),
    complete: () => console.log('Completado')
}

//Timer: Emite un observable de valor 0 y se completa transcurrido el tiempo en milisegundos definido por parámetro
const timer$ = timer(2000);
timer$.subscribe( observer );

//Lanzamos un timer que se ejecuta a los 2 segundos pero a partir de ese instante se comporta como un 'interval', no se completará
const timerInterval$ = timer( 2000, 1000 );
timerInterval$.subscribe( observer );

//Es posible tambien pasarle un objeto Date para que se lance el observable al cumplirse ese momento
//en el ejemplo ejecutamos el next del observable transcurridos 5 segundos del momento actual y se completa
const dateMas5Segundos = new Date();
dateMas5Segundos.setSeconds(dateMas5Segundos.getSeconds() + 5);
const timerMas5Segundos$ = timer(dateMas5Segundos);
console.log('A partir de este momento contamos 5');
timerMas5Segundos$.subscribe( observer );
