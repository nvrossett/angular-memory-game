app.factory('Title', function(){
  var title = 'Project Title';
  return {
    show: function() { return title; },
    set: function(newTitle) { title = newTitle; }
  };
});