function addTask(id, name, description) {
    tasks.push({ id, name, description });
    console.log(`Task added: ${name}`);
}


// array to store task list
let tasks = [];

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


//Function to render task

function renderTask() {
    taskList.innerHTML = ''; // Clears the list
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
         <span>${task}</span>
         <button onclick = "editTask(${index})">Edit</button>
         <button onclick = "deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask(event) {
   event.preventDefault();//prevent from submission
   const newTask = taskInput.value.trim();
   if (newTask) {
    tasks.push(newTask);
    taskInput.value = ''; //clear the input
    renderTask();
   }

}
//Function to edit task

function editTask(index){
    const updateTask = prompt('Edit your task', tasks[index]);
    if(updateTask !== null) {
        tasks[index] = updateTask.trim();
        renderTask();
    }
}

//Function to delete a task 
function deleteTask(index){
    if (confirm('Are you sure you want to delete this task?')){
        tasks.splice('index, 1');
        renderTask();
    }
}
//Event listener
taskForm.addEventListener('submit',addTask);

//Initial render
renderTask();