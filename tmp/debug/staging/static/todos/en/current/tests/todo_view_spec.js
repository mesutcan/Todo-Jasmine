describe('Todos.CreateTodoView', function() {
  describe('#insertNewline', function(){
    var createTodoSpy, value;  
    beforeEach(function() {
      value = 'Do Something';
      view = Todos.CreateTodoView.create({value:value});
      createTodoSpy = spyOn(Todos.todoListController,'createTodo');
      view.insertNewline;
      });
    it('delegates to create a new todo with its current value', function(){
      expect(createTodoSpy).toHaveBeenCalledWith(value);
        });     
  });
    
});

