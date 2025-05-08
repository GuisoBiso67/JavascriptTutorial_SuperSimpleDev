const toDoList = [];

renderToDoList();

function renderToDoList(){
  let toDoListHTML = '';

  for(let i=0;i<toDoList.length;i++){
    const todo = toDoList[i];
    const html = `<p>${todo}</p>`
    toDoListHTML += html;
  }
  console.log(toDoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = toDoListHTML;
}

function addToDo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  toDoList.push(name);
  console.log(toDoList);

  inputElement.value = '';

  renderToDoList();
}
