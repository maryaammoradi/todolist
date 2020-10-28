import React, {Component} from 'react'
import TodoItem from "./TodoItem";
import todoStore from '../stores/TodoStore'
import {observer} from "mobx-react";

@observer
class TodoItems extends Component{
    render(){
        return(
            <div>
                <section className="main">
                    <ul className="todo-list">
                        {todoStore.todosFiltered.map(todo =>
                            (<TodoItem
                                todo={todo}
                            />)
                        )}

                    </ul>
                </section>
            </div>
        )
    }
    
}
 export default TodoItems
// TodoStore.todos.map(todo=>{
//     console.log(todo)
//     return(
//         <TodoItem key={todo.id} todo={todo} />
//     )
// })
