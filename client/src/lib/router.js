import { Login } from 'pages/login';
import { Home } from 'pages/home';

const routes = {
  '/home': Home,
  '/login': Login,
};

/* 초기 페이지를 home 으로 설정하고
 * home 은 인증이 필요하므로
 * 인증 없을 시 로그인 페이지로 리다이렉트
 * */
const Router = () => {
  const view = routes[location.pathname];

  if (view) {
    renderPage(view);
  } else {
    history.replaceState('', '', '/login');
    Router();
  }
};

const renderPage = (component) => {
  const root = document.getElementById('root');
  root.innerHTML = component;
};

export { Router };
