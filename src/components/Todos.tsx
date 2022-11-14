import React, { FC, useContext } from 'react'
import { TodosContext } from '../store/todos-context'
import TodoItem from './TodoItem'
import classes from "./Todos.module.css"

const Todos: FC = (props) => {
    const todosCtx = useContext(TodosContext)
    return (
        <div>
            <ul className={classes.todos}>
                {todosCtx.items.map((item) => {
                    return <TodoItem key={item.id} text={item.text} onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} />
                })}
            </ul>
        </div>
    )
}

export default Todos
