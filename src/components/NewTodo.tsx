import React, { FC, FormEvent, useContext, useRef } from 'react'
import { TodosContext } from '../store/todos-context'
import classes from "./NewTodo.module.css"

const NewTodo: FC = () => {
    const todosCtx = useContext(TodosContext)
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const submitHandler = (event: FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value
        if (enteredText.trim().length === 0) {
            return;
        }
        todosCtx.addTodo(enteredText)
    }
    return (
        <div>
            <form onSubmit={submitHandler} className={classes.form}>
                <label htmlFor='text'>Todo Text</label>
                <input type="text" id='text' ref={todoTextInputRef} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default NewTodo
