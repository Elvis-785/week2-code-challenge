// create an emepty array to store shopping list items
let shoppingList = [];

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("item-input");
    const addButton = document.getElementById("add-item-button");
    const clearbutton = document.getElementById("clear-list-button");
    const list = document.getElementById("shopping-list");

    // func to add new item to the list
    addButton.addEventListener('click', () => {
        const itemText = input.value.trim();
        if (itemText !== "") {
            addItem(itemText);
            input.value = '';
        }
    });

    // func to clear the entire list
    clearbutton.addEventListener('click', () => {
        clearList();
    });

    // func to handle item click (mark as purchased)
    list.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    });

    function addItem(text) {
        shoppingList.push(text);
        renderList();
    }

    function clearList() {
        shoppingList = [];
        renderList();
    }

    function renderList() {
        list.innerHTML = ' ';
        shoppingList.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            list.appendChild(li);
        });
    }

});