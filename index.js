function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

$(document).ready(function() {
  handlebarsSetup();
  $("a#search").on("click", function() {
    searchRepositories();
  });
  $('#results').on('click', '.commits', function(e) {
    e.preventDefault();
    showCommits(this);    
  });
});

function displayError() {
  $("#errors").html("I'm sorry, there's been an error. Please try again.");
}

function searchRepositories() {
  let terms = $("#searchTerms").val();
  let apiUrl = "https://api.github.com/search/repositories?q=" + terms;
  $.get(apiUrl, function(data) {
    let source = $("#results-template").html();
    let template = Handlebars.compile(source);
    $("#results").html(template(data));
   }).fail(function(error) {
    displayError(); 
  });
}

function showCommits(el) {
  let owner = el.dataset.owner;
  let repo = el.dataset.repository;
  let commitsUrl = "https://api.github.com/repos/" + owner + "/" + repo + "/commits"
  $.get(commitsUrl, function(data) {
    let source = $("#commits-template").html();
    let template = Handlebars.compile(source);
    $("#details").html(template(data));
  }).fail(function(error) {
    displayError();
  });
}


