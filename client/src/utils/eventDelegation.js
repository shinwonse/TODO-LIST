import { push } from 'lib/router';
import axios from 'axios';

function login() {
  location.href = `${API_SERVER_HOST}/oauth/authCode/`;
}

function logout() {
  axios
    .delete(`${API_SERVER_HOST}/users`, {
      withCredentials: true,
    })
    .then(() => push('/login'));
}

export function eventDelegation() {
  const root = document.getElementById('root');
  root.addEventListener('click', (e) => {
    const clickedTarget = e.target;
    if (clickedTarget.id === 'login_button') {
      login();
    } else if (clickedTarget.id === 'logout_button') {
      logout();
    } else if (clickedTarget.id === 'test') {
      push('/test');
    }
  });

  // 제출 이벤트
  root.addEventListener('submit', (e) => {
    const submitTarget = e.target;
    if (submitTarget.id === 'todo_form') {
      e.preventDefault();
    }
  });
}
