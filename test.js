var test = require('tape');
var logic = require('./logic');
console.log(logic["deleteTodo"]);
test('Example test', function(t) {
  t.pass();
  t.end();
});
var test_arr=[{'id':0,'description': 'sport', 'done':false},{'id':1,'description': 'eat lunch', 'done':false},{'id':2,'description': 'homework', 'done':false}];
test('Delete task test', function(t){
    t.equal((logic["deleteTodo"](test_arr, 0)).length,test_arr.length-1,'To-do list length should dectrement by 1');
    t.equal((logic["deleteTodo"](test_arr, 2)).length,test_arr.length-1,'To-do list length should dectrement by 1');
    t.equal( null,null,'You should select an task to Delete');
    t.equal([].length,0,'You should select an task to Delete');
    t.end();
});
//logic.addTodo(dsdf,hgchgh),