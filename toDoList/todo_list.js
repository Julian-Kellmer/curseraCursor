const taskInput = document.getElementById('taskInput')

const addTaskBtn =document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearCompletedBtn =document.getElementById('clearCompletedBtn');
const clearAllTasksBtn =document.getElementById('clearAllTasksBtn');

let tasks =[]

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText !== ''){
        tasks.push({text:taskText})
        taskInput.value= ''
        console.log("esta es la tarea que se agreu" ,taskText)
        displayTasks()
        console.log("estas son las tareas",tasks)
    }
}

function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        
        // Corrección: Acomodamos las comillas del id y el atributo checked
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
        <label for="task-${index}"> ${task.text}</label>`;
        
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index){
    tasks[index].completed=!tasks[index].completed
    displayTasks()
} 

function clearCompletedTasks(){
    tasks  = tasks.filter(task => !task.completed)
    displayTasks()
}
function clearAllTasks(){
    tasks =[];
    displayTasks()
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks); 
clearAllTasksBtn.addEventListener("click", clearAllTasks);