import { Form } from '../components/home/form';
import { Title } from '../components/home/title';
import HomeStyles from 'styles/module/home/home.module.css';

const components = Title + Form;

export const Home = `
  <div id='home_wrapper' class=${HomeStyles.Wrapper}></div>
`;

export const giveHomeFunction = () => {
  const wrapper = document.getElementById('home_wrapper');
  wrapper.innerHTML = components;
};
