import { Login, giveLoginFunction } from 'pages/login';
import { Home, giveHomeFunction } from 'pages/home';

const root = document.getElementById('root');

const renderContents = () => {
  const { pathname } = window.location;
  switch (pathname) {
    case '/login':
      // root 의 children 노드를 모두 날리고
      root.replaceChildren();
      // 그 안에 페이지 컴포넌트를 삽입
      root.innerHTML = Login;
      // 이후 그 페이지에서 사용할 이벤트리스너, 함수 등을 호출
      giveLoginFunction();
      break;
    case '/home':
      root.replaceChildren();
      root.innerHTML = Home;
      giveHomeFunction();
      break;
    default:
      root.innerHTML = '<div>404 Error</div>';
  }
};

export default renderContents;
