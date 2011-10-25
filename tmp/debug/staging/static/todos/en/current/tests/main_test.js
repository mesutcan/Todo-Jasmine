var mockedSetFunction, mockedFindFunction, setMockObject, findMockObject;
module("Todos.main", {
  setup: function() {
    mockedSetFunction = Todos.tasksController.set; 
    setMockObject = CoreTest.stub('Todos.tasksController.set', function() { return YES; }); 
    Todos.tasksController.set = setMockObject; 
 
    mockedFindFunction = Todos.store.find;
    findMockObject = CoreTest.stub('Todos.store.find', function() { return YES; });
    Todos.store.find = findMockObject;
    Todos.main();
  },
 
  teardown: function() {
    Todos.getPath('mainPage.mainPane').remove();
    Todos.tasksController.set = mockedSetFunction;
    Todos.store.find = mockedFindFunction;
  }
});
 
test("setup finding tasks", function() {
  equals(findMockObject.callCount, 1, "Should delegate to the store to find the tasks");
});
 
test("setup tasksController content", function() {
  equals(setMockObject.callCount, 1, "Should delegate to the tasksController to setup content"); 
});
