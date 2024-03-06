// Select the visitsDisplay element
const visitsDisplay = document.querySelector(".visitsDisplay");

// Get current date
const currentDate = new Date();

// Get stored value from localStorage
const previousVisit = Number(window.localStorage.getItem("previousVisit-ls")) || 0;

// Calculate the difference between the current date and the last visited date
const timeDifference = currentDate.getTime() - previousVisit;

if (previousVisit === 0) {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else if (timeDifference <= 0) {
    visitsDisplay.textContent = "Back so soon! Awesome";
} else {
    const daysSinceLastVisit = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    visitsDisplay.textContent = "You last visited " + daysSinceLastVisit + (daysSinceLastVisit === 1 ? " day" : " days") + " ago.";
}

// Store the current visit date in localStorage
window.localStorage.setItem("previousVisit-ls", currentDate.getTime());
