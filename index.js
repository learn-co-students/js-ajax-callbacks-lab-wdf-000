function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
	handlebarsSetup()
});


// function repositoriesClick(){
// 	$("a").on("click", function(ev) {
// 		ev.preventDefault();

// 		var term = $("#searchTerms").val();
// 		var url = "https://api.github.com/search/repositories?q=" + term;


// 		$.get(url, function(response){
// 			console.log(response.items)
// 		});

// 	} )
// }

function displayError(){
	$('#errors').html("I'm sorry, there's been an error. Please try again.")
}

function searchRepositories(){
	let term = $("#searchTerms").val();
	let url = "https://api.github.com/search/repositories?q=" + term;
	$.get(url, function(response){
		const template = Handlebars.compile($('#results-template').html())
		$('#results').html(template(response))
	}).fail(error =>{
		displayError()
	})
}

function showCommits(element){
	var owner = element.dataset.owner;
	var repo = element.dataset.repository;
	$.get(`https://api.github.com/repos/${owner}/${repo}/commits`,response =>{
		const template2 = Handlebars.compile($('#commits-template').html());
		$('#details').html(template2(response))
		}).fail(error => {
			displayError()
	});
}




// function handlebarsSetup() {
//   //put any handlebars setup in here
//   Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
// }

// $(document).ready(function (){
// 	handlebarsSetup();

// 	searchRepositories();
// 	// $('a#search').on('click', function(ev) {
// 	// 	ev.preventDefault();

// 	// 	let term = $("#searchTerms").val();
// 	// 	let url = "https://api.github.com/search/repositories?q=" + term;
// 	// 	$.get(url, function(response) {
//  //          response.items.forEach(function(repo) {
//  //          	var link = `<a class="repo-link" href=${repo.url} >${repo.name}</a></br>`
//  //          	$('#results').append(link);
//  //          })
// 	// 	})
// 	// })

// });


// function displayError(){
// 	$('#errors').html("I'm sorry, there's been an error. Please try again.")
// }

// function searchRepositories(){
// 	$('a#search').on('click', function(ev) {
// 		ev.preventDefault();

// 	let term = $("#searchTerms").val();
// 	let url = "https://api.github.com/search/repositories?q=" + term;
// 	$.get(url, function(response){
// 		const template = Handlebars.compile($('#results-template').html())
// 		$('#results').html(template(response))
// 	}).fail(error =>{
// 		displayError()
// 	})
// }

// function showCommits(element){
// 	var owner = element.dataset.owner;
// 	var repo = element.dataset.repository;
// 	$.get("https://api.github.com/repos/${owner}/${repo}/commits",response =>{
// 		const template2 = Handlebars.compile($('#commits-template').html());
// 		$('#details').html(template2(response))
// 		}).fail(error => {
// 			displayError()
// 	});
// }



// // function repositoriesClick(){
// // 	$("a").on("click", function(ev) {
// // 		ev.preventDefault();

// // 		var term = $("#searchTerms").val();
// // 		var url = "https://api.github.com/search/repositories?q=" + term;


// // 		$.get(url, function(response){
// // 			console.log(response.items)
// // 		});

// // 	} )
// // }




