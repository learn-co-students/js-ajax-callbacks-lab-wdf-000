function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
  searchClickEvent();
  commitClickEvent();
});

function searchClickEvent() {
  $('#search').on('click', searchRepositories);
}

function commitClickEvent() {
  $('#results').on('click', '#commits', function(event) {

    event.preventDefault();
    showCommits($(this).attr('href').split('{')[0]);
  });
}

function searchRepositories() {
  const searchTerms = $('#searchTerms').val().split(' ').join('+');
  const url = "https://api.github.com/search/repositories?q=" + searchTerms;
  $.get(url, function(data) {
    let template = $('#results-template').html();
    let templateScript = Handlebars.compile(template);
    $('#results').html(templateScript(data));
  
  }).fail(function(error) {
    displayError();
  });
}

function showCommits(url) {
  $.get(url, function(data) {
    let template = $('#commits-template').html();
    let templateScript = Handlebars.compile(template);
    
    $('#details').html(templateScript(data));
  }).fail(function(error) {
    displayError();
}); 
}
function displayError() {
  return $('#errors').html("I'm sorry, there's been an error. Please try again.");
}
