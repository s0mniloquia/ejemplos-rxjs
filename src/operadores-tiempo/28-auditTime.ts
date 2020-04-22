import { interval, fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';
//auditTime: Un observable emite un valor y empieza un contador, una vez finalizado el contador emite
//el ultimo valor emitido por el observable durante ese periodo de tiempo, si el observable se completa
//antes de emitir un valor y el tiempo no ha finalizado no se emite valor.
//interval$ ---a--b-c---------d---e--------f--g|---------------------->
//             X seg.->       X seg.->     X seg.-> 
//          ----------c--------------e-------------------------->

const click$ = fromEvent( document, 'click');

const interval$ = interval(1000).pipe(auditTime(2000)).subscribe(console.log);

