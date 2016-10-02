// function handlebarsSetup() {
//   //put any handlebars setup in here
//   Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
// }



// var terms = $('#name');
// var term = null;
// $(document).ready(function (){
//   handlebarsSetup();
//   searchTerms()
// });



// function searchRepositores(terms) {
//   // var url = `https://api.github.com/users/${terms}`;
//   var url = `https://api.github.com/search/repositories?q=${terms}`  
//   var url_commits = `https://api.github.com/repos/jquery/jquery/commits`

//   $.get(url)
//     .done(function(data) {
//       console.log("Done");
//       console.log(data);
//   }).fail(function(error) {
//     // This is called when an error occurs
//     showCommits(error);
//   });
// }
//   function displayError(error) {
//     console.log('Something went wrong: ' + error);
//   }

// function searchTerms() {
//   $('#search').click(function() {
//     term = terms.val();
//     console.log(term)
//     searchRepositores(term);
//   })
// }

// function showCommits() {
  
// }

// I'm sorry, there's been an error. Please try again.
//
function displayError() {
  $('#errors').html("I'm sorry, there's been an error. Please try again.")
}
function searchRepositories() {
  const searchTerms = $('#searchTerms').val()
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`, data => {
      const template = Handlebars.compile($('#results-template').html())
      $('#results').html(template(data))
    }).fail(error => {
      displayError()
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

function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});
