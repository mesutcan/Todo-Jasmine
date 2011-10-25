// ==========================================================================
// Project:   Todos
// Copyright: ©2011 My Company, Inc.
// ==========================================================================

/*globals Todos*/

Todos = SC.Application.create({
  store: SC.Store.create().from(SC.Record.fixtures)
});

Todos.Todo = SC.Record.extend({ 
title: SC.Record.attr(String), isDone: SC.Record.attr(Boolean, {defaultValue: NO }),tag: SC.Record.attr(String, { defaultValue: 'eat' })
 });

Todos.Todo.FIXTURES = [
 
    { "guid": "todo-1",
      "title": "Build my first SproutCore app",
      "isDone": false,
      "tag": "eat" },
 
    { "guid": "todo-2",
      "title": "Build a really awesome SproutCore app",
      "isDone": false,
      "tag": "work" },
 
    { "guid": "todo-3",
      "title": "Next, the world!",
      "isDone": false,
      "tag": "play" }
];

Todos.CreateTodoView = SC.TextField.extend({
  insertNewline: function() {
    var value = this.get('value');

    if (value) {
      Todos.todoListController.createTodo(value);
      this.set('value', '');
    }
  }
});

Todos.MarkDoneView = SC.Checkbox.extend({
  titleBinding: '.parentView.content.title',
  valueBinding: '.parentView.content.isDone'
});

Todos.SortingView = SC.TemplateView.extend({
  sortBinding: 'Todos.todoListController.sortTodos'
});


Todos.StatsView = SC.TemplateView.extend({
  remainingBinding: 'Todos.todoListController.remaining',

  displayRemaining: function() {
    var remaining = this.get('remaining');
    return remaining + (remaining === 1 ? " item" : " items");
  }.property('remaining').cacheable()
});


Todos.todoListController = SC.ArrayController.create({
  // Initialize the array controller with an empty array.
  content: [],

  // Creates a new todo with the passed title, then adds it
  // to the array.

  createTodo: function(title) {
   // var todo = Todos.Todo.create({ title: title });
     Todos.store.createRecord(Todos.Todo, { title: title });
   // this.pushObject(todo);
  },

  remaining: function() {
    return this.filterProperty('isDone', false).get('length');
  }.property('@each.isDone'),

  clearCompletedTodos: function() {
    this.filterProperty('isDone', true).forEach(this.removeObject, this);
  },
  
  sortTodos: function() {
   Todos.todoListController.sortProperty('tag');
  },

  allAreDone: function(key, value) {
    if (value !== undefined) {
      this.setEach('isDone', value);

      return value;
    } else {
      return this.get('length') && this.everyProperty('isDone', true);
    }
  }.property('@each.isDone')

});

SC.ready(function() {
  Todos.mainPane = SC.TemplatePane.append({
    layerId: 'todos',
    templateName: 'todos'
  });
 var todos = Todos.store.find(Todos.Todo);
 Todos.todoListController.set('content', todos);
});

; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todos');