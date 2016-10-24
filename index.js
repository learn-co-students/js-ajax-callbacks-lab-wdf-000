function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
  clickSearchRepositories();
  clickShowCommits();
});

function searchRepositories() {
  var terms = $('#searchTerms').val();
  var searchTerms = terms.replace( /\s/g, '+');
  var url = "https://api.github.com/search/repositories?q=" + searchTerms
  $.get(url, function(data) {
    var template = $('#repos-template').html();
    var templateScript = Handlebars.compile(template);
    var niceResults = templateScript(data);
    $('#results').html(niceResults);
  }).fail(displayError);
}

function displayError() {
  // how to make this wait until searchRepositories is finished
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function clickSearchRepositories() {
  $('#search').on('click', searchRepositories)
}

function clickShowCommits() {
  $('#results').on('click', '#commits', function(e){
    e.preventDefault();
    showCommits($(this).attr('href').split('{')[0]);
  });
}

function showCommits(url) {
  $.get(url, function(data) {
    template = $('#commits-template').html();
    templateScript = Handlebars.compile(template);
    niceResults = templateScript(data);
    $('#details').append(niceResults);
  }).fail(displayError);
}
