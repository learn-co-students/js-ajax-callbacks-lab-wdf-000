// function replaceNouns() {
//   $('#random_noun').click(function (e) {
//     $.get("noun.html",function(data) {
//       var items = data.split('\n');
//       var item = items[Math.floor(Math.random()*items.length)];
//       // $('.noun').html(item)
//       $('.noun').text(item)
//     } ).fail(function(error) {
//       alert("Something went wrong: " + error);
//     });
//   });
// };

// function replaceVerbs() {
//   $('#random_verb').click(function (e) {
//     $.get("verb.html",function(data) {
//       var items = data.split('\n');
//       var item = items[Math.floor(Math.random()*items.length)];
//       // $('.noun').html(item)
//       $('.verb').text(item)
//     } ).fail(function(error) {
//       alert("Something went wrong: " + error);
//     });
//   });
// };

// $(document).ready(function (){
//   // Code here
//   replaceVerbs();
//   replaceNouns();
// });

// function replaceNouns() {
//   $.get('noun.html', function(response){
//     $('.noun').each(function(index, noun){
//       words = response.split('\n');
//       i = Math.floor(Math.random() * (words.length - 1));
//       $(this).text(words[i]);
//     });
//   });
// }

// function replaceVerbs() {
//     $.get('verb.html', function(response){
//       $('.verb').each(function(index, verb){
//         words = response.split('\n');
//         i = Math.floor(Math.random() * (words.length - 1));
//         $(this).text(words[i]);
//       });
//     });
// };

// $(document).ready(function (){
//   $('#random_noun').click(replaceNouns);
//   $('#random_verb').click(replaceNouns);
// });



function replaceNouns() {
  $('#random_noun').click(function (e) {
    $.get('noun.html', function(data){
      var items = data.split('\n');
      $('.noun').each(function(index, noun){
        var item = items[Math.floor(Math.random()*items.length)];
        $(this).html(item)
      });
    }).fail(function(error) {
      alert("Something went wrong: " + error);
    });
  });
};

function replaceVerbs() {
  $('#random_verb').click(function (e) {
    $.get('verb.html', function(data){
      var items = data.split('\n');
      $('.verb').each(function(index, verb){
        var item = items[Math.floor(Math.random()*items.length)];
        $(this).html(item)
      });
    }).fail(function(error) {
      alert("Something went wrong: " + error);
    });
  });
};

$(document).ready(function (){
  // Code here
  replaceVerbs();
  replaceNouns();

  // $('#random_noun').click(replaceNouns);
  // $('#random_verb').click(replaceNouns);
});
