function randNum() {
  return Math.floor(Math.random() * 9);
}

function replaceNouns() {
  var url = "noun.html"
  $.get("words.html", function(response) {
    var nouns = response.split("\n");
    var $nounSpaces = $(".noun");
    $nounSpaces.each(function() {
      var rand_num = randNum();
      // this.innerHTML = nouns[randNum()];
      $(this).html(nouns[rand_num]);
    });
  })
  .fail(function(error) {
    url = "words.html";
    alert("The request failed: " + error.statusText);
  });
}

function replaceVerbs() {
  $.get("verb.html", function(response) {
    var verbs = response.split("\n");
    var $verbSpaces = $(".verb");
    $verbSpaces.each(function() {
      // this.innerHTML = verbs[randNum()];
      $(this).html(verbs[randNum()]);
    
    });
  });
}

$(document).ready(function (){
  $('#random_noun').on('click', function(event) {
    replaceNouns();
  });

  $('#random_verb').on('click', function(event) {
    replaceVerbs();
  });
});
