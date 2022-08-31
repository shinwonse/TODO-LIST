import renderContents from 'lib/router';
import LoginStyle from 'styles/module/login.module.css';

export const Login = `
  <div class=${LoginStyle.Wrapper}>
      <h1 class=${LoginStyle.Title}>Simple TODO LIST</h1>
      <button type="button" id="loginBtn" class=${LoginStyle.Button}>
        Login with GitHub
      </button>
  </div>
`;

export const giveLoginFunction = () => {
  const button = document.getElementById('loginBtn');
  button.addEventListener('click', () => {
    location.href = 'http://localhost:3000/login/github/start';
    renderContents();
  });
};
