window.onload = function () {
    initShoppingList();
};

function initShoppingList() {
    let form =document.getElementById("item-form");

    form.addEventListener("submit", (e) => {
        handleItemForm(e, form);
    });
}

function handleItemForm(e, formRef) {
    if(e.preventDefault){
        e.preventDefault();
    }

    addItemToShoppingList();
    formRef.reset();
    return false;
}

function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");
    let id = getRandomInt(0, 10000000)

    let itemHTML = createListItemHtml(itemName.value, itemAmount.value, id);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHTML);
    setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id){
    let deleteButton =document.getElementById("button"+id);
    deleteButton.addEventListener("click", () => {
       removeListItem(id);
    });
}

function createListItemHtml(itemName, itemAmount, id){
    return `<li id="item${id}"> 
                ${itemName} - ${itemAmount} 
                <button id="button${id}" type="button">Delete Item</button> 
            </li>`;
}

function removeListItem(id){
    let listItem = document.getElementById("item"+id);
    listItem.parentNode.removeChild(listItem);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}