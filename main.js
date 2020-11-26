

addToList = () => {
    const submitButton = document.getElementById('submit');
    const list = document.getElementById('list');

    submitButton.addEventListener("click", moreToBuy = () => {
        let item = document.getElementById("add-item").value;
        let addLi = document.createElement("LI");
        addLi.textContent = item;
        let addItem = document.querySelector('#list');
        addItem.appendChild(addLi);
        list.appendChild(addItem);
    })
}

addToList();