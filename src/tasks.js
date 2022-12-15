import addPrompt from "./index.js";

class Task {
    constructor(done, name, date = 'No date', project = 'Inbox') {
        this.done = done;
        this.name = name;
        this.date = date;
        this.project = project;
    }
}

const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');


function loadInbox(id) {
    const todos = document.querySelector('.todos');
    todos.textContent = "";
    todos.append(createInbox(id));
}

function createInbox(id) {
    const inboxDiv = document.createElement('div');
    const title = document.createElement('p');
    const taskList = document.createElement('div');
    const addTaskBtn = document.createElement('button');
    const addIcon = document.createElement('i');
    const addTaskPopup = document.createElement('div');

    inboxDiv.classList.add('inboxDiv');
    title.textContent = id;
    title.classList.add('todosTitle');
    
    taskList.classList.add('taskList', 'hidden');
    if (tasks.length != 0)
        loadTasks(taskList);
    
    addIcon.classList.add('fa-solid', 'fa-plus');
    addTaskBtn.textContent = 'Add Task';
    addTaskBtn.classList.add('addTaskBtn');
    addTaskBtn.addEventListener('click', (e) => addPrompt(e.target));

    addTaskPopup.classList.add('addTaskPopup');
    
    addTaskBtn.prepend(addIcon);
    inboxDiv.append(title, taskList, addTaskBtn, addTaskPopup);
    
    return inboxDiv;
}

function addTask(taskList, name) {
    const task = new Task(false, name);
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks(taskList);
}

function loadTasks(taskList) {
    //loop through tasks, add tasks to tasklist
    taskList.classList.remove('hidden');
    console.log(tasks);
    taskList.textContent = "";
    tasks.forEach((task) => {
        createTaskDiv(taskList, task);
    });
}

function createTaskDiv(taskList, task) {

    const taskDiv = document.createElement('div');
    const leftTaskDiv = document.createElement('div');
    const rightTaskDiv = document.createElement('div');
    const checkbox = document.createElement('i');
    const name = document.createElement('p');
    const editName = document.createElement('input');
    const date = document.createElement('p');
    const editDate = document.createElement('input');
    const remove = document.createElement('i');

    taskDiv.classList.add('taskDiv');
    leftTaskDiv.classList.add('leftTaskDiv');
    rightTaskDiv.classList.add('rightTaskDiv');
    checkbox.classList.add('checkbox', 'far', 'fa-circle');
    name.classList.add('taskName');
    editName.classList.add('taskEditName', 'hidden');
    date.classList.add('taskDate');
    editDate.classList.add('taskEditDate', 'hidden');
    remove.classList.add('taskRemove', 'fas', 'fa-times');

    name.textContent = task.name;
    date.textContent = task.date;
    editDate.type = 'date';

    //add event listener for checkbox remove date
    name.addEventListener('click', e => toggleVisibility(e.target, editName));
    date.addEventListener('click', e => toggleVisibility(e.target, editDate));
    editName.addEventListener('keypress', e => {
        if (e.key === 'Enter') editTaskName(e.target, task, name);
    });
    editDate.addEventListener('change', e => {
        editTaskDate(e.target, task, date);
    });
    checkbox.addEventListener('click', e => toggleTask(e.target, taskList, task));
    remove.addEventListener('click', () => removeTask(taskList, task));

    leftTaskDiv.append(checkbox, name, editName);
    rightTaskDiv.append(date, editDate, remove);
    taskDiv.append(leftTaskDiv, rightTaskDiv);
    taskList.append(taskDiv);
}

function toggleTask(checkbox, taskList, task) {
    removeTask(taskList, task);
}

function removeTask(taskList, task) {
    console.log('test');
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    localStorage.setItem('tasks', tasks);
    if (tasks.length != 0)
        loadTasks(taskList);
    else
        taskList.classList.add('hidden');
}

function editTaskName(input, task, name) {
    const editedName = input.value;
    if (editedName === "")
        confirm("Please enter a name");
    else {
        task.name = editedName;
        name.textContent = editedName;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        toggleVisibility(input, name);
    }
}

function editTaskDate(input, task, date) {
    console.log(input.value);
    const editedDate = input.value;
    if (editedDate === "")
        editedDate = "No date";
    else {
        task.date = editedDate;
        date.textContent = editedDate;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        toggleVisibility(input, date);
    }
}

function toggleVisibility(hide, show) {
    hide.classList.add("hidden");
    show.classList.remove("hidden");
}

export {
    loadInbox,
    addTask
}