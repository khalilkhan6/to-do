let textField = document.getElementById("textField");
let list = document.getElementById("list");
let btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  let li = document.createElement("li");
  li.textContent = textField.value;
  textField.value = "";
  list.appendChild(li);
  li.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
  });
  li.addEventListener("dblclick", () => {
    li.remove();
  });
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    textField.value = li.textContent;
    li.remove();
  });
});
