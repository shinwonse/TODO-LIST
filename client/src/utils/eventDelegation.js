import renderContents from 'lib/router';

function login() {
  location.href = 'http://localhost:3000/login/github/start';
}

function logout() {
  console.log('로그아웃 구현 전!');
}

function eventDelegation() {
  const root = document.getElementById('root');

  // 클릭 이벤트
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

export default eventDelegation;
