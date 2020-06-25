let btnComposeTweet = document.getElementById('btn-compose-tweet');
let textareaTweetBody = document.getElementById('compose-tweet-body');

// Auto-focus textarea when compose tweet button is clicked
btnComposeTweet.addEventListener('click', (e) => {
  setTimeout(() => {
    textareaTweetBody.focus();
  }, 500)
})