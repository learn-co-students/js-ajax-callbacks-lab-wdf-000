function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
}

$(document).ready(function (){
// try searchfunction up here
  handlebarsSetup();
  search();
	showCommits();
});

function search() {
  $('#searchLink').on('click', searchRepositories);
}

function showCommits() {
  // for dynamically added anchor link
  $('#results').on('click', '#commits', function(e){
    e.preventDefault();
    getCommits($(this).attr('href').split('{')[0]);
  });
}

function searchRepositories() {
  let input = $('#searchTerms').val();
  // handle spaces in input
  let searchTerms = input.split(' ').join('+');
  const url = 'https://api.github.com/search/repositories?q=' + searchTerms;

  $.get(url, function(response) {
    let template = Handlebars.compile($("#repo-template").html());
    $('#results').html(template(response));
  })
		.fail(displayError);
}

function getCommits(url) {
 $.get(url, function(response) {
   let template = $('#commits-template').html();
   let templateScript = Handlebars.compile(template);
   let html = templateScript(response);
   $('#details').append(html);
 })
		.fail(displayError); 
}

function displayError() {
  return $('#errors').html("I'm sorry, there's been an error. Please try again.");
}

