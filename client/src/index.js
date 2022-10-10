import * as router from 'lib/router';
import * as store from 'lib/store';
import { eventDelegation } from 'utils/eventDelegation';

import 'styles/css/reset.css';
import { fetchUser } from 'services/auth';

router.init();
eventDelegation();
// loading indicator 시작

// fetchUser() //
//   .then((user) => {
//     console.log(user);
//     // loading indicator 종료
//     // store.dispatch('USER', user);
//     router.init();
//     eventDelegation();
//   });
