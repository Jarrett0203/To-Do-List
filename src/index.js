import {addProject, loadProjects } from "./projects.js";
import {addTask, loadInbox} from "./tasks.js";

const buttons = document.querySelectorAll(".navElement");
const addProjectPopup = document.querySelector(".addProjectPopup");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => handleNavClick(e.target))
);

function handleNavClick(button) {
  if (button.classList.contains("navElement")) {
    if (button.classList.contains("active")) return;
    if (button.id == "addProject") {
      addPrompt(button, button.id);
    }
    else {
      loadInbox(button.id);
      setActiveButton(button);
    }
  }
}

function setActiveButton(button) {
  const buttons = document.querySelectorAll(".navElement");
  buttons.forEach((b) => {
    if (b !== button) b.classList.remove("active");
  });
  button.classList.add("active");
}

function addPrompt(button, id) {
  const addPromptDiv = document.createElement("div");
  const name = document.createElement("input");
  const addBtn = document.createElement("button");
  const cancelBtn = document.createElement("button");

  name.classList.add("name");
  name.setAttribute("type", "text");
  addBtn.classList.add("add");
  cancelBtn.classList.add("cancel");
  button.classList.add("hidden");
  
  addBtn.textContent = "Add";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => {
    button.classList.remove("hidden");
    addPromptDiv.remove();
  });

  addPromptDiv.append(name, addBtn, cancelBtn);

  let originalAddBtn;
  if (button.id == "addProject") {
    addPromptDiv.classList.add("addProjectDiv");
    addProjectPopup.append(addPromptDiv);
    originalAddBtn = document.getElementById("addProject");
  }  
  else {
    addPromptDiv.classList.add("addTaskDiv");
    const addTaskPopup = document.querySelector(".addTaskPopup");
    addTaskPopup.append(addPromptDiv);
    originalAddBtn = document.querySelector(".addTaskBtn");
  }
  
  addBtn.addEventListener("click", () => handleAddClick(originalAddBtn, addPromptDiv, name, id));
}

function handleAddClick(button, addPromptDiv, name, id) {
  if (name.value == "")
    confirm("Please enter a name");
  else {
    if (id == "addProject") {
      addProject(name.value);
    }
    else {
      const taskList = document.querySelector(".taskList");
      addTask(taskList, name.value, id);
    }
    button.classList.remove("hidden");
    addPromptDiv.remove();
  }
}

loadInbox("Inbox");
loadProjects();

export {addPrompt, handleNavClick};
