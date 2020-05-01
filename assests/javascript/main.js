console.log("I am connected!");

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// const filterOption = document.querySelector('.filter-todo');



//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
// filterOption.addEventListener('click', filterToDo);


//Function 

function addToDo(event) {
    // Prevent form from submitting
    event.preventDefault();
    console.log("Hello!");

    //Todo DIV
    const toDoDiv = document.createElement("div");
    //Initializing a class name as todo into the created div
    toDoDiv.classList.add("todo");

    //Create LI
    const newToDo = document.createElement("li");
    //collecting input value from <input tag>
    newToDo.innerText = todoInput.value;
    //Initializing a class name as todo-item into the created li
    newToDo.classList.add('todo-item');
    //appending newToDo <li tag> into toDoDiv <div tag>
    toDoDiv.appendChild(newToDo);

    //ADD todo to localstorage
    // saveLocalTodos(todoInput.value);

    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    toDoDiv.appendChild(completedButton);
    

    //TRASH MARK BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    toDoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(toDoDiv);

    //clear input value
    todoInput.value = "";

}


function deleteCheck(e) {
    const item = e.target;
    // console.log(item);
    //DELETE
    // item.remove();
    if(item.classList[0] === "trash-btn") {
        // console.log("Working!");
        const todo = item.parentElement;
        // console.log(todo);
        //animation of Deletion
        todo.classList.add('fall');
        
        removeLocalTodos(todo);

        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
        
    } 
    // else {
    //     console.log("Not Working!");
    // }

    //CHECK MARK
    if(item.classList[0] === "complete-btn") {
        // console.log("Working!");
        const todo = item.parentElement;
        // console.log(todo);
        todo.classList.toggle("completed");
    } 
}


// function filterToDo(e) {
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo) {
//         switch(e.target.value) {
//             case "all" : 
//                 todo.style.display = "flex";
//                 break;
//             case "completed" :
//                 if(todo.classList.contains("completed")) {
//                     todo.style.display = "flex";
//                 } else {
//                     todo.style.display = "none";
//                 }
//                 break;
//             case "uncompleted" :
//                 if(!todo.classList.contains("completed")) {
//                     todo.style.display = "flex";
//                 } else {
//                     todo.style.display = "none";
//                 }
//                 break;
//         }
//     });
// }

// function saveLocalTodos(todo) {
//     //CHECK 
//     let todos;
//     if(localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     todos.push(todo);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

function getTodos() {
    // console.log("getTodos is working!");
    //CHECK 
    let todos;
    // if(localStorage.getItem('todos') === null) {
    //     todos = [];
    // } else {
    //     todos = JSON.parse(localStorage.getItem('todos'));
    // }
    todos.forEach(function(todo) {
        //Todo DIV
        const toDoDiv = document.createElement("div");
        //Initializing a class name as todo into the created div
        toDoDiv.classList.add("todo");

        //Create LI
        const newToDo = document.createElement("li");
        //collecting input value from <input tag>
        newToDo.innerText = todo;
        //Initializing a class name as todo-item into the created li
        newToDo.classList.add('todo-item');
        //appending newToDo <li tag> into toDoDiv <div tag>
        toDoDiv.appendChild(newToDo);


        //CHECK MARK BUTTON
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        toDoDiv.appendChild(completedButton);
        

        //TRASH MARK BUTTON
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        toDoDiv.appendChild(trashButton);

        //append to list
        todoList.appendChild(toDoDiv);
    });
}

// function removeLocalTodos(todo) {
//     //CHECK 
//     let todos;
//     if(localStorage.getItem('todos') === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem('todos'));
//     }
//     const totoIndex = todo.children[0].innerText;
//     todos.splice(todos.indexOf(todoIndex), 1);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }