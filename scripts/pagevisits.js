// initialize disply element variable
const visitsDisplay = document.querySelector(".visits");

// get stored value for the numVisits-ls KEY in localStorage it if exists.
// if the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// determine if this is the first visit or display the number of visits. This was written backwards to think about the logic.
// if numVisits in the localStorage does not equal 0
if (numVisits !== 0) {
    // send the numVisits count to the variable visitsDisplay output
    visitsDisplay.textContent = numVisits;
    // otherwise
} else {
    //  disply the text in visitsDisplay output
    visitsDisplay.textContent = "This is your first visit. 🥳 Welcome!";
}

// increment the number of visits by one.
numVisits++;

// store thenew visit total into localStorage, key=numVisits-ls
localStorage.setItem("numVisits-ls", numVisits);

// In DevTools, open Applications to view localStorage data