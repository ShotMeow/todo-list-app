import React, { useState } from 'react'
import { addTodo } from '../../../../store/todo.slice'
import { useDispatch } from 'react-redux'

const CreateTodoField = () => {
    const [title, setTitle] = useState('')
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(addTodo(title))
        setTitle('')
    }

    return (
        <input type="text" onChange={e => setTitle(e.target.value)} value={title} onKeyPress={e => e.key === 'Enter' && addTask(title)} className='bg-transparent outline-none rounded-2xl mb-5 border-zinc-800 border-2 px-5 py-2 w-full' placeholder='Добавить дело' />
    )
}

export default CreateTodoField