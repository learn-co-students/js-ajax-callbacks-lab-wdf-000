function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
  attachListeners();
});




function attachListeners() {
  $("a#repo_search").on("click", function(event) {
    event.preventDefault();

    searchRepositories();

  })
}



function displayError() {
  $("#errors").text("error")
}



function searchRepositories() {
  var searchTerm = $("#searchTerms").val();
  var url = "https:\/\/api.github.com\/search\/repositories\?q=" + searchTerm;

  $.get(url, function(response) {
    debugger

    const template = Handlebars.compile( $("#results-template").html());
    $('#results').html(template(response))
  }).fail(error => {

    displayError()
  });

}


function showCommits(item) {
  // var owner = searchRepositories()
  var owner = item.dataset.owner
  var repo = item.dataset.repository
  var url = `https:\/\/api.github.com\/repos\/${owner}\/${repo}\/commits`


  $.get(url, function(response) {



    const template2 = Handlebars.compile($("#commits-template").html());

    $('#details').html(template2(response))
      }).fail(error => {

        displayError()
      });

  }
