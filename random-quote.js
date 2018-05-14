// VARIABLES
var quoteUrl =
  "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
var tweetLink = "https://twitter.com/intent/tweet?text=";
var prefix = "https://cors-anywhere.herokuapp.com/";

// FUNCTIONS
function getQuote() {
  $.getJSON(prefix + quoteUrl, createTweet);
  $.ajaxSetup({
    cache: false
  });
}

function createTweet(input) {
  var data = input[0];

  var quoteText = $(data.content)
    .text()
    .trim();
  var quoteAuthor = data.title;

  if (!quoteAuthor.length) {
    quoteAuthor = "Unknown author";
  }

  var tweetText = "Quote: " + quoteText + "\n" + "Author: " + quoteAuthor;

  if (tweetText.length > 140) {
    getQuote();
  } else {
    var tweet = tweetLink + encodeURIComponent(tweetText);
    $(".quote").text(quoteText);
    $(".author").text("Author: " + quoteAuthor);
    $(".tweet").attr("href", tweet);
  }
}

// MAIN
$(document).ready(function() {
  getQuote();
  $(".trigger").click(function() {
    getQuote();
  });
});
