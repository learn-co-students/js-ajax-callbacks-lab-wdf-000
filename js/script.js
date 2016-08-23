function replaceNouns() {
  $.get("noun.html", function(data){
    var nouns = data.split("\n");
    $('.noun').each(function(){
      var randNum =  Math.floor(Math.random() * nouns.length);
      $(this).html(nouns[randNum]);
    })
  }).fail(function (error){
    alert('The request failed: ' + error);
  });
};

function replaceVerbs() {
  $.get("verb.html", function(data){
    var verbs = data.split("\n");
    $('.verb').each(function(){
      var randNum =  Math.floor(Math.random() * verbs.length);
      $(this).html(verbs[randNum]);
    })
  }).fail(function (error){
    alert('The request failed: ' + error);
  });
};

$(document).ready(function (){
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceVerbs);
});



