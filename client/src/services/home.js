import { Item } from 'components/home/item';

export const fetchToDo = async () => {
  const userResponse = await fetch(`http://${API_SERVER_HOST}/users`);
  const user = await userResponse.json();
  const toDos = user?.toDos;
  const toDoList = document.getElementById('todo_list');
  // 여기서 map을 어떻게 돌려야할지
  // Item을 컴포넌트처럼 가져오다보니 그 안에 텍스트를 넣으려면 또 한 번의 과정을 거쳐야할 것 같다.
  // 리액트에서는 key가 있었는데 toDos의 각각의 id를 li id 값으로 주자
  toDos.map((toDo) => {
    const item = Item.replace('임시리스트', toDo.text);
    toDoList.insertAdjacentHTML('beforeend', item);

    // 각각의 리스트에 toDo 아이템의 아이디를 부여
    const temp = document.querySelectorAll('li');
    temp[temp.length - 1].id = toDo._id;

    // 아이템의 더보기 버튼에 이벤트리스너를 등록한다
    const moreBtn = document.getElementById('more_btn');
    moreBtn.addEventListener('click', () => console.log(toDo._id));
  });
};

export const submitToDo = (e) => {
  // 새로고침 막고
  e.preventDefault();

  // 사용자에게 받은 인풋을 newToDo 로 저장
  const toDoInput = document.querySelector('#todo_form input');
  if (toDoInput.value.trim().length !== 0) {
    const newToDo = toDoInput.value;
    paintToDo(newToDo);
    // post 요청
    fetch(`http://localhost:3000/users/shinwonse/${newToDo}`, {
      method: 'POST',
    }).then((res) => res.json());
  }
  toDoInput.value = '';
};

export const paintToDo = (newToDo) => {
  const toDoList = document.getElementById('todo_list');
  toDoList.insertAdjacentHTML('beforeend', Item);
  const addedToDo = toDoList.querySelector('li:last-child');
  addedToDo.querySelector('span').innerText = newToDo;
};
