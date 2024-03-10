// create a baseURl variable that references my root WDD230 repo, GitHub pages URL
const baseURL = "https://nameerfdt.github.io/wdd230/";

// add a variable named linksURl that references your links.json data file
const linksURL = "https://nameerfdt.github.io/wdd230/data/links.json";

// write an asynchronous function to get the links data in the links.json data file. 
async function getAssignLinks() {
    // store response
    const response = await fetch(linksURL);
    // convert response to JSON object and store in variable named data 
    const data = await response.json();
    // expressiong to test data response
    console.table(data.links);
}
getAssignLinks();