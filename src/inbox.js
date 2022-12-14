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
    title.classList.add('title');
    
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
    inboxDiv.append(title);
    inboxDiv.append(taskList);
    inboxDiv.append(addTaskBtn);
    inboxDiv.append(addTaskPopup);
    
    return inboxDiv;
}

function loadInbox(btn) {
    const todos = document.querySelector('.todos');
    todos.textContent = "";
    todos.append(createInbox(btn));
}

function addTask(name) {

}

function loadTasks() {
    
}

export default loadInbox;