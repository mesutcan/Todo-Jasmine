// ==========================================================================
// Project:   Todos - mainPage
// Copyright: @2011 My Company, Inc.
// ==========================================================================
/*globals Todos */

// This page describes the main user interface for your application.  
Todos.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'middleView'.w(),
    
    middleView: SC.ScrollView.design({
      hasHorizontalScroller: NO, 
      layout: { top: 36, bottom: 32, left: 0, right: 0 }, 
      backgroundColor: 'white', 
      childViews: 'contentView'.w(),
      
       contentView: SC.ListView.design({
        contentBinding: 'Todos.tasksController.arrangedObjects'
        contentValueKey: 'description', //add description
        contentCheckboxKey: 'isDone' //add is done
      })
    })
  })
});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('todos');