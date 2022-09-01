import renderContents from 'lib/router';
import { Item } from 'components/home/item';

export const submitToDo = (e) => {
  // 새로고침 막고
  e.preventDefault();

  // 사용자에게 받은 인풋을 newToDo 로 저장
  const toDoInput = document.querySelector('#todo_form input');
  if (toDoInput.value.trim().length !== 0) {
    const newToDo = toDoInput.value;
    paintToDo(newToDo);
  }
  toDoInput.value = '';
};

export const paintToDo = (newToDo) => {
  const toDoList = document.getElementById('todo_list');
  toDoList.insertAdjacentHTML('beforeend', Item);
  const addedToDo = toDoList.querySelector('li:last-child');
  addedToDo.querySelector('span').innerText = newToDo;
};

// 로그아웃
// 세션을 날리고 세션에 로그인된 유저가 있는지 확인하는 방식으로 구현해야 하는데
// 아직 그 방법을 알지 못해서 임시로 가라로 구현함
export const logout = () => {
  history.pushState('', '', '/login');
  renderContents();
};
