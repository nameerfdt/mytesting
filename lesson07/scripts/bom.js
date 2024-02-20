// declare three const variables that hold references to the input, button, and list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Declare an array named chaptersArray and assign it to the results of a defined function named getChapterList or an empty array if the function call returns null or undefined
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', () => {
    if (input.value != '') {
        // let word = input.value;
        // let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
// function displayList(capWord) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    // let word = input.value;
    // let capWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    li.textContent = item;
    // li.textContent = capWord;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);
    // input.value = '';
    // input.focus();
    deleteButton.addEventListener('click', function (){
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    input.value = '';
        });
};

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList(); 
}