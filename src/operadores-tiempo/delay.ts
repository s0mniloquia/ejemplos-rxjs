import { range } from 'rxjs';
import { delay } from 'rxjs/operators';

const obser1$ = range(1,5).pipe(delay(3000)).subscribe(console.log);