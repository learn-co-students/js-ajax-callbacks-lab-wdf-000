

$(document).ready(function(){

  $('a').on("click", searchRepositories);
  // showCommits();
  // handlebarsSetup();
  displayError()

});






function searchRepositories(){
  var name = $('#searchTerms').val();
  let url = "https://api.github.com/search/repositories?q=" + name;
  $.get(url).done(function(data){
    let source = $("#repositories-template").html();
    let template = Handlebars.compile(source);
    let html = template(data)
  $('#results').append(html);

}).fail(
  displayError
);

}

function displayError() {
  return $("#errors").html("I'm sorry, there's been an error. Please try again.");
}



function showCommits(el){
  var repo = el.dataset.repository
  var owner = el.dataset.owner

  var url = `https://api.github.com/repos/${owner}/${repo}/commits`
  debugger;
  $.get(url).done(function(data){
      let source = $("#commits-template").html();
      let template = Handlebars.compile(source);
      let html = template(data)
      $('#details').html(html);
  }).fail(
    displayError
  );

}



function handlebarsSetup() {
  //put any handlebars setup in here

  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}
