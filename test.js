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


  test('test add todo', t => {
    t.deepEqual( logic.addTodo([],{ description: 'play' }), ex1 , 'the array from AddFunction should be equal the expected Array');
    t.deepEqual( logic.addTodo(ex1,{ description: 'eat' }), ex2, 'the array from AddFunction should be equal the expected Array');
    t.deepEqual( logic.addTodo(ex2,{ description: 'die' }), ex3, 'the array from AddFunction should be equal the expected Array');

    t.end();
  } )

 

var test_arr=[{'id':0,'description': 'sport', 'done':false},{'id':1,'description': 'eat lunch', 'done':false},{'id':2,'description': 'homework', 'done':false}];
test('Delete task test', function(t){
    t.equal((logic["deleteTodo"](test_arr, 0)).length,test_arr.length-1,'To-do list length should dectrement by 1');
    t.equal((logic["deleteTodo"](test_arr, 2)).length,test_arr.length-1,'To-do list length should dectrement by 1');
    t.equal( null,null,'You should select an task to Delete');
    t.equal([].length,0,'You should select an task to Delete');
    t.end();
});
