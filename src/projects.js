import {handleNavClick} from "./index.js";
import { loadTasks } from "./tasks.js";

class Project {
    constructor(name) {
        this.name = name;
    }
}

let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
const projects = JSON.parse(localStorage.getItem('projects') || '[]');
const projectList = document.querySelector(".projectList");

function loadProjects() {
    if (projects.length != 0) {
        projectList.classList.remove('hidden');
        projectList.textContent = "";
        projects.forEach(project => createProjectDiv(project));
    }
}

function createProjectDiv(project) {
    const projectBtn = document.createElement("btn");
    const leftDiv = document.createElement("div");
    const icon = document.createElement('i');
    const remove = document.createElement('i');

    projectBtn.classList.add('projectBtn', 'navElement');
    leftDiv.classList.add('leftProjectDiv');
    icon.classList.add('projectIcon', 'fa-solid', 'fa-diagram-project');
    remove.classList.add('projectRemove', 'fas', 'fa-times');

    projectBtn.textContent = project.name;
    projectBtn.id = project.name;

    leftDiv.prepend(icon);
    projectBtn.prepend(leftDiv);
    projectBtn.append(remove);
    projectBtn.addEventListener('click', e => handleNavClick(e.target));
    remove.addEventListener('click', () => removeProject(project));
    projectList.append(projectBtn);
}

function addProject(name) {
    const project = new Project(name);
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
    loadProjects();
}

function removeProject(project) {
    const index = projects.indexOf(project);
    projects.splice(index, 1);
    localStorage.setItem('projects', JSON.stringify(projects));
    
    // delete all tasks with project name
    tasks = tasks.filter(task => task.project !== project.name);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const currentSelection = document.querySelector('.todosTitle').textContent;
    // if currently selected project
    if (currentSelection == project.name) {
        document.querySelector('.inboxDiv').textContent = "";
    }
    else {
        const taskList = document.querySelector(".taskList");
        console.log(taskList, project.name);
        loadTasks(taskList, project.name, true);
    }


    if (projects.length != 0)
        loadProjects();
    else
        projectList.classList.add('hidden');
}

export {loadProjects, addProject};