function getGameNumberFromURL() {
   var path = window.location.pathname;
   var pathParts = path.split('/');
   if (pathParts[1] === "all") {
      return pathParts[2];
   } else {
      return null;
   }
}

function handleModalAcceptClick() {

   var user = document.getElementsByClassName("input_user_name")[0].value.trim();
   var comment = document.getElementsByClassName("input_comment")[0].value.trim();
   console.log(user, "==", comment);

   if (!comment || !user) {
      alert("Please enter all of the fields before submitting.");
   } else {
      var request = new XMLHttpRequest();
      var gameNumber = getGameNumberFromURL();
      var requestURL = "/all/" + gameNumber + "/addComment";
      request.open('POST', requestURL);

      var requestBody = JSON.stringify ({
         user: user,
         comment: comment
      });
      console.log("the send request info==", requestBody);


      request.addEventListener('load', function (event) {
         if (event.target.status !== 200) {
            alert("Error storing comment: " + event.target.response);
         } else {
            var commentBoxTemplate = Handlebars.templates.commentBox; //change to match handlebar name
            var newCommentHTML = commentBoxTemplate ({
               user: user,
               comment: comment
            });

            var commentContainer = document.querySelector('.all_comments_container'); //change to match html
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
