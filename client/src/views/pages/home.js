import { Form } from 'components/home/form';
import { Title } from 'components/home/title';
import HomeStyles from 'styles/module/home/home.module.css';
import { LogoutBtn } from 'components/home/logoutBtn';
import makeComponent from '../../utils/makeComponent';
import { searchParam } from '../../utils/searchParam';
import { fetchToDo } from 'services/home';

const nickname = searchParam('nickname');

const title = makeComponent(Title({ text: `${nickname}'s TODO-LIST` }));
const form = makeComponent(Form);
fetchToDo(nickname);

export const Home = `
  <div id='home_wrapper' class=${HomeStyles.Wrapper}>
    <div id='top_wrapper' class=${HomeStyles.Top}>
      ${title}
      ${form}
    </div>
    <ul id='todo_list' class=${HomeStyles.List}></ul>
    ${LogoutBtn}
  </div>
`;
