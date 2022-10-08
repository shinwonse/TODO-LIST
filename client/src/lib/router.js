import { Login } from 'pages/login';
import { Home } from 'pages/home';

const routes = [
  { path: '/login', component: Login },
  { path: '/home', component: Home },
];

const Router = () => {
  const path = location.pathname;
  routes.map((route) => {
    if (route.path === path) {
      renderPage(route.component);
    }
  });
};

const renderPage = (component) => {
  const root = document.getElementById('root');
  root.innerHTML = component;
};

export default Router;
