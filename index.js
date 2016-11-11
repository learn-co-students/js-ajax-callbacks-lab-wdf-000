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
  $('#search').on('click', searchRepositories());
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

function showCommits(el) {
  var url = `https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`
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







// function handlebarsSetup() {
//   //put any handlebars setup in here
//   //  $("#user-details-partial").html()
//   Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
// }
//
// $(document).ready(function (){
//   handlebarsSetup()
//  $('a').on("click", function(event) {
//    event.preventDefault();
//    searchRepositories();
//  })
// });
//
//
// function searchRepositories() {
//   var url = "https://api.github.com/search/repositories?q=" + $('#searchTerms').val();
//   // debugger;
//   $.get(url).done(function(data) {
//     if (data.items.length === 0) {
//       displayError();
//     } else {
//         var items = data['items'];
//         items.forEach(function(item) {
//           var name = item['name'];
//           // var html = "<li>"
//           $('#results').append('<li>' + name + '</li>' + `<a href="#" onclick="showCommits()">Commits</a>`);
//           // debugger;
//     })
//   }
//     // searchRepositories()
//   });
// }
//
// function showCommits(el) {
//   // var el = { dataset: { repository: "repo", owner: "owner" } }
//   var url = `https://api.github.com/repos/${el.dataset.owner}/${el.dataset.repository}/commits`
//   $.get(url, function(data) {
//     // debugger;
//     if(data.length === 0) {
//       displayError();
//     } else {
//       // debugger;
//       console.log(data[0].url);
//       var html = data[0].url;
//       // let template = $('#commits-template').html();
//       // let templateScript = Handlebars.compile(template);
//       // let html = templateScript(data);
//       $('#details').append(html);
//     }
//   });
// }
//
//
//
// function displayError() {
//   $('#errors').text("I'm sorry, there's been an error. Please try again.");
// }




// HERE IS MY ORIGINAL INDEX. HTML



// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Ajax Lab</title>
//
//     <style>
//       .flexbox-container {
//         display: -ms-flex;
//         display: -webkit-flex;
//         display: flex;
//       }
//       .flexbox-container > div {
//         width: 50%;
//         padding: 10px;
//       }
//       .flexbox-container > div:first-child {
//         margin-right: 20px;
//       }
//     </style>
//   </head>
//   <body>
//     <main id="main">
//       <input type="text" id="searchTerms">
//       <br>
//       <a href="#">Search</a>
//       <div id="errors"></div>
//     </main>
//     <div class="flexbox-container">
//       <div>
//         <h3>Repositories</h3>
//         <div id="results"></div>
//       </div>
//       <div>
//         <h3>Details</h3>
//         <div id="details"></div>
//       </div>
//     </div>
//     <script src="jquery-3.1.0.min.js"></script>
//     <script src="handlebars.js"></script>
//     <script src="index.js"></script>
//
//     <script id="user-details-partial" type="text/x-handlebars-template">
//       <div>
//         My name is {{name}}. I am a {{occupation}}.
//       </div>
//     </script>
//   </body>
// </html>
