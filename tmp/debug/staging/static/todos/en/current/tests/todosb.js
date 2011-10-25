describe('Todos.createTodoView', function() {
  var view, context;
  describe('#render', function() {
    var todo;
    beforeEach(function() {
      todo = Todos.store.createRecord(Todos.Todo, {
      'title': 'Some Task',
      'isDone': true,
      'tag': 'work'
      });
    });

    describe('testing the name', function() {
     var task; 
      beforeEach(function() {
        task = Todos.store.createRecord(Todos.Todo, {
      'title': 'Something',
      'isDone': true,
      'tag': 'violla'
      });
      });

      it('should have the correct title', function() {
        expect(task.get('title')).toEqual('Something');
      });
    });

    describe('Todos.todoListController', function() {
      describe('#createTodo', function(){
        var createTodoSpy, title;  
          beforeEach(function() {
           title = 'title';
           createTodoSpy = spyOn(Todos.Todo,'create');
           Todos.todoListController.createTodo(title);
           });
      it('creates a todo with the passed in title', function(){
         expect(createTodoSpy).toHaveBeenCalledWith({title:title});
     }); 
    });
  });
});

