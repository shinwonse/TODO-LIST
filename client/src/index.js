import * as router from 'lib/router';
import { eventDelegation } from 'utils/eventDelegation';

import 'styles/css/reset.css';
import { Login } from 'pages/login';

const root = document.getElementById('root');
root.innerHTML = Login;

// router.init();
// eventDelegation();

// loading indicator 시작

// fetchUser().then((user) => {
//   console.log(user);
//   // loading indicator 종료
//   // store.dispatch('USER', user);
//   router.init();
//   eventDelegation();
// });
