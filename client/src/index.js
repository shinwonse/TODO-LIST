import 'styles/css/reset.css';
import { Router } from 'lib/router';
import { eventDelegation } from 'utils/eventDelegation';

Router();
eventDelegation();

function getUserData() {
  fetch('https://api.github.com/user');
}
