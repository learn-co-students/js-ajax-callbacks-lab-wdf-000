$(document).ready(function (){
});


function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  var searchTerm = $("#searchTerms").val();
  var url = `https://api.github.com/search/repositories?q=${searchTerm}`

  $.get(url, function(data) {
    const template = Handlebars.compile($("#results-template").html());
    $("#results").html(template(data))
  }).fail( error => {
    displayError();
    console.log("failed");
  })

}
function showCommits(el) {
  const owner = el.dataset.owner
  const repo = el.dataset.repository
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`, data => {
    const template = Handlebars.compile($('#commits-template').html())
    $('#details').html(template(data))
  }).fail(error => {
    displayError()
  })
}
