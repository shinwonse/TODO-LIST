import { Form } from 'components/home/form';
import { Title } from 'components/home/title';
import HomeStyles from 'styles/module/home/home.module.css';
import { LogoutBtn } from 'components/home/logoutBtn';
import { searchParam } from 'utils/searchParam';

const nickname = searchParam('nickname');

export const Home = `
  <div id='home_wrapper' class=${HomeStyles.Wrapper}>
    <div id='top_wrapper' class=${HomeStyles.Top}>
      ${Title({ text: `${nickname}'s TODO-LIST` })}
      ${Form}
    </div>
    <ul id='todo_list' class=${HomeStyles.List}></ul>
    ${LogoutBtn}
  </div>
`;
