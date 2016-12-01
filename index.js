function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.");
}

function searchRepositories() {

  const searchQuery = $('#searchTerms').val();

  $.get(`https://api.github.com/search/repositories?q=${searchQuery}`, function(data) {
    const template = Handlebars.compile($('#results-template').html());
    $('#results').html(template(data))
  }).fail(error => {
      displayError()
    });
}

function showCommits(arg) {
  var owner = arg.dataset.owner;
  var repo = arg.dataset.repository;
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, function(data) {
    const template2 = Handlebars.compile($('#commits-template').html());
    $('#details').html(template2(data))
  }).fail(error => {
    displayError()
  });

}

$(document).ready(function (){
  handlebarsSetup()
});
