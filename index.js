function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  searchRepositories()
  handlebarsSetup()
});

function searchRepositories() {
    const searchTerm = $('#searchTerms').val()

    var url = `https://api.github.com/search/repositories?q=${searchTerm}`
    $.get(url, function(response) {
      const template = Handlebars.compile($("#results-template").html());

    $('#results').html(template(response))
  })
}

function displayError() {
  $('#errors').append("error")
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
