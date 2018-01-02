// VARIABLES
var apiUrl = 'http://api.icndb.com/jokes/random';
var $paragraph = $('#pJoke');
var $button = $('#btnJoke').click(function() {
  getJoke();
});

// FUNCTIONS
function getJoke() {
  $.ajax({
    method: 'GET',
    url: apiUrl,
    success: function(res) {
      $paragraph.text(res.value.joke);
    }
  
  });
}

// MAIN
getJoke();
