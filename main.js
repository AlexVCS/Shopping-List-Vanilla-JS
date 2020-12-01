addToList = () => {
    const submitButton = document.getElementById("submit");
    const item = document.getElementById("add-item");

    submitButton.addEventListener("click", moreToBuy = (e) => {
        e.preventDefault();
        const addItem = document.getElementById("list");
        const addLi = document.createElement("LI");
        addLi.textContent = item.value;
        addItem.appendChild(addLi);
        item.value = "";
        // checkForItem();
    });

    // checkForItem = () => {
    //     const itemValue = item.value.trim();

    //     if (itemValue === '') {
    //         setErrorFor(item, 'Please enter an item')
    //     }
    // }
    // setErrorFor = (input, message) => {
    //     const formControl = input.parentElement;
    //     const small = formControl.querySelector('small');
    //     small.innerText = message;
    //     formControl.className = 'form-control error';
    // }
}

addToList();