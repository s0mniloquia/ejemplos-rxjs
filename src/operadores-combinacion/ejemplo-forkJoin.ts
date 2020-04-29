import { ajax } from 'rxjs/ajax';

const URL_GITHUB = 'https://api.github.com/users/';
const USER_GITHUB = 's0mniloquia';


const obser1 = ajax(`${URL_GITHUB}${USER_GITHUB}`);

obser1.subscribe(console.log);
