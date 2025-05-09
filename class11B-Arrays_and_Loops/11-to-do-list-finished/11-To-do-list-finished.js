const toDoList = [{
  name: 'make dinner', 
  dueDate: '2025-08-05',
},{
  name: 'wash dishes',
  dueDate: '2025-08-05',
}];

renderToDoList();

function renderToDoList(){
  let toDoListHTML = '';

  for(let i=0;i<toDoList.length;i++){
    const todoObject = toDoList[i];
    const {name} = todoObject; // = const name = todoObject.name;
    const {dueDate} = todoObject // = const dueDate = todoObject.dueDate;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
      <button onclick="
      toDoList.splice(${i}, 1);
      renderToDoList();
      " class="delete-todo-button">Delete</button>
    `;
    toDoListHTML += html;
  }
  //console.log(toDoListHTML);

  document.querySelector('.js-todo-list')
    .innerHTML = toDoListHTML;
}

function addToDo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  const errorMessageElement = document.querySelector('#js-error-message');

  if(name === '' || dueDate === ''){
    errorMessageElement.classList.add('blank-name');
        document.querySelector('#js-error-message')
          .innerHTML = `Error: Insert a name and a date`;
  }else{
    errorMessageElement.classList.remove('blank-name');
    document.querySelector('#js-error-message')
      .innerHTML = ``;
    toDoList.push({
      // name: name, 
      // dueDate: dueDate,
      name,
      dueDate,
    });
    //console.log(toDoList);
  
    inputElement.value = '';
  
    renderToDoList();
  }
}
