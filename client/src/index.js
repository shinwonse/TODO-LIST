import 'styles/css/reset.css';
import renderContents from 'lib/router';

window.onload = () => {
  renderContents();
};

window.addEventListener('popstate', () => {
  renderContents();
});
