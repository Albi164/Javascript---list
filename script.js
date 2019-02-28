if (document.readyState === "loading") {  // Delay init until content is loaded
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}

function init() {
    console.log("Initializing!");

    // Attach listeners
    document.querySelector('#submitItemBtn').addEventListener("click", (event) => {
        event.preventDefault(); // Prevent standard HTML form behaviour (page reload)
        var li = document.createElement("LI");// Create a <li> node
        let createInput = document.createElement("input");
        let createLabel = document.createElement("label");
        let createButton = document.createElement("button");
        let txtLabel = document.getElementById("itemText").value;

        li.className='list-group-item'
        createInput.className = 'todoCheckbox';
        createLabel.className= 'labelClass';
        createButton.className='close-btn';

        createInput.setAttribute('type','checkbox')

        document.getElementById("itemList").appendChild(li);
        createLabel.innerHTML=document.getElementById('itemText').value;

       // li.appendChild(textnode);// Append the text to <li>
        li.appendChild(createInput);
        li.appendChild(createLabel);
        li.appendChild(createButton);

        createLabel.appendChild(txtLabel);

        var list = document.getElementsByClassName('list-group-item');

        return list.sort();

        console.log("Initialization done!");

    });
    document.querySelectorAll('.close-btn').forEach(function (btn) {
        btn.addEventListener('click', removeTask);
    });


}
function removeTask() {
    let button = event.target;
    button.parentElement.remove();
}

