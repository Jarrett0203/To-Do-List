import addPrompt from "./index.js";

const tasks = [];

function createInbox(btn) {
    const inboxDiv = document.createElement('div');
    const title = document.createElement('p');
    const taskList = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    const addIcon = document.createElement('i');
    const addTaskPopup = document.createElement('div');

    inboxDiv.classList.add('inboxDiv');
    title.textContent = btn.textContent;
    title.classList.add('todosTitle');
    
    taskList.classList.add('taskList');
    if (tasks.length != 0) {
        taskList.style.display = 'flex';
        loadTasks();
    }
    
    addIcon.classList.add('fa-solid', 'fa-plus');
    addTaskBtn.textContent = 'Add Task';
    addTaskBtn.classList.add('taskElement');
    addTaskBtn.addEventListener('click', (e) => addPrompt(e.target));

    addTaskPopup.classList.add('addTaskPopup');
    
    addTaskBtn.prepend(addIcon);
    inboxDiv.append(title, taskList, addTaskBtn, addTaskPopup);
    
    return inboxDiv;
}

function loadInbox(btn) {
    const todos = document.querySelector('.todos');
    todos.textContent = "";
    todos.append(createInbox(btn));
}

function addTask(taskList, name) {
    const task = [name];
    tasks.push(task);
    loadTasks(taskList);
}

function loadTasks(taskList) {
    //loop through tasks, add tasks to tasklist
    taskList.style.display = 'flex';
    tasks.forEach((task) => {
        console.log(task);
        createTaskDiv(taskList, task);
    });
}

function createTaskDiv(taskList, task) {

    const taskDiv = document.createElement('div');
    const leftTaskDiv = document.createElement('div');
    const rightTaskDiv = document.createElement('div');
    const checkbox = document.createElement('i');
    const name = document.createElement('p');
    const remove = document.createElement('i');

    taskDiv.classList.add('taskDiv');
    leftTaskDiv.classList.add('leftTaskDiv');
    checkbox.classList.add('checkbox');
    name.classList.add('taskName');
    remove.classList.add('taskRemove');
    checkbox.classList.add('far', 'fa-circle');
    remove.classList.add('fas', 'fa-times');
    

    name.textContent = task[0];

    //add event listener for checkbox remove date

    leftTaskDiv.append(checkbox, name);
    rightTaskDiv.append(remove);
    taskDiv.append(leftTaskDiv, rightTaskDiv);
    taskList.append(taskDiv);

}

function removeTask(task) {
    
}

export {
    loadInbox,
    addTask
}