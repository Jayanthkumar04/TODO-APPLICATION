let inputField = document.querySelector("#input-box") as HTMLInputElement;
let box = document.querySelector(".toDoList") as HTMLElement;
let itemList = document.querySelector(".toDoList") as HTMLUListElement;

let selects = document.querySelectorAll(".custom-checkbox");
let itemsArray: string[] = [];

function onEnter(event: KeyboardEvent) {
    if (event.key === "Enter" && inputField.value.trim() !== "") {
        itemsArray.unshift(inputField.value); // Add new item to the start of the array
        inputField.value = ""; // Clear the input field
        updateList();
    }
}

function updateList() {
    // Start with an empty string to represent the list
    let htmlContent = "";

    
    // Loop through the items array and concatenate each item into the HTML string
    itemsArray.forEach((item, index) => {
        const itemId = `checkbox-${index}`; // Create a unique id for each checkbox
        htmlContent += `
            <li class="box" style="overflow:auto; font-size:1.5em;">
                <input type="checkbox" id="${itemId}" class="custom-checkbox" />
                <label for="${itemId}">${item}</label>
            </li>
        `;
    });

    // Update the innerHTML of the itemList (this replaces the entire list)
    itemList.innerHTML = htmlContent;

    // Ensure the box is visible
    box.style.display = "block";
}

inputField.addEventListener("keydown", onEnter);


