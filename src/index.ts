let inputField = document.querySelector("#input-box") as HTMLInputElement;

let itemList = document.querySelector(".toDoList") as HTMLUListElement;
function onEnter(event:KeyboardEvent){

    if(event.key === "Enter" && inputField.value.trim() !== ""){

        const listItem = document.createElement("li");
        listItem.classList.add("box")
        listItem.textContent = inputField.value;
         
        itemList.appendChild(listItem);

        inputField.value="";
    }
}
inputField.addEventListener("keydown",onEnter);
