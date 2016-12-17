function displayError() {
  $('#errors').html("There was an error, try again.")
}
function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, response => {
      const template = Handlebars.compile($('#results-template').html())
      $('#results').html(template(response))
    }).fail(error => {
      displayError()
    })
}

function showCommits(element) {
  var owner = element.dataset.owner;
  var repo = element.dataset.repository;
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, response => {
    const template2 = Handlebars.compile($('#commits-template').html());
    $('#details').html(template2(response))
  }).fail(error => {
    displayError()
  });

}

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(()=>{
  handlebarsSetup()
});
