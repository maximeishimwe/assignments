document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector(".add-btn");
  const todoList = document.querySelector(".todolist");
  const sortAscBtn = document.querySelector(".sort-asc");
  const sortDescBtn = document.querySelector(".sort-desc");

  let todos = [];

  addBtn.addEventListener("click", addTodo);
  sortAscBtn.addEventListener("click", () => sortTodos("asc"));
  sortDescBtn.addEventListener("click", () => sortTodos("desc"));

  function addTodo() {
    const title = document.querySelector("#todo-title").value;
    const description = document.querySelector("#todo-description").value;
    const dueDate = document.querySelector("#todo-due-date").value;

    if (title === "" || dueDate === "") {
      alert("Please fill in both the title and due date");
      return;
    }

    const newTodo = {
      id: Date.now(),
      title,
      description,
      dueDate: new Date(dueDate),
      completed: false,
    };

    todos.push(newTodo);
    renderTodos();
    clearInputs();
  }

  function clearInputs() {
    document.querySelector("#todo-title").value = "";
    document.querySelector("#todo-description").value = "";
    document.querySelector("#todo-due-date").value = "";
  }

  function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo) => {
      const todoItem = document.createElement("li");
      todoItem.className = todo.completed ? "complete" : "";
      todoItem.innerHTML = `
        <div>${todo.title}</div>
        <div>${todo.description}</div>
        <div>${new Date(todo.dueDate).toLocaleString()}</div>
        <button onclick="deleteTodo(${todo.id})">🗑️</button>
        <button onclick="editTodo(${todo.id})">✏️</button>
        <button onclick="toggleComplete(${todo.id})">✔️</button>
      `;
      todoItem.classList.add("marginBt");
      todoList.appendChild(todoItem);
    });
  }

  function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
  }

  function editTodo(id) {
    const todo = todos.find((todo) => todo.id === id);
    document.getElementById("todo-title").value = todo.title;
    document.getElementById("todo-description").value = todo.description;
    document.getElementById("todo-due-date").value = new Date(todo.dueDate)
      .toISOString()
      .slice(0, 16);

    deleteTodo(id);
  }

  function toggleComplete(id) {
    const todo = todos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    renderTodos();
  }

  function sortTodos(order) {
    todos.sort((a, b) =>
      order === "asc"
        ? new Date(a.dueDate) - new Date(b.dueDate)
        : new Date(b.dueDate) - new Date(a.dueDate)
    );
    renderTodos();
  }

  window.deleteTodo = deleteTodo;
  window.editTodo = editTodo;
  window.toggleComplete = toggleComplete;
});
