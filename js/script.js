function replaceNouns() {
  $.get('noun.html', function(response){
    $('.noun').each(function(index, noun){
      words = response.split('\n');
      i = Math.floor(Math.random() * (words.length - 1));
      $(this).text(words[i]);
    });
  });
}

function replaceVerbs() {
    $.get('verb.html', function(response){
      $('.verb').each(function(index, verb){
        words = response.split('\n');
        i = Math.floor(Math.random() * (words.length - 1));
        $(this).text(words[i]);
      });
    });
};

$(document).ready(function (){
  $('#random_noun').click(replaceNouns);
  $('#random_verb').click(replaceNouns);
});
