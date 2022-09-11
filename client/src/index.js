import 'styles/css/reset.css';
import renderContents from 'lib/router';
import routes from '../routes';
import eventDelegation from './utils/eventDelegation';

eventDelegation();
renderContents(routes);

const test = `${API_SERVER_HOST}`;
console.log(test);
