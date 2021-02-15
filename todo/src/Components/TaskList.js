import React from "react";
import { connect } from "react-redux";
import { addNewTask, toggleTask} from "../Actions"




// const styles = {
// 	color:'red',
// 	,
// 	fontWeight:'bold'
// };



class TaskList extends React.Component{

state = {
 newTask: [],
 completed: false,
 index: 1
};




handleChanges = e => {
    this.setState({ newTask:e.target.value , completed:e.target.value});
};


addTask = e => {

e.preventDefault();
console.log("tasklist new task",this.state.newTask)
this.props.addNewTask(this.state.newTask);

}

  toggleTask = (e, index, task) => {
    console.log("toggle in tasklist: ", index,task);
    this.props.toggleTask( index, task);
   }


// deleteTask = ()=>{

//     const todos = this.state.todos.filter(todo => {
//         return todo.index !== index
    
//         });
//         this.setState({
//             newTask: todos
    
//         })
    
// }


render() {
    return (
      <React.Fragment>
    <div  >
{this.props.todos.map((task, index) =>(

<h4 style={task.completed === true ? {textDecoration:' line-through'} : null} key={index}>
<div onClick={e => {this.toggleTask(e, task.index, task)}}   >
{task.value}
</div>
<button onClick={e => {this.toggleTask( e, index, task)}}>Task Completed</button>
</h4>
))}


</div>


<input
          type="text"
          value={this.state.newTask}
          placeholder="add new task"
          onChange={this.handleChanges}
/>
<button onClick={this.addTask}>Add Task</button>

    </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};


export default connect(
    mapStateToProps,
{addNewTask, toggleTask})(TaskList);