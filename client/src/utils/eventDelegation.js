function login() {
  location.href = `${API_SERVER_HOST}/login/github/start`;
}

function testLogin() {
  console.log('제발');
}

export function eventDelegation() {
  const root = document.getElementById('root');
  function loginTest() {
    alert('hello');
  }

  root.addEventListener('click', (e) => {
    // const clickedTarget = e.target;
    // if (clickedTarget.id === 'login_button') {
    //   loginTest();
    // }
    // if (clickedTarget.id === 'login_button') {
    //   login();
    // } else if (clickedTarget.id === 'logout_button') {
    //   fetch(`${API_SERVER_HOST}/logout`).then(() => {
    //     alert('Successfully Logout!');
    //   });
    // }
  });

  // 제출 이벤트
  root.addEventListener('submit', (e) => {
    const submitTarget = e.target;
    if (submitTarget.id === 'todo_form') {
      e.preventDefault();
    }
  });
}
