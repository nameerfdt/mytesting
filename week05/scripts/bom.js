// declare three const variables that hold references to the input, button, and list elements.
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Create a click event listener for the Add Chapter button using arrow function.
button.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        deleteButton.addEventListener('click', function() {
            ul.removeChild(li);
            input.infocus();
    });
        ul.appendChild(li);
        input.value = '';
    }   else {
        input.focus();
    }
});

    // } 
    // else if (input.value == '') {
    //     console.log = "Enter a book and chapter"
    // } else {
    // }




// populate the li elements textContent or innerHTML with the input value
// li.appendChild(myFavchap);

// populate the button textContent with a ❌
// button.textContent = "❌";

// append the li element with the delete button
// li.appendChild(button);

// append the li element to the unordered list in your HTML
// li.appendChild(list);

// add an event listener to the delete button that removes the li element when clicked
// button.addEventListener('click',() => {
//     li.removeChild(list);
    
// send the focus to the input element
// input.focus();

// change the input value to nothing or the empty string to clen up the interface for the user

});
