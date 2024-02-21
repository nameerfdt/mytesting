
// set variable for lastVisited 
const lastVisit = document.querySelector(".lastDate");
const visitsDisplay = document.querySelector(".visitsDisplay");
// set variable for current Date

// get current date
const currentDate = new Date();

// get stored value from the visited from the preVisit-ls KEY in Local Storage
const preVisit = Number(window.localStorage.getItem ("preVisit-ls")) || 0;

// calculate the difference betwween the current date and the last visited date
const timeDifference = currentDate.getTime() - preVisit;

if (preVisit === 0)  {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else if (timeDifference <= 0) { 
    visitsDisplay.textContent = "Back so soon! Awesome";
} else {
    const daysSinceLastVisit = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    visitsDisplay.textContent = "You last visited" + daysSinceLastVisit + {n} (daysSinceLastVisit === 1 ? " day" : " days") + " ago.";
}
    
// store the current visit date in the localStorage 
window.localStorage.setItem("preVisit-ls", currentVisit.getTime());



// document.addEventListener("DOMContentLoaded", function() {
//     // Retrieve the last visited date from localStorage
//     var lastVisited = localStorage.getItem('lastVisited');
//     var currentDate = new Date();

//     if (!lastVisited) {
//         // If it's the first visit, display a welcome message
//         displayMessage("Welcome! Let us know if you have any questions.");
//     } else {
//         lastVisited = new Date(lastVisited);

//         // Calculate the difference between the current date and the last visited date
//         var timeDifference = currentDate.getTime() - lastVisited.getTime();

//         // Calculate days since last visit
//         var daysSinceLastVisit = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//         if (daysSinceLastVisit === 0) {
//             // If the time between visits is less than a day, display a message
//             displayMessage("Back so soon! Awesome!");
//         } else {
//             // Otherwise, display the number of days since the last visit
//             var message = "You last visited " + daysSinceLastVisit + " " + (daysSinceLastVisit === 1 ? "day" : "days") + " ago.";
//             displayMessage(message);
//         }
//     }

//     // Update the last visited date in localStorage to the current date
//     localStorage.setItem('lastVisited', currentDate);
// });

// function displayMessage(message) {
//     var sidebar = document.getElementById('sidebar');
//     sidebar.innerHTML = "<p>" + message + "</p>";
// }
