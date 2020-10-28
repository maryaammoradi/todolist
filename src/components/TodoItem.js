import React, {Component} from 'react'
import {observer} from "mobx-react";
import TodoStore from "../stores/TodoStore";
import TodoModel from "../stores/TodoModel";

@observer
class TodoItem extends Component{
    onToggle = () =>{
        this.props.todo.toggle()
    }
    destroyTodo=() =>{
        this.props.todo.destroy()
    }


    render(){
        const { todo } = this.props
        return(
            <div>
                <li className={todo.completed ? "completed" : " "}>
                    <div className="view">
                        <input className="toggle" type="checkbox" value="on"  checked={todo.completed}
                               onChange={this.onToggle} />
                        <label>{todo.title}</label>
                        <button className="destroy" onClick={this.destroyTodo} />
                    </div>
                </li>
            </div>
        )
    }
    
}
 export default TodoItem