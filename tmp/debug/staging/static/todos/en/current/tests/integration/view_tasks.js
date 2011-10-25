var task;
module("Given an existing task", {
  setup: function() {
    SC.RunLoop.begin();
    Todos.main();
    task = Todos.store.createRecord(Todos.Task, {
      'description': 'Some Task',
      'isDone': false
    });
    SC.RunLoop.end();
  },
 
  teardown: function() {
    SC.RunLoop.begin();
    Todos.getPath('mainPage.mainPane').remove();
    Todos.store.reset();
    SC.RunLoop.end();
  }
});
 
test("When looking at the list of tasks", function() {
  var todosList = Todos.mainPage.todosList().get('content');
  equals(todosList.indexOf(task) != -1, true, "Then I should see the task in the list");
});
