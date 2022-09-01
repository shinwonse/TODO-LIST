import renderContents from 'lib/router';

export const submitToDo = (e) => {
  // 새로고침 막고
  e.preventDefault();

  // 사용자에게 받은 인풋을 newToDo 로 저장
  const toDoInput = document.querySelector('#todo_form input');
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  paintToDo();
};

export const paintToDo = () => {
  const toDoList = document.getElementById('todo_list');
  console.log(toDoList);
};

// 로그아웃
// 세션을 날리고 세션에 로그인된 유저가 있는지 확인하는 방식으로 구현해야 하는데
// 아직 그 방법을 알지 못해서 임시로 가라로 구현함
export const logout = () => {
  history.pushState('', '', '/login');
  renderContents();
};
