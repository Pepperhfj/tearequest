const yesButton = document.getElementById('yes');
// Get the ID of 'yes' !

const noButton = document.getElementById('no');
// Get the ID of 'no' -_-

// Get the IDs of back buttons !
const backButtonThank = document.getElementById('backButtonThank'); // NEW ID
const backButtonConsequence = document.getElementById('backButtonConsequence'); // NEW ID


yesButton.onclick = redirectPage; // Clicking on yesButton will activate the redirectPage function !

noButton.onclick = consequencesInitialize; // Your actions will have consequences . . .

// Attach the goBack function to back buttons :P
if (backButtonThank) { // Good practice to check if element exists
    backButtonThank.onclick = goBack;
}
if (backButtonConsequence) { // Good practice to check if element exists
    backButtonConsequence.onclick = goBack;
}

/* The purpose of the line of code above is to 
redirect you to the main page >o< */


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
  
  let page2 = document.getElementById('consequence'); // This was 'page2', should be 'consequence' ID
  page2.style.display = "block";  
}

/* The purpose of the function above is to teach
you a lesson about accepting tea requests. */

