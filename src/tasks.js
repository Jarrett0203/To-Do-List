import {addPrompt} from "./index.js";
import { format, addDays, differenceInDays, parseISO } from 'date-fns'

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
    console.log(id);
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
    if (tasks.length != 0) {
        loadTasks(taskList, id, false);
    }
    
    addIcon.classList.add('fa-solid', 'fa-plus');
    addTaskBtn.textContent = 'Add Task';
    addTaskBtn.classList.add('addTaskBtn');
    addTaskBtn.addEventListener('click', (e) => addPrompt(e.target, id));

    addTaskPopup.classList.add('addTaskPopup');
    
    addTaskBtn.prepend(addIcon);
    inboxDiv.append(title, taskList, addTaskBtn, addTaskPopup);
    
    return inboxDiv;
}

function addTask(taskList, name, id) {
    const task = new Task(false, name, 'No date', id);
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks(taskList, id, false);
}

function loadTasks(taskList, id, removeProject) {
    //loop through tasks, add tasks to tasklist
    taskList.classList.remove('hidden');
    taskList.textContent = "";
    let filteredTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    console.log(filteredTasks);
    const currentDate = new Date();
    if (id === "Today") {
        filteredTasks = filteredTasks.filter(task => task.date == format(currentDate, 'yyyy-MM-dd'));
    }
    else if (id === "Week") {
        const next_week = addDays(currentDate, 7);
        filteredTasks = filteredTasks.filter(task => {
            if (task.date != 'No date') {
                const taskDate = parseISO(task.date);
                const diffNextWeek = differenceInDays(next_week, taskDate);
                return diffNextWeek >= 0 && diffNextWeek <= 7 ;
            }
            return false;
        });
    }
    else if (id != "Inbox") {
        if (removeProject)
            filteredTasks = filteredTasks.filter(task => task.project !== id);
        else
            filteredTasks = filteredTasks.filter(task => task.project === id);
    }
    filteredTasks.forEach(task => {
        createTaskDiv(taskList, task, id);    
    });
}

function createTaskDiv(taskList, task, id) {

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
    remove.addEventListener('click', () => removeTask(taskList, task, id));

    leftTaskDiv.append(checkbox, name, editName);
    rightTaskDiv.append(date, editDate, remove);
    taskDiv.append(leftTaskDiv, rightTaskDiv);
    taskList.append(taskDiv);
}

function toggleTask(checkbox, taskList, task) {
    removeTask(taskList, task);
}

function removeTask(taskList, task, id) {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    if (tasks.length != 0)
        loadTasks(taskList, id, false);
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
    let editedDate = input.value;
    if (editedDate === "")
        editedDate = "No date";
    task.date = editedDate;
    date.textContent = editedDate;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    toggleVisibility(input, date);
}

function toggleVisibility(hide, show) {
    hide.classList.add("hidden");
    show.classList.remove("hidden");
}

export {
    loadInbox,
    loadTasks,
    createInbox,
    addTask
}