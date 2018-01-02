// VARIABLES
var url = 'http://api.icndb.com/jokes/random';
var paragraph = document.getElementById('pJoke');
var button = document.getElementById('btnJoke');

// LISTENERS
button.addEventListener('click', function(){
  getJoke();
});

// FUNCTIONS
function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function() {
    var response = JSON.parse(xhr.response);
    paragraph.innerText = response.value.joke;
  });
  xhr.send();
}

// MAIN
getJoke();
