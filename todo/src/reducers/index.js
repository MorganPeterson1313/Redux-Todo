
import{ADD_NEW_TASK}from "../Actions";


const initialState = {
    todos: [ 
    
   { value: 'Walk the dog.',
    completed: false
   }
]
};

function reducer(state = initialState, action) {
    switch (action.type) {
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