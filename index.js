function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();
  searchClickEvent();
  commitsClickEvent();
});

function searchClickEvent() {
  $('#search').on('click', searchRepositories);
}

function commitsClickEvent() {
  // for dynamically added anchor link
  $('#results').on('click', '#commits', function(e){
    e.preventDefault();
    searchCommits($(this).attr('href').split('{')[0]);
  });
}

function searchRepositories() {
  let terms = $('#searchTerms').val();
  // handle spaces in search terms
  let searchTerms = terms.split(' ').join('+');
  const url = "https://api.github.com/search/repositories?q=" + searchTerms;
  $.get(url, function(data) {
    // display error if no results
    if(data.items.length === 0) {
      displayError();
    } else {
      // search results retured something
      let template = $('#results-template').html();
      let templateScript = Handlebars.compile(template);
      let html = templateScript(data);
      $('#results').append(html);
    }
  });
}

function searchCommits(url) {
  $.get(url, function(data) {
    if(data.length === 0) {
      displayError();
    } else {
      let template = $('#commits-template').html();
      let templateScript = Handlebars.compile(template);
      let html = templateScript(data);
      $('#details').append(html);
    }
  });
}

function displayError() {
  $('#errors').text("I'm sorry, there's been an error. Please try again.")
}