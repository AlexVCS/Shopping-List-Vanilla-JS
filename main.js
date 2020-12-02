const item = document.getElementById("add-item");

controlList = () => {
    const submitButton = document.getElementById("submit");
    const addItem = document.getElementById("list");

    submitButton.addEventListener("click", moreToBuy = (e) => {
        e.preventDefault();
        const addLi = document.createElement("li");
        addLi.className = "item"
        addLi.textContent = item.value;
        addItem.appendChild(addLi);
        item.value = "";
    });

    // const removeButton = document.createElement("button");
    // removeButton.className = "remove";
    // removeButton.innerHTML = "Remove";
    // document.getElementsByClassName("item").appendChild(removeButton);

    // removeButton.addEventListener("click", removeItem = () => {
        
    // })
}

controlList();