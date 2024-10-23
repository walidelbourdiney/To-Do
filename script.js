document.getElementById("addBtn").addEventListener("click", function () {
  const input = document.getElementById("input");
  const todoList = document.getElementById("todoList");

  if (input.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;
    todoList.appendChild(li);
    input.value = ""; // Clear the input field
  }
});
