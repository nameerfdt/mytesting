document.addEventListener('DOMContentLoaded', function() {
    const modeButton = document.querySelector("#darkmodeBtn");
    const body = document.querySelector("body");
    const main = document.querySelector("main");

    modeButton.addEventListener("click", () => {
        body.classList.toggle('darkmode');
        main.classList.toggle('darkmode');
    });


    // THIS WILL CHANGE TO DARKMODE AND CHANGE BACK TO ORIGINAL WHEN CLICKED FOR THE JOIN PAGE

    // create var for all elements with the class of sections and links
    const elements = document.querySelectorAll(".sections");
    const links = document.querySelectorAll(".links");
    let isDarkMode = false;

    // if the dark mode button is clicked
    modeButton.addEventListener("click", () => {
        if (!isDarkMode) {
    // iterate over each section element to change the background, color, and border
        elements.forEach(function(element){
            element.style.backgroundColor = 'black';
            element.style.color = 'white'; 
            element.style.border = '1px solid white'; 
            });
            isDarkMode = true;

    // iterated over each a.link element to change to color to white
        links.forEach(function(element){
            element.style.color = 'white';
        });   
        isDarkMode = true;
    // else style each with original styling 
        } else {
            elements.forEach(function(element){
                element.style.backgroundColor = '';
                element.style.color = '';
                element.style.border = '';  
            });
            isDarkMode = false;

            links.forEach(function(element){
                element.style.color = '';
            });
        }
    })
});


// modeButton.addEventListener("click", () => {
//     if (!isDarkMode) {
// // iterate over each element using forEach
//     links.forEach(function(element){
//         element.style.color = 'white'; 
//         });
//         isDarkMode = true;
//     } else {
//         links.forEach(function(element){
//             element.style.color = ''; 
//         });
//         isDarkMode = false;
//     }
// });


// THIS WILL CHANGE ALL TO BLACK/WHITE BUT NOT CHANGE BACK

// const elements = document.querySelectorAll("*");
// const isDarkMode = false;

// modeButton.addEventListener("click", () => {
//     if (!isDarkMode) {
// // iterate over each element using forEach
// elements.forEach(function(element){
//     element.style.backgroundColor = 'black';
//     element.style.color = 'white';   
//     });
//     isDarkMode = true;
// } else {
//     elements.forEach(function(element){
//         element.style.backgroundColor = '';
//         element.style.color = '';   
// });
// isDarkMode = false;
// }
// });

// // if I add this, when I click darkmode, all turns durk, if I click dark mode again, it keeps the sections black

// select all elements with the class of membership
// const elements = document.querySelectorAll(".membership");

// modeButton.addEventListener("click", () => {
// // iterate over each element using forEach
// elements.forEach(function(element){
//     element.style.backgroundColor = 'black';
//     element.style.color = 'white';    
// });

// });