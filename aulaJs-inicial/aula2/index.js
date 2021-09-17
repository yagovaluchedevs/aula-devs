const containerForm = document.querySelector("#container-form");
const textField = document.querySelector("#text-field");
const toDoListContainer = document.querySelector("#to-do-list-container");

textField.style.height = "20px";
textField.style.width = "180px";

containerForm.style.width = "100%";
containerForm.style.display = "flex";

containerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const listElement = document.createElement("p");
  listElement.innerText = textField.value;
  toDoListContainer.appendChild(listElement);

  textField.value = "";
});
