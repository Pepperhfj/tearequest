const yesButton = document.getElementById('yes');
// Get the ID of 'yes' !

const noButton = document.getElementById('no');
// Get the ID of 'no' -_-

const backButton = document.getElementById('back');
// Get the ID of 'back' ^o^

yesButton.onclick = redirectPage; // Clicking on yesButton will activate the redirectPage function !

noButton.onclick = consequencesInitialize; // Your actions will have consequences . . .

backButton.onclick = goBack; // Go back to the main page;

function redirectPage() { // The redirectPage function . . .
  let page1 = document.getElementById('teacutscene1');
  page1.style.display = "none"; 
  
  let page2 = document.getElementById('teacutscene2');
  page2.style.display = "block";
}

/* The purpose of the function above is to 
redirect you to another part of the page without 
making multiple files and sites ! */


function consequencesInitialize() {
  let page1 = document.getElementById('teacutscene1');
  page1.style.display = "none"; 
  
  let page2 = document.getElementById('consequence');
  page2.style.display = "block";  
}

/* The purpose of the function above is to teach
you a lesson about accepting tea requests. */


function goBack() { // The goBack function . . .
  let page1 = document.getElementById('teacutscene1');
  page1.style.display = "block"; 
  
  let page2 = document.getElementById('teacutscene2');
  page2.style.display = "none";

  let page3 = document.getElementById('consequence');
  page3.style.display = "none";
}

/* The purpose of the function above is to 
redirect you to the main page >o< */
