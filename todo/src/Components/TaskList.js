import React from "react";
import { connect } from "react-redux";
import { addNewTask} from "../Actions"


class TaskList extends React.Component{

state = {
 newTask: []
};

handleChanges = e => {
    this.setState({ newTask:e.target.value });
};


addTask = e => {

e.preventDefault();
console.log("tasklist new task",this.state.newTask)
this.props.addNewTask(this.state.newTask);

}


render() {
    return (
      <React.Fragment>
        <div>
{this.props.todos.map((task, index) =>(

<h4 key={index}>

{task.value}


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
{addNewTask})(TaskList);