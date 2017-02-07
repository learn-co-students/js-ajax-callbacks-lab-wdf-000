function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function() {
  handlebarsSetup();
  $("a#search").on("click", function(e) {
    e.preventDefault();
    searchRepositories();
  });
  $('#results').on('click', '.commits', function(e) {
    e.preventDefault();
    showCommits();
  });
});

function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories() {
  const searchTerm = $("#searchTerms").val();
  const url = "https://api.github.com/search/repositories?q=" + searchTerm;
  $.get(url, function(data){
    const template = Handlebars.compile($('#results-template').html())
    $('#results').html(template(data))
  }).fail(error =>{
    displayError()
  })
}

function showCommits(element) {
  const owner = element.dataset.owner;
  const repo = element.dataset.repository;
  $.get(`https://api.github.com/repos/${owner}/${repo}/commits`,data =>{
    const template = Handlebars.compile($('#commits-template').html());
    $('#details').html(template(data))
    }).fail(error => {
      displayError()
  });
}


var nums = [1,2,3,4,5]

function squareArray(nums) {
  nums.forEach(function(num){
    return num * num
  })
}

function arrayMath(nums, calculationType){
  nums.forEach(calculationType)
}

function addition(num){
  return num + num;
}

arrayMath(nums, addition);

function forEach(array, callback){
  for (i = 0; i > array.length; i++){
    callback(array[i])
  }
}

forEach(nums, addition)
