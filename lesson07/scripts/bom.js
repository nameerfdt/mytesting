// declare three const variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList or an empty array if the function call returns null or undefined
let chaptersArray = getChapterList() || [];
    
// Now let's populate the displayed list of chapters. Use a forEach on the chaptersArray to process each entry named chapter. Use an arrow function within the loop to call a new defined function named displayList and pass it the argument of chapter. That way each entry will be processed, i.e., appended to the list.
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// create event listener when button is clicked
button.addEventListener('click', () => {
    // makes sure input value is not empty
    if (input.value != '') {
        // call the fuction that output the submitted chapter input
        displayList(input.value);
        // add the chapter to the chapters array
        chaptersArray.push(input.value);
        // update the localStorage with the new array
        setChapterList();
        // clear the input
        input.value = '';
        // set the focus back to the iput 
        input.focus();
    }
});

// Create the displayList defined function that receives one parameter named item. The item parameter is the input.
function displayList(item) {
    // create a li element
    let li = document.createElement('li');
    // create a deliete button
    let deleteButton = document.createElement('button');
    //  create variable to uppercase first letter and lowercase all others from the input (item)
    let capWord = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
    // populate the li elements textContent or innerHTML with the input value
    li.textContent = item;
    // populate the button textContent with a ❌
    deleteButton.textContent = '❌';
    // this references the CSS rule .delete (width: fit-content;)to size the delete button
    deleteButton.classList.add('delete');
    // append the li element with the delete button
    li.append(deleteButton);
    // append the li element to the unordered list in your HTML
    list.append(li);
    // list.append(item);
    // set input value back to null
    input.value = '';
    // send the focus to the input element
    input.focus();
        // add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener('click', function (){
        list.removeChild(li);
        // removes the chapter from the array and local storage
        deleteChapter(li.textContent);
        // set focus back to input
        input.focus();
    // **input.value = '';
        });
};

// Define the setChapterList function to set the localStorage item that you have already named. Use JSON.stringify() to stringify the array.
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}
// Define the getChapterList function to get the localStorage item. No parameter is needed. Since this function returns to an awaiting array, we will need to use JSON.parse on the string.
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
// define the deleteChapter function with a parameter named chapter that does three things
function deleteChapter(chapter) {
    // reformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when we called the deleteChapter function. Use string.slice() method to extract the last character.
    chapter = chapter.slice(0, chapter.length - 1);
    // redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed.
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    // Call the setChapterList function to update the localStorage item
    setChapterList(); 
}


// button.addEventListener('keydown', () => {
//     // makes sure input value is not empty
//     if (input.value != '') {
//         // call the fuction that output the submitted chapter input
//         displayList(input.value);
//         // add the chapter to the chapters array
//         chaptersArray.push(input.value);
//         // update the localStorage with the new array
//         setChapterList();
//         // clear the input
//         input.value = '';
//         // set the focus back to the iput 
//         input.focus();
//     }
// });

// function displayList(item) {
//     // create a li element
//     let li = document.createElement('li');
//     // create a deliete button
//     let deleteButton = document.createElement('button');
//     //  create variable to uppercase first letter and lowercase all others from the input (item)
//     let capWord = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
//     // populate the li elements textContent or innerHTML with the input value
//     li.textContent = item;
//     // populate the button textContent with a ❌
//     deleteButton.textContent = '❌';
//     // this references the CSS rule .delete (width: fit-content;)to size the delete button
//     deleteButton.classList.add('delete');
//     // append the li element with the delete button
//     li.append(deleteButton);
//     // append the li element to the unordered list in your HTML
//     list.append(li);
//     // list.append(item);
//     // set input value back to null
//     input.value = '';
//     // send the focus to the input element
//     input.focus();
//         // add an event listener to the delete button that removes the li element when clicked
//     deleteButton.addEventListener('keydown', function (){
//         list.removeChild(li);
//         // removes the chapter from the array and local storage
//         deleteChapter(li.textContent);
//         // set focus back to input
//         input.focus();
//     // **input.value = '';
//         });
// };


// // function to allow Enter key to add input to list
// input.addEventListener('keydown', function (event){
//     if (event.key === 'Enter'){
//         event.preventDefault();
//         let li = document.createElement('li');
//         let deleteButton = document.createElement('button');
//         deleteButton.textContent = '❌';
//         deleteButton.addEventListener('click', function (){
//             list.removeChild(li);
//             input.focus();
//             input.value = '';
//         })    
//         // let word = input.value;
//         let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//         li.textContent = capWord;
//         li.appendChild(deleteButton);
//         list.append(li);
//         input.value = '';
//     }
// });
