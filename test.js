let test = require('tape');
var logic = require('./logic');

let ex1 = [{
  id: 1,
  description: "play",
  done: false,
}

];


let ex2 = [{
  id: 1,
  description: "play",
  done: false,
},
{
  id: 2,
  description: "eat",
  done: false,
}

];

let ex3 = [{
  id: 1,
  description: "play",
  done: false,
},
{
  id: 2,
  description: "eat",
  done: false,
},
{
  id: 3,
  description: "die",
  done: false,
}

];

let marked = [{
  id: 1,
  description: "play",
  done: false,
},
{
  id: 2,
  description: "eat",
  done: true,
}

];

let marked2 = [{
  id: 1,
  description: "play",
  done: true,
},
{
  id: 2,
  description: "eat",
  done: false,
}

];

// Add Test
  test('test add todo', t => {
    t.deepEqual( logic.addTodo([],{ description: 'play' }), ex1 , 'the array from AddFunction should be equal the expected Array');
    t.deepEqual( logic.addTodo(ex1,{ description: 'eat' }), ex2, 'the array from AddFunction should be equal the expected Array');
    t.deepEqual( logic.addTodo(ex2,{ description: 'die' }), ex3, 'the array from AddFunction should be equal the expected Array');
    t.deepEqual ( logic.addTodo("string",{ description: 'die' }), 'the first argument should be array', "if the first argument is array");

    t.end();
  } )

  // Mark Test
  test('test todo mark ', t => {
    t.deepEqual( logic.markTodo(ex2,2), marked , 'the array from MarkFunction should be equal the expected Array');
    t.deepEqual( logic.markTodo(ex2,1), marked2 , 'the array from MarkFunction should be equal the expected Array');
    t.deepEqual ( logic.markTodo([],1), 'you should enter a task first', 'if the array is empty');
    t.deepEqual ( logic.markTodo("string",1), 'the first argument should be array and the second argument should be number', "if the input arguments are true");

    t.end();
  } )
 
  // Delete Test
var test_arr=[{'id':0,'description': 'sport', 'done':false},{'id':1,'description': 'eat lunch', 'done':false},{'id':2,'description': 'homework', 'done':false}];
test('Delete task test', function(t){
    t.equal((logic["deleteTodo"](test_arr, 0)).length,test_arr.length-1,'To-do list length should dectrement by 1');
    t.equal((logic["deleteTodo"](test_arr, 2)).length,test_arr.length-1,'To-do list length should dectrement by 1');
    t.deepEqual ( logic.deleteTodo("string", 1), 'the first argument should be array and the second argument should be number', "if the input arguments are true")
    t.deepEqual ( logic.deleteTodo(test_arr, "str"), 'the first argument should be array and the second argument should be number', "if the input arguments are true")
    t.end();
});


