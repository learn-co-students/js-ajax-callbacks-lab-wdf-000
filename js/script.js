function replaceNouns() {
  $.get('noun.html', function(data) {
    $('.noun').each(function() {
      nouns = data.split('\n');
      $(this).html(nouns[Math.floor(Math.random() * nouns.length)]);
    });
  }).fail(function(error) {
    console.log('Something went wrong: ' + error);
  });
};

function replaceVerbs() {
  $.get('verb.html', function(data) {
    $('.verb').each(function() {
      verbs = data.split('\n');
      $(this).html(verbs[Math.floor(Math.random() * verbs.length)]);
    });
  }).fail(function(error) {
    console.log('Something went wrong: ' + error);
  });
};

$(document).ready(function (){
  // Code here
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceNouns);
});
