const item = document.getElementById("add-item");

controlList = () => {
    const submitButton = document.getElementById("submit");
    const addItem = document.getElementById("list");

    submitButton.addEventListener("click", moreToBuy = (e) => {
        e.preventDefault();
        const addLi = document.createElement("li");
        addLi.id = "item"
        addLi.textContent = item.value;
        addItem.appendChild(addLi);
        item.value = "";
    });
}

controlList();

// markComplete = () => {
//     let listItem = document.getElementById("item").textContent;

//     // if (moreToBuy) {
//         listItem.addEventListener("dblclick", checkItemOff = () => {
//         listItem.style.textDecoration = "line-through";
//         });
//     // }
// }

// markComplete();
   