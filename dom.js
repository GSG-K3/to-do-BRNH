(function() {

  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  var input = document.getElementById("description");
  
// this is our initial todoList
  let state = [
    { id: -3, description: 'first todo', done: false},
    { id: -2, description: 'second todo', done: false },
    { id: -1, description: 'third todo', done: false },
  ]; 

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    todoNode.innerHTML = todo.description;
    todoNode.classList.add("list-style") 

    

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.innerHTML = ""
    deleteButtonNode.classList.add("deletebutton")
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });

    todoNode.appendChild(deleteButtonNode);

      // this adds the mark button
     let markButtonNode = document.createElement('button');
     markButtonNode.classList.add("markbutton")
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
      let description = {description: input.value};
     let newState = todoFunctions.addTodo(state, description ); 
      update(newState);
      input.value = "";
    });
  }

  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
