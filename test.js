let test = require('tape');
var todoFunctions = require('./logic');

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


  test('test add todo', t => {
    t.deepEqual( todoFunctions.addTodo([],{ description: 'play' }), ex1 , 'the array from AddFunction should be equal the expected Array');
    t.deepEqual( todoFunctions.addTodo(ex1,{ description: 'eat' }), ex2, 'the array from AddFunction should be equal the expected Array');
    t.deepEqual( todoFunctions.addTodo(ex2,{ description: 'die' }), ex3, 'the array from AddFunction should be equal the expected Array');

    t.end();
  } )

 