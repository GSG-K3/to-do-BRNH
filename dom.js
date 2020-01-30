(function() {

  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  var input = document.getElementById("description");
  let sortButton = document.getElementById("sort");
  let emptyList = document.getElementById("empty-list-container")

// this is our initial todoList
  let state = [
    { id: -3, description: 'eat', done: false},
    { id: -2, description: 'work', done: false },
    { id: -1, description: 'die', done: false },
  ];

  // refresh task 
  let storedTasks = JSON.parse(window.localStorage.getItem('list'));
  if(storedTasks != null){
  state = storedTasks;
  }


  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    todoNode.innerHTML = todo.description;
    todoNode.classList.add("todo-container__list-item") 

    
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.innerHTML = "delete"
    deleteButtonNode.classList.add("list-item__delete-button")
    deleteButtonNode.addEventListener('click', function(event) {
    var newState = todoFunctions.deleteTodo(state, todo.id);
    update(newState);

    });
    todoNode.appendChild(deleteButtonNode);


      // this adds the mark button
     let markButtonNode = document.createElement('button');
     markButtonNode.classList.add("list-item__mark-button")
     markButtonNode.innerHTML = "mark"


     markButtonNode.addEventListener('click', function(event) {
       var newState = todoFunctions.markTodo(state, todo.id);
       update(newState);
     });
     let buttonsDiv = document.createElement('div')
     buttonsDiv.appendChild(deleteButtonNode);
     buttonsDiv.appendChild(markButtonNode);

      todoNode.appendChild(buttonsDiv)

     if(todo.done) {
      todoNode.classList.add("mark")
    }

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      let description = {description: input.value.trim()};
      if(description.description.length == 0) alert("you should enter a task");
      else{
      let newState = todoFunctions.addTodo(state, description ); 
      update(newState);

      input.value = "";
      }

    });
  }

  sortButton.addEventListener('click',function(event) {
      let newState = todoFunctions.sortTodos(state);
      update(newState);

  })


  var update = function(newState) {
    window.localStorage.setItem('list', JSON.stringify(newState));
    state = newState;
    renderState(state);
  };

  var renderState = function(state) {
    var todoListNode = document.createElement('ul');
    todoListNode.classList.add("todo-container__list")
    if (state.length != 0 ){
      emptyList.style.display = "none";
      container.style.display = "inline"
      sortButton.style.display = "inline";
    }else{
      emptyList.style.display = "inline";
    container.style.display = "none"
    sortButton.style.display = "none";
    }

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });
  
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();


