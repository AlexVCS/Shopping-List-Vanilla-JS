addToList = () => {
    const submitButton = document.getElementById("submit");
    let item = document.getElementById("add-item").value;

    submitButton.addEventListener("click", moreToBuy = () => {
        let addItem = document.getElementById("list");
        let addLi = document.createElement("LI");
        addLi.textContent = item;
        addItem.appendChild(addLi);
    });
}

addToList();