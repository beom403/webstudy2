
let itemList = [];
let inputButton = document.querySelector(".input_button");
inputButton.addEventListener("click", addItem);
let inputBox = document.querySelector(".input_box");
inputBox.addEventListener("keydown", function(event){
    if (event.keyCode == 13){
        event.preventDefault();
        addItem();
    }
});

function showList() {
    let list = "<ul>"
    for (let i = 0; i <itemList.length; i++) {
        list += "<li class='item'>" + itemList[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    }
    list += "</ul>";
    document.querySelector(".content").innerHTML = list;


    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}

function addItem() {
    let item = document.querySelector(".input_box").value;
    item = item.replace(/\r/g, "");
    item = item.replace(/\n/g, "");
    if (item != "") {
        itemList.push(item);
        document.querySelector(".input_box").value = "";
        document.querySelector(".input_box").focus();
    }
    showList();
}
