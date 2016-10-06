// var searchParams;
var url;
var urlBase =  "https://api.github.com/search/repositories?q=";
var repoBase = "https://api.github.com/repos/";
var searchTerms;
var template;

function handlebarsSetup(){
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html());
};

function displayError(){
    $('#errors').append("I'm sorry, there's been an error. Please try again.")
};


// list the SHA, the author, the author's login, and the author's avatar as an image.
// GET /repos/:owner/:repo/commits
function showCommits(detail){
  ////test
  // console.log(detail);
  // console.log(detail.dataset);

  ///Webpage works with these, but tests require to use .dataset. I wonder why....
  // var owner = detail.getAttribute('data-owner');
  // var repo = detail.getAttribute('data-repository');
  var owner = detail.dataset.owner
  var repo = detail.dataset.repository
  url = repoBase + owner + '/' + repo + '/commits';
  $.get(url, function(){
  }).done(function(response){
      template = Handlebars.compile($('#commits-template').html());
      $('#details').html(template(response));
    }).fail(function(){
    displayError();
    console.log("too bad, so sad, your dad"); //test
  });
};

function searchRepositories(){
  searchTerms = $('#searchTerms').val();
  url = urlBase + searchTerms;
  $.get(url, function(){
  }).done(function(response) {
    template = Handlebars.compile($('#results-template').html())
    $('#results').html(template(response))
  }).fail(function (){
    displayError();
    console.log("too bad, so sad, your dad"); //test
  });
};


$(document).ready(function(){
  handlebarsSetup();
});
