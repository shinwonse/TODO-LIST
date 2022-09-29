import LoginStyle from 'styles/module/login.module.css';

export const Login = `
  <div class=${LoginStyle.Wrapper}>
      <h1 class=${LoginStyle.Title}>Simple TODO LIST</h1>
      <button onclick="loginTest()" type="button" id="login_button" class=${LoginStyle.Button}>
        Login with GitHub
      </button>
  </div>
`;
