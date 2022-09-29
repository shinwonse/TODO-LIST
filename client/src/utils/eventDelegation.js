function login() {
  location.href = `${API_SERVER_HOST}/login/github/start`;
}

function logout() {
  fetch(`${API_SERVER_HOST}/logout`, {
    credentials: 'include',
  }).then(() => (location.href = '/login'));
}

export function eventDelegation() {
  const root = document.getElementById('root');
  root.addEventListener('click', (e) => {
    const clickedTarget = e.target;
    if (clickedTarget.id === 'login_button') {
      login();
    } else if (clickedTarget.id === 'logout_button') {
      logout();
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
