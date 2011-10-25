describe('Todos.todoListController', function() {
  describe('#createTodo', function(){
    var createTodoSpy, title;  
    beforeEach(function() {
      title = 'title';
      createTodoSpy = spyOn(Todos.store,'createRecord');
      Todos.todoListController.createTodo(title);
      });
    it('creates a todo with the passed in title', function(){
      expect(createTodoSpy).toHaveBeenCalledWith(Todos.Todo, {title:title});
        });     
  });
  
  describe('#remaining', function(){
    var remainingSpy,remaining, todos;  
    beforeEach(function() {
      remaining = Todos.todoListController.remaining();
      });
      
    it('gets the length of the remaining todos', function(){
      expect(remaining).toEqual(2);
        }); 
  });
  
   describe('#clear_completed and #sort_todos', function(){
    var tasks, completed, completedSpy,remains,sorted;  
    beforeEach(function() {
     tasks = Todos.store.find(Todos.Todo);
      });
      
    it('clears the completed todos and sorts by tag', function(){
       runs(function () {
       Todos.todoListController.clearCompletedTodos();
        remains = Todos.todoListController.remaining();
     expect(remains).toBeLessThan(3);
  });
      waits(3000);
       runs(function () {
       sorted = Todos.todoListController.sortTodos();
    expect(tasks.get('firstObject').get('tag')).toEqual('eat'); 
  });
        }); 
  });
  describe('Todos.MarkDoneView', function() {
    var todos 
    beforeEach(function() {
      todos = Todos.store.find(Todos.Todo); 
      Todos.todoListController.allAreDone();
      });
    it('isDone set to true for every element in todos', function(){
     expect(todos.everyProperty('isDone', true)).toEqual(true); 
        });         
  });
});


