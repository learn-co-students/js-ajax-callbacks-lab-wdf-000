function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  searchRepositories()
  handlebarsSetup()
});

function displayError() {
  $("#errors").append("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  var query = $('#searchTerms').val();
  var url = `https://api.github.com/search/repositories?q=${query}`;

  $.get(url, function(data) {
    var template = Handlebars.compile($('#results-template').html());
    $('#results').html(template(data));
  }).fail(displayError);
}

function showCommits(arg) {
  var url = `https://api.github.com/repos/${arg.dataset.owner}/${arg.dataset.repository}/commits`
  $.get(url, function(data) {
    var template = Handlebars.compile($('#commits-template').html());
    $('#details').html(template(data));
  }).fail(displayError);
}
