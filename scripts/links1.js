// create a baseURl variable that references my root WDD230 repo, GitHub pages URL
const baseURL = "https://nameerfdt.github.io/wdd230/";

// add a variable named linksURl that references your links.json data file
const linksURL = "https://nameerfdt.github.io/wdd230/data/links.json";

// write an asynchronous function to get the links data in the links.json data file. 
async function getLinks() {
    // store response
    const response = await fetch(linksURL);
    // convert response to JSON object and store in variable named data 
    const data = await response.json();
    // expression to test data response that will be removed after testing
    // console.log(data);
    // add a new line of code that calls a function that will build out the available activity links from the data response
    displayLinks(data.lessons);
}   
// calls the getAssignLinks functions
    getLinks();

const activities = document.getElementById("activities")

// create displayLinks() function and name the functions single parameter weeks. remember from the json data that you wrote and tested that the data is in an array of objects representing weeks of the term, 
const displayLinks = ((weeks) => {
    // use a loop to process each week using it's "week" string and "links" object(url and title to create the output)
    // tired using parameter named week and lesson
    weeks.forEach((week) => {
        // create a section element with a variable named card
        const card = document.createElement('section');
        // create a he element for the week header
        // const h4 = document.createElement('h4');
        // // create a text element with the h4 variable name of h4 and get the week number from JSON lesson key 
        // h4.textContent = `${week.lesson}: `;
        // // append h4 to the card (section element)
        // card.appendChild(h4);

// EVERYTHING ABOVE WORKS

        links.forEach((link) => {
        // create unordered list
            const links = document.createElement('a');
            const ul = document.createElement('ul');
            // create list of weekly assignments
            const li = document.createElement('li');
            // create the anchor tag for each url
            a.setAttribute("href", url);
            links.textContent = `${link.title}`;
            card.appendChild(li)
            
        })

        // url.textContent = `${week.url}`;
        

        
        

        // const link = document.createElement('p');

        // const url = document.createElement('p');
        // const title = document.createElement('p');

        // create textcontent for urlLink
        // lesson.textContent = `Week: ${week.lesson}`;
        // link.textContent = `${week.links}`
        // link.textContent = `${week.url}` + `${week.title}`;
        // url.textContent = `${week.url}`;
        // title.textContent = `${week.title}`;

            // card.appendChild(lesson);
            // card.appendChild(link);

        activities.appendChild(card);
    });
})