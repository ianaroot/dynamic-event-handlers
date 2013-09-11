$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    addTodo()
    deleteTodo()
    completeTodo()
  }

  //Create functions to add, remove and complete todos

  function addTodo() {
$('.add').on('click', function() {
      var todoName= $('input').val()
      $('.todo_list').append(buildTodo(todoName));
    });
  }

  function deleteTodo() {
     $('.todo_list').delegate('.delete', 'click', function() {
      $(this).closest('.todo').remove()
    });
  }

  function completeTodo() {
    $('.todo_list').delegate('.complete', 'click', function() {
      $(this).closest('.todo').addClass('complete')
    });
  }
  

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  

  bindEvents();
});

