
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
    let list = "";
    for (let i = 0; i < itemList.length; i++) {
        list += "<div class='chat_text'>" + itemList[i] + "</div>";
    }
    document.querySelector(".content").innerHTML = list;
}

function addItem() {
    let item = document.querySelector(".input_box").value;
    // item = item.replace(/\r/g, "");
    // item = item.replace(/\n/g, "");
    if (item != "") {
        itemList.push(item);
        document.querySelector(".input_box").value = "";
        document.querySelector(".input_box").focus();
    }
    showList();
}
