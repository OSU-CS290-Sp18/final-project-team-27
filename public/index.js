function insertNewComment(category, user, comment) {

   if (!comment || !author) {
      alert("Please enter all of the fields before submitting.");
   } else {
      var requrest = new XMLHttpRequest();
      var requestURL = '/' + category + '/addComment';
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
   }
}
