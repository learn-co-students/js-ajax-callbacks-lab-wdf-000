function replaceNouns() {
  $.get( "noun.html", function(nouns) {
    nouns = nouns.split(/\s+/);
    
    $(".noun").each(function(){
      $(this).html(nouns[~~(Math.random() * nouns.length)]);
    });
  })
    .fail(function(error) {
      console.log(error);
  });
};

function replaceVerbs() {
  $.get( "verb.html", function(verbs) {
    verbs = verbs.split(/\s+/);
    
    $(".verb").each(function(){
      $(this).html(verbs[~~(Math.random() * verbs.length)]);
    });
  })
    .fail(function(error) {
      console.log(error);
  });
};

$(document).ready(function (){
  // Code here

  $('#random_noun').on('click', function(){
    replaceNouns();
  });

  $('#random_verb').on('click', function(){
    replaceVerbs();
  });

});
