function login() {
  location.href = `${API_SERVER_HOST}/login/github/start`;
}

function eventDelegation() {
  const root = document.getElementById('root');

  // 클릭 이벤트
  root.addEventListener('click', (e) => {
    const clickedTarget = e.target;
    if (clickedTarget.id === 'login_button') {
      login();
    } else if (clickedTarget.id === 'logout_button') {
      fetch(`${API_SERVER_HOST}/logout`)
        .then((res) => res.json())
        .then((data) => console.log(data));
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
