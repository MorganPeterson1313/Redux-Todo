
import{ADD_NEW_TASK, TOGGLE_TASK} from "../Actions";


const initialState = {
    todos: [ 
    
   { value: 'Walk the dog.',
    completed: false
   }
]
};


function reducer(state = initialState, action) {
    console.log("reducer action payload and task", state , action.payload)
    switch (action.type) {
        case TOGGLE_TASK:
            return {
                ...state,
                value: state.todos.map(( index, task) =>
                
                task.completed === false
                ? [ ...state, {completed: action.payload}]
               

                
                : null
                )


            };
           

        case ADD_NEW_TASK:
                return {
                    ...state,
                    todos: [...state.todos, action.payload]
                };
                default:
                  return state;
              }
            }
            
            export default reducer;