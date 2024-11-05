"use strict";
let inputField = document.querySelector("#input-box");
let box = document.querySelector(".toDoList");
let itemList = document.querySelector(".toDoList");
let itemsArray = [];
function onEnter(event) {
    if (event.key === "Enter" && inputField.value.trim() !== "") {
        itemsArray.unshift(inputField.value);
        inputField.value = "";
        updateList();
    }
    function updateList() {
        itemList.innerHTML = "";
        itemsArray.forEach((item) => {
            box.style.display = "block";
            const listItem = document.createElement("li");
            listItem.classList.add("box");
            listItem.textContent = item;
            itemList.append(listItem);
            listItem.style.overflow = "auto";
            listItem.style.fontSize = "1.5em";
            inputField.value = "";
        });
    }
}
inputField.addEventListener("keydown", onEnter);
