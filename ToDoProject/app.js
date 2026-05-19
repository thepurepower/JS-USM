import {
tasks,
addTask,
deleteTask,
toggleTask
}

from "./functions.js";


const taskInput=document.getElementById("taskInput");

const taskList=document.getElementById("taskList");

const error=document.getElementById("error");

const searchInput=document.getElementById("searchInput");

const filter=document.getElementById("filter");

const taskForm=document.getElementById("taskForm");


taskForm.addEventListener("submit",createTask);

searchInput.addEventListener("input",showTasks);

filter.addEventListener("change",showTasks);



function createTask(event){

event.preventDefault();

let text=taskInput.value.trim();

if(text===""){

error.textContent="Введите задачу";

return;

}

error.textContent="";

addTask(text);

taskInput.value="";

showTasks();

}



function showTasks(){

taskList.innerHTML="";

let result=[...tasks];


let search=searchInput.value.toLowerCase();

result=result.filter(task=>

task.text.toLowerCase().includes(search)

);


if(filter.value==="completed"){

result=result.filter(task=>

task.completed

);

}


if(filter.value==="active"){

result=result.filter(task=>

!task.completed

);

}


result.forEach(task=>{

let li=document.createElement("li");

let text=document.createElement("span");

text.textContent=task.text;


if(task.completed){

text.style.textDecoration="line-through";

}


let doneBtn=document.createElement("button");

doneBtn.textContent="✓";


doneBtn.onclick=function(){

toggleTask(task.id);

showTasks();

};



let deleteBtn=document.createElement("button");

deleteBtn.textContent="X";


deleteBtn.onclick=function(){

deleteTask(task.id);

showTasks();

};


li.append(text);

li.append(doneBtn);

li.append(deleteBtn);

taskList.append(li);

});

}