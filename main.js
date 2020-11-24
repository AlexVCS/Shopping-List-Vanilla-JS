addtoList = () => {
    const submitButton = document.getElementById('submit');
    const list = document.getElementById('list');

    submitButton.addEventListener("click", moreToBuy = () => {
        let item = document.getElementById("add-item").value;
        let addLi = document.createElement("LI");
        let addItem = document.createTextNode(item);
        list.appendChild(addItem);
    })
}

addtoList();