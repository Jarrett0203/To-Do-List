import addProject from "./projects.js";
import {addTask, loadInbox} from "./inbox.js";

const buttons = document.querySelectorAll(".navElement");
const addProjectPopup = document.querySelector(".addProjectPopup");

buttons.forEach((button) =>
  button.addEventListener("click", (e) => handleNavClick(e.target))
);

function handleNavClick(button) {
  
  if (button.classList.contains("navElement")) {
    
    if (button.classList.contains("active")) return;
    if (button.id == "addProject") {
      
      addPrompt(button);
    }
    else {
      console.log(button.id);
      loadInbox(button.id);
      setActiveButton(button);
    }
  }
}

function setActiveButton(button) {
  buttons.forEach((b) => {
    if (b !== button) b.classList.remove("active");
  });
  button.classList.add("active");
}

function addPrompt(button) {
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
    button.style.display = "flex";
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
  addBtn.addEventListener("click", e => handleAddClick(originalAddBtn, addPromptDiv, name, button.id));
}

function handleAddClick(button, addPromptDiv, name, id) {
  if (name.value == "")
    confirm("Please enter a name");
  else {
    if (id == "addProject")
      addProject(name.value);
    else {
      const taskList = document.querySelector(".taskList");
      addTask(taskList, name.value);
    }
    button.classList.remove("hidden");
    addPromptDiv.remove();
  }
}

loadInbox("Inbox");

export default addPrompt;
