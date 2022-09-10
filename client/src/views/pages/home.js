import { Form } from 'components/home/form';
import { Title } from 'components/home/title';
import HomeStyles from 'styles/module/home/home.module.css';
import { searchParam } from '../../utils/searchParam';
import { fetchToDo, logout, submitToDo } from 'services/home';
import { LogoutBtn } from 'components/home/logoutBtn';
import { jsx } from '../../utils/jsx';

export const Home = `
  <div id='home_wrapper' class=${HomeStyles.Wrapper}>
    <div id='top_wrapper' class=${HomeStyles.Top}>
      ${jsx`${Title}`}
      ${jsx`${Form}`}
    </div>
    <ul id='todo_list' class=${HomeStyles.List}></ul>
  </div>
`;

export const giveHomeFunction = () => {
  // toDoWrapper 에 필요한 component 들을 채워 넣음
  // const topWrapper = document.getElementById('top_wrapper');
  // topWrapper.innerHTML = topContents;

  // 로그아웃 버튼을 넣음
  const homeWrapper = document.getElementById('home_wrapper');
  homeWrapper.insertAdjacentHTML('beforeend', LogoutBtn);

  // nickname 파라미터를 찾아서 그 데이터를 TODO LIST title 에 넣는다
  const title = document.getElementById('form_title');
  const nickname = searchParam('nickname');
  title.innerText = `${nickname}'s TODO LIST`;

  // form 에 제출 이벤트리스너를 등록한다
  const form = document.getElementById('todo_form');
  form.addEventListener('submit', submitToDo);

  // 로그아웃 버튼에 로그아웃 이벤트 등록
  const logoutBtn = document.getElementById('logout_btn');
  logoutBtn.addEventListener('click', logout);

  // 투두리스트의 아이템을 디비에서 가져온다.
  fetchToDo(nickname);
};
