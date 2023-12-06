const btn = document.getElementById("btn-primary");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  let list = document.getElementById("task-input").value;
  if (list.trim() === "") {
    alert("inerisci almeno un elemento nella tua lista");
    return;
  }

  let unorderedList = document.getElementById("unordered-list");

  let taskList = document.createElement("li");
  taskList.classList.add("task");
  taskList.innerHTML = list;

  const completation = document.createElement("div");
  completation.classList.add("completation-line");
  taskList.appendChild(completation);

  const deleteList = document.createElement("button");
  deleteList.classList.add("btn-secondary");
  deleteList.textContent = "Elimina";
  deleteList.addEventListener("click", function () {
    unorderedList.removeChild(taskList);
  });
  taskList.appendChild(deleteList);

  taskList.addEventListener("click", function () {
    taskList.classList.toggle("completed");
    (completation.style.display = taskList.classList.contains("completed")),
      "hidden";
  });

  unorderedList.appendChild(taskList);
  document.getElementById("task-input").value = "";
});
