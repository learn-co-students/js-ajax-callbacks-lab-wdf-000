function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
  searchRepositories()
});


function displayError() {
  $("div#errors").html("I'm sorry for some of the things said, hope you are too")
}

function searchRepositories() {
  var searchTerms = $("input#searchTerms").val();
  var url = `https://api.github.com/search/repositories?q=${searchTerms}`;
  $.get(url,function(data) {
    const template = Handlebars.compile($("#results-template").html());
    $("div#results").html(template(data));
  }).fail(function(error) {
    displayError();
  })
}

function showCommits(element) {
  const owner = element.dataset.owner
  const repo = element.dataset.repository
  var url = `https://api.github.com/repos/${owner}/${repo}/commits`
  $.get(url, function(data) {
    const template = Handlebars.compile($("#commits-template").html());
    $("div#details").html(template(data))
  }).fail(error => {
    displayError();
  })
}


