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
}

controlList();

// const listItem = document.getElementsByClassName(".item")[0];

//     listItem.addEventListener("click", checkItemOff = (e) => {
        
//         listItem.style.textDecoration = "line-through";
//     });