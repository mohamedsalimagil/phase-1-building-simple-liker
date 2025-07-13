// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalMsg = document.getElementById('modal-message');

  // Hide the error modal on initial load
  modal.classList.add('hidden');

  // Add click listeners to every heart
  document.querySelectorAll('.like-glyph').forEach(heart => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          // Success: toggle heart state
          if (heart.textContent === EMPTY_HEART) {
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart');
          } else {
            heart.textContent = EMPTY_HEART;
            heart.classList.remove('activated-heart');
          }
        })
        .catch(error => {
          // Failure: show error modal for 3 s
          modalMsg.textContent = error;
          modal.classList.remove('hidden');
          setTimeout(() => modal.classList.add('hidden'), 3000);
        });
    });
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
