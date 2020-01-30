
var todoFunctions = {
  // generate Id automaticly
  generateId: (function () {
    var idCounter = 0;
    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array 
  cloneArrayOfObjects: function (todos) {
    return todos.map(function (todo) {
      return JSON.parse(JSON.stringify(todo));
    });
  },

  //Add To-Do
  addTodo: function (todos, newTodo) {
    if (todos.constructor != Array || newTodo.constructor != Object) {
      return 'the first argument should be array'
    }

    let newArr = this.cloneArrayOfObjects(todos);
    let listItem = {
      id: this.generateId(),
      description: newTodo.description,
      done: false
    }

    newArr.push(listItem);
    return newArr;
  },

  //Delete To-Do
  deleteTodo: function (todos, idToDelete) {

    if (todos.constructor != Array || idToDelete.constructor != Number) {
      return 'the first argument should be array and the second argument should be number'
    }
    if (todos.length == 0) {
      return 'you should enter a task first'
    }

    let newArray = this.cloneArrayOfObjects(todos);

    if (newArray.length !== 0 || newArray !== null) {
      var newArray1 = newArray.filter(task => {
        return task.id != idToDelete;
      });

      return newArray1;

    }
    else return alert('You do not have a task to delete');
  },

  //Mark To-Do

  markTodo: function (todos, idToMark) {
    if (todos.constructor != Array || idToMark.constructor != Number) {
      return 'the first argument should be array and the second argument should be number'
    }
    if (todos.length == 0) {
      return 'you should enter a task first'
    }

    let newArr = this.cloneArrayOfObjects(todos);
    let markedArray = newArr.map(task => {
      if (task.id == idToMark) {
        task.done = !task.done;
      }
      return task;
    });

    return markedArray;

  },

  sortTodos: function (todos) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    let newArr = this.cloneArrayOfObjects(todos);
    newArr.sort( function (a,b) {
      let task1 = a.description.toLowerCase();
      let task2 = b.description.toLowerCase();
      if(task1 < task2) return -1;
      if(task1 > task2) return 1 ;
      return 0
    }) ;
    return newArr;
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
  }
};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details: 
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/

if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}



