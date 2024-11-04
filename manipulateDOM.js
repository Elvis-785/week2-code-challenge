// create an empty array to store shopping list items
let shoppingList = [];

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("item-input");
    const addButton = document.getElementById("add-item-button");
    const clearButton = document.getElementById("clear-list-button");
    const list = document.getElementById("shopping-list");

    // Load items from local storage
    loadFromLocalStorage();
    renderList();

    // func to add new item to the list
    addButton.addEventListener('click', () => {
        const itemText = input.value.trim();
        if (itemText !== "") {
            addItem(itemText);
            input.value = '';
        }
    });

    // func to clear the entire list
    clearButton.addEventListener('click', () => {
        clearList();
    });

    // func to handle item click (mark as purchased or edit)
    list.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        }
    });

    list.addEventListener("dblclick", (event) => {
        if (event.target.tagName === "LI") {
            editItem(event.target);
        }
    });

    function addItem(text) {
        shoppingList.push(text);
        saveToLocalStorage();
        renderList();
    }

    function clearList() {
        shoppingList = [];
        saveToLocalStorage();
        renderList();
    }

    function renderList() {
        list.innerHTML = '';
        shoppingList.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = item;
            li.setAttribute('data-index', index);
            list.appendChild(li);
        });
    }

    function editItem(listItem) {
        const index = listItem.getAttribute('data-index');
        const newValue = prompt('Edit item:', shoppingList[index]);
        if (newValue) {
            shoppingList[index] = newValue;
            saveToLocalStorage();
            renderList();
        }
    }

    function saveToLocalStorage() {
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    }

    function loadFromLocalStorage() {
        const storedList = localStorage.getItem('shoppingList');
        if (storedList) {
            shoppingList = JSON.parse(storedList);
        }
    }
});
