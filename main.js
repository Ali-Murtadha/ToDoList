// Variables
var myForm = document.getElementById("form");
var ul = document.getElementById("items");

// Events
myForm.addEventListener("submit", addItems);
ul.addEventListener("click", dltLi);

// Add Items
function addItems(e) {
  e.preventDefault();
  var newItem = document.getElementById("inputText").value;
  if (newItem == "") {
    newItem = "إستراحة";
  }
  var li = document.createElement("li");
  li.className = "list-item";
  li.appendChild(document.createTextNode(newItem));
  var dltbtn = document.createElement("button");
  dltbtn.className = "delete-btn";
  dltbtn.appendChild(document.createTextNode("X"));
  li.appendChild(dltbtn);
  ul.appendChild(li);
}

// Delete Items
function dltLi(e) {
  if (e.target.classList.contains("delete-btn")) {
    var li = e.target.parentElement;
    ul.removeChild(li);
  }
}
