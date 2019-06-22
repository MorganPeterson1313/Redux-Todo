export const ADD_NEW_TASK = "ADD_NEW_TASK";



export function addNewTask(task){
console.log(task)
return {
    type: ADD_NEW_TASK,
    payload: { value: task, complete: false}

};



}