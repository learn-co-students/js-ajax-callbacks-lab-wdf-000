function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup();

  $("#search").on("click", searchRepositories)
  $('#results').on('click', '.commits', function(e) {

      showCommits(this);

     });

});

function searchRepositories(){
    var terms = $("#searchTerms").val();
    $.get("https://api.github.com/search/repositories?q=" +  terms, function(data){
          var source   = $("#results-template").html();
          var template = Handlebars.compile(source);
          $("#results").append(template(data));


   }).fail(function(error) {
         displayError("I'm sorry, there's been an error. Please try again.");
       });
}

  function displayError(){
    $("#errors").append("I'm sorry, there's been an error. Please try again.")
  }

  function showCommits(e){
    var owner = e.dataset.owner;
    var repo = e.dataset.repository;
    var commitsUrl = "https://api.github.com/repos/" + owner + "/" + repo + "/commits";
    $.get(commitsUrl, function(data) {

        let source = $("#commits-template").html();
        let template = Handlebars.compile(source);
        $("#details").html(template(data));
      }).fail(function(error) {
            displayError();
          });
  }
