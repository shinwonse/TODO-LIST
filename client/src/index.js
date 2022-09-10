import 'styles/css/reset.css';
import renderContents from 'lib/router';
import routes from '../routes';

renderContents(routes);

// const handleDOMContentLoaded = () => {
//   renderContents(routes);
// };
//
// const handlePopstate = () => {
//   renderContents(routes);
// };
//
// window.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
//
// window.addEventListener('popstate', handlePopstate);
