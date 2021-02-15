export const ADD_NEW_TASK = "ADD_NEW_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";


export function addNewTask(task){
console.log(task)
return {
    type: ADD_NEW_TASK,
    payload: { value: task, completed: false}

        };
}

export function toggleTask(index, task){
console.log("action index:", index, task);
return {
type:TOGGLE_TASK,
payload: { value: task, completed: true}


    };


}