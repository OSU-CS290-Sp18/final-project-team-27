function getGameNumberFromURL() {
   var path = window.location.pathname;
   var pathParts = path.split('/');
   if (pathParts[1] === "fps" || pathParts[1] === "moba" || pathParts[1] === "racing" || pathParts[1] === "sports") {
      return pathParts[2];
   } else {
      return null;
   }
}

function handleModalAcceptClick() {

   var user = document.getElementsByClassName("input_user_name")[0].value;
   var comment = document.getElementsByClassName("input_comment")[0].value;

   if (!comment || !user) {
      alert("Please enter all of the fields before submitting.");
   } else {
      var request = new XMLHttpRequest();
      var gameNumber = getGameNumberFromURL();
      var requestURL = '/all/' + gameNumber + '/addComment';
      request.open('POST', requestURL);

      var requestBody = JSON.stringify ({
         user: user,
         comment: comment
      });
      request.setRequestHeader('Content-Type', 'application/json');

      request.addEventListener('load', function (event) {
         if (event.target.status !== 200) {
            alert("Error storing comment: " + event.target.response);
         } else {
            var commentTemplate = Handlebars.templates.newTwit; //change to match handlebar name
            var newCommentHTML = commentTemplate ({
               user: user,
               comment: comment
            });

            var commentContainer = document.querySelector('.comment-container'); //change to match html
            commentContainer.insertAdjacentHTML('beforeend', newCommentHTML);
         }
      });

      request.setRequestHeader('Content-Type', 'application/json');
      request.send(requestBody);

   }
}

window.addEventListener('DOMContentLoaded', function () {

  var submitButton = document.getElementsByClassName('submit_button');
  submitButton[0].addEventListener('click', handleModalAcceptClick);


});
