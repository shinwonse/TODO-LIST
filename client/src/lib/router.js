const root = document.getElementById('root');

const renderContents = (routes) => {
  const { pathname } = window.location;
  routes.map((route) => {
    if (route.path === pathname) {
      root.innerHTML = route.component;
    }
  });
};

export default renderContents;
