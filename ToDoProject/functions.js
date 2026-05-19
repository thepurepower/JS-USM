export let tasks=[];

export function addTask(text){

tasks.push({

id:Date.now(),
text:text,
completed:false

});

}


export function deleteTask(id){

tasks=tasks.filter(task=>
task.id!==id
);

}


export function toggleTask(id){

let task=tasks.find(task=>
task.id===id
);

if(task){

task.completed=!task.completed;

}

}