import 'styles/css/reset.css';
import renderContents from 'lib/router';
import routes from '../routes';
import eventDelegation from './utils/eventDelegation';

eventDelegation();
renderContents(routes);

if (DEVELOPMENT) {
  console.log('개발 모드');
} else {
  console.log('배포 모드');
}
// const message = `${APP_NAME} is running. (version: ${VERSION})`;
// console.log(message);
