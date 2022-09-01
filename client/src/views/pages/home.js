import { Form } from '../components/home/form';
import { Title } from '../components/home/title';
import HomeStyles from 'styles/module/home/home.module.css';
import { searchParam } from 'lib/searchParam';

const components = Title + Form;

export const Home = `
  <div id='home_wrapper' class=${HomeStyles.Wrapper}></div>
`;

export const giveHomeFunction = () => {
  const wrapper = document.getElementById('home_wrapper');
  wrapper.innerHTML = components;

  // login 파라미터를 찾아서 그 데이터를 TODO LIST title 에 넣는다
  const title = document.getElementById('form_title');
  const login = searchParam('login');
  title.innerText = `${login}'s TODO LIST`;
};
