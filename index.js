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
/***** the search is not working, try to fix that******/
function search(){
                var searchValue=document.getElementById("navbar-search-input").value;
                var gamelist=document.getElementsByClassName("game_element");
                if(searchValue==undefined||searchValue.length==0||searchValue.trim()==""){
                        for(var i=0;i<gamelist.length;i++){
                                removeClass(gamelist[i],"hidden");
                        }
                        return;
                }else{
                        var searchValueUpper=searchValue.toUpperCase();
                        for(var i=0;i<gamelist.length;i++){
                                removeClass(gamelist[i],"hidden");
                        }
                        return;
                }else{
                        var searchValueUpper=searchValue.toUpperCase();
                        for(var i=0;i<gamelist.length;i++){
                                addClass(gamelist[i],"hidden");
                                var txt=twitlist[i].getElementsByClassName("game_description_text")[0].innerHTML;
                                var txtUpper=txt.toUpperCase();
                                if(txtUpper.indexOf(searchValueUpper.trim())!=-1){
                                        removeClass(gamelist[i],"hidden");
                                }
                        }
                }
}
function addClass(obj,cls) {
        if(obj.className == ''){
                obj.className = cls;
        } else {
                var arrclassname = obj.className.split(' ');
                var index = arrIndexOf(arrclassname,cls);
                if(index == -1) {
                        obj.className += ' ' + cls;
                }
        }
}
function removeClass(obj,cls){
        if(obj.className != ''){
                var arrClassName = obj.className.split(' ');
                var index = arrIndexOf(arrClassName,cls);
                if(index != -1){
                        arrClassName.splice(index,1);
                        obj.className = arrClassName.join('');
                }
        }
}
function arrIndexOf(arr,v){
        for(var i=0;i<arr.length;i++){
                if(arr[i] == v){
                        return i;
                }
        }
        return -1;
}
