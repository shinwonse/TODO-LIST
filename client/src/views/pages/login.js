import LoginStyle from 'styles/module/login.module.css';
import jsx from 'lib/component';
import testBtn from 'components/testBtn';

export const Login = jsx`
  <div class=${LoginStyle.Wrapper}>
      <h1 class=${LoginStyle.Title}>Simple TODO LIST</h1>
      <button type="button" id="login_button" class=${LoginStyle.Button}>
        Login with GitHub
      </button>
      <testBtn></testBtn>
  </div>
`;
