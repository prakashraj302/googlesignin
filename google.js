

// // signup
// const signupForm = document.querySelector('#signup-form');
// signupForm.addEventListener('submit', (e) => {
//   e.preventDefault();
  

//   const email = signupForm['signup-email'].value;
//   const password = signupForm['signup-password'].value;
  

//   auth.createUserWithEmailAndPassword(email, password).then(cred => {
//     console.log(cred.user);
//   });
// });

 

function signup(){
  var provider = new firebase.auth.GoogleAuthProvider(); 
  firebase.auth().signInWithPopup(provider).then(function(result) {
   console.log(result)
  }).catch(function(error) {
   console.log(error)
    // ...
  });
}
