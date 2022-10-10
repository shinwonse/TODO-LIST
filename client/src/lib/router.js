import { Login } from 'pages/login';
import { Home } from 'pages/home';
import { Test } from 'pages/test';

// {
// path: string,
// component: Component?,
// redirect: string?,
// }

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    auth: true,
  },
  {
    path: '/login',
    component: Login,
    auth: false,
  },
  {
    path: '/test',
    component: Test,
  },
];

const init = () => {
  window.addEventListener('popstate', () => {
    const component = getRoute();
    renderPage(component);
  });
  const route = findRoute();
  push(route.path);
};

const findRoute = () => {
  return routes.find((route) => route.path === location.pathname);
};

const getRoute = () => {
  const route = findRoute();
  return route.component;
};

const renderPage = (component) => {
  const root = document.getElementById('root');
  root.innerHTML = component;
};

const push = (path, data) => {
  history.pushState(data, null, path);
  const { auth, redirect, component } = findRoute();
  // todo: auth 확인 필요
  if (auth) {
    // store 확인
    // auth 필요, auth 가지고 있나 없나
  }
  if (redirect) {
    push(redirect, data);
    return;
  }
  renderPage(component);
};

export { init, push };
