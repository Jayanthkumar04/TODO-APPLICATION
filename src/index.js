"use strict";
let inputField = document.querySelector("#input-box");
let itemList = document.querySelector(".toDoList");
function onEnter(event) {
    if (event.key === "Enter" && inputField.value.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.classList.add("box");
        listItem.textContent = inputField.value;
        itemList.appendChild(listItem);
        inputField.value = "";
    }
}
inputField.addEventListener("keydown", onEnter);
