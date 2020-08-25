/*
// Todo structure
todos = 
[ 
    {
        listName: "Monday",
        listItems: [ 
            {text: "item", done: false},
            {text: "second", done: true}
        ]
    },
    {
        listName: "Tuesday",
        listItems: [
            {text: "item", done: false},
            {text: "second", done: true}
        ]
    }
]
todos[0].listName
todos[0].listItems[0].text
todos[0].listItems[0].done
*/

// All data (todo lists, todo items)
let todos = [];

// Name of the currently selected todo list
let currentList;

// Filter for current todo items (search, hide done todos)
const filters = {
    searchText: "",
    hideDone: false,
};

// Load todo data from local storage
function loadTodo() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
}

// Save todo data to local storage
function saveTodo(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Check if todo list already exists, insert new list object to todo data and refresh todo list)
function createNewList(listName) {
    const listIndex = todos.findIndex(function (list) {
        return list.listName === listName;
    });
    // add if such list does not exists yet
    if (listIndex === -1) {
        const newList = {
            listName: listName,
            listItems: [],
        };
        todos.push(newList);
        saveTodo(todos);
        currentList = listName;
        displayLists(todos, currentList);
    } else {
        alert(`List "${listName}" already exists`);
    }
}

// Delete todo from todo data
function deleteTodo(listName, todoText) {
    const list = todos.find(function (list) {
        return list.listName === listName;
    });
    if (list !== undefined) {
        const todoIndex = list.listItems.findIndex(function (todo) {
            return todo.text === todoText;
        });
        if (todoIndex > -1) {
            list.listItems.splice(todoIndex, 1);
        }
    }
}

// Change todo status (done/not done)
function changeTodoStatus(listName, todoText) {
    const list = todos.find(function (list) {
        return list.listName === listName;
    });
    if (list !== undefined) {
        const todo = list.listItems.find(function (todo) {
            return todo.text === todoText;
        });
        if (todo !== undefined) {
            todo.done = !todo.done;
        }
    }
}

// Show todos based on filters, currentList
function displayTodos(todos, currentList, filters) {
    const list = todos.find(function (list) {
        return list.listName === currentList;
    });
    if (list === undefined) {
        return;
    }

    // get todos that match the search filter on todo item text
    let filteredTodos = list.listItems.filter(function (todo) {
        return todo.text
            .toLowerCase()
            .includes(filters.searchText.toLowerCase());
    });

    // one more filter on done (completed) status
    filteredTodos = filteredTodos.filter(function (todo) {
        if (filters.hideDone) {
            if (todo.done) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    });

    // how many todos left (list of incomplete todos)
    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.done;
    });

    const todosContainer = document.querySelector("#todos");
    const todosIncompleteContainer = document.querySelector("#todos-left");

    todosIncompleteContainer.innerHTML = "";
    const incompleteMessage = document.createElement("span");
    incompleteMessage.textContent = `${incompleteTodos.length} todo(s) left`;
    todosIncompleteContainer.appendChild(incompleteMessage);

    // clear the div to wipe all outdated todos
    todosContainer.innerHTML = "";

    // create new todo and add it to the page
    filteredTodos.forEach(function (todo) {
        // generate DOM elements
        const todoEl = document.createElement("div");
        const todoCheckbox = document.createElement("input");
        const todoText = document.createElement("span");
        const deleteButton = document.createElement("button");

        todoCheckbox.setAttribute("type", "checkbox");
        todoCheckbox.checked = todo.done;
        todoCheckbox.addEventListener("change", function (e) {
            changeTodoStatus(currentList, todo.text);
            saveTodo(todos);
            displayTodos(todos, currentList, filters);
        });
        todoEl.classList.add("todo-item");
        todoEl.appendChild(todoCheckbox);

        todoText.textContent = todo.text;
        todoEl.appendChild(todoText);

        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn-delete");
        todoEl.appendChild(deleteButton);
        deleteButton.addEventListener("click", function (e) {
            deleteTodo(currentList, todo.text);
            saveTodo(todos);
            displayTodos(todos, currentList, filters);
        });

        todosContainer.appendChild(todoEl);
    });
}

// Show todo lists based on filters, currentList
function displayLists(todos, currentList) {
    const todosContainer = document.querySelector(".todo-list"); // all todos panel of the selected list
    const selectedList = document.querySelector(".todo-list-header");
    const todoLists = document.querySelector(".todo-lists"); // "ul" of all todo lists

    // if no list selected (no list exists yet), hide todos panel
    if (!currentList) {
        todosContainer.classList.add("hidden");
    } else {
        todosContainer.classList.remove("hidden");
    }

    // set selected list name in todo panel header
    selectedList.textContent = currentList;
    // clear previous lists
    todoLists.innerHTML = "";

    // create each list item in "ul" and add to page
    todos.forEach(function (list) {
        const newListItem = document.createElement("li");
        newListItem.textContent = list.listName;
        // select list item on "li" click
        newListItem.addEventListener("click", function (e) {
            currentList = e.target.textContent;
            displayLists(todos, currentList);
        });
        // add css class to selected list item
        if (list.listName === currentList) {
            newListItem.classList.add("selected-list");
        }
        todoLists.appendChild(newListItem);
    });
    displayTodos(todos, currentList, filters);
}

// Add new todo text
document.querySelector("#todo-text").addEventListener("submit", function (e) {
    e.preventDefault();
    const list = todos.find(function (list) {
        return list.listName === currentList;
    });
    if (list !== undefined) {
        const todoText = e.target.elements.todoText.value.trim();
        // prevent adding to duplicates
        duplicateIndex = list.listItems.findIndex(function (todo) {
            return todo.text == todoText;
        });
        if (duplicateIndex == -1) {
            list.listItems.push({
                text: todoText,
                done: false,
            });
            saveTodo(todos);
            displayTodos(todos, currentList, filters);
            e.target.elements.todoText.value = "";
        } else {
            alert(`Item "${todoText}" already exists`);
        }
    }
});

// Add new todo list to page
document.querySelector("#new-todo-list").addEventListener("submit", function (e) {
    e.preventDefault();
    const todoListInputElement = e.target.elements.todoListText;
    const listName = todoListInputElement.value.trim();
    if (listName) {
        createNewList(listName);
        todoListInputElement.value = "";
    }
});

// Searching for todo
document.querySelector("#search-todo").addEventListener("input", function (e) {
    filters.searchText = e.target.value;
    displayTodos(todos, currentList, filters);
});

// Hide done todos from page
document.querySelector("#hide-done").addEventListener("change", function (e) {
    filters.hideDone = e.target.checked;
    displayTodos(todos, currentList, filters);
});

// Initial loading of the page
function initialize() {
    // load todos from local storage
    todos = loadTodo();
    // select first todo list
    if (todos.length > 0) {
        currentList = todos[0].listName;
    }
    displayLists(todos, currentList);
}

initialize();
