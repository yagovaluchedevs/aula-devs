const itemToTheList = document.querySelector("#item-to-the-list");
const containerForm = document.querySelector("#container-form");
const containerToDoList = document.querySelector("#container-to-do-list");

containerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const elementList = document.createElement("p");
  elementList.innerText = itemToTheList.value;
  containerToDoList.appendChild(elementList);

  itemToTheList.value = "";
});
