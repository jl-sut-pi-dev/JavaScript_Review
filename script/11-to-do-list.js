const lists = [];

function addToDoList() {
  const toDolistValue = document.querySelector(".name-input");
  const dateValue = document.querySelector(".date-input");
  // const
  let list = {};
  list.name = toDolistValue.value;
  list.date = dateValue.value;
  lists.push(list);
  toDolistValue.value = "";
  dateValue.value = "";
  showToDoList();
}
function showToDoList() {
  const container = document.querySelector(".container");

  let htmlCollections = "";
  for (let i = 0; i < lists.length; i++) {
    htmlCollections += `
    <div>${lists[i].name} </div>
    <div> ${lists[i].date} </div>
    <button class="delete-to-do-button" onclick="
      lists.splice(${i}, 1);
      showToDoList();
    " > Delete </button>  
    `;
  }
  container.innerHTML = htmlCollections;
}
