function handlebarsSetup() {
  //put any handlebars setup in here
  //  $("#user-details-partial").html()
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
 $('a').on("click", function(event) {
   event.preventDefault();
   searchRepositories();
 })
});


function searchRepositories() {
  var url = "https://api.github.com/search/repositories?q=" + $('#searchTerms').val();
  // debugger;
  $.get(url).done(function(data) {
    if (data.items.length === 0) {
      displayError();
    } else {
        var items = data['items'];
        items.forEach(function(item) {
          var name = item['name'];
          // var html = "<li>"
          $('#results').append('<li>' + name + '</li>' + `<a href="#" onclick="showCommits()">Commits</a>`);
          // debugger;
    })
  }
    // searchRepositories()
  });
}

function showCommits(el) {
  // var el = { dataset: { repository: "repo", owner: "owner" } }
  var url = `https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`
  $.get(url, function(data) {
    // debugger;
    if(data.length === 0) {
      displayError();
    } else {
      // debugger;
      console.log(data[0].url);
      var html = data[0].url;
      // let template = $('#commits-template').html();
      // let templateScript = Handlebars.compile(template);
      // let html = templateScript(data);
      $('#details').append(html);
    }
  });
}



function displayError() {
  $('#errors').text("I'm sorry, there's been an error. Please try again.");
}
