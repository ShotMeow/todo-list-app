import React, { useState } from 'react'

const CreateTodoField = (props) => {
    const [title, setTitle] = useState('')

    const createTodo = title => {
        props.setTodos(prev => [{
            id: new Date(),
            title,
            isCompleted: false
        }, ...prev])
        setTitle('')
    }

    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl border-zinc-800 border-2 p-5 w-full px-5 py-2'>
            <input type="text" onChange={e => setTitle(e.target.value)} value={title} onKeyPress={e => e.key === 'Enter' && createTodo(title)} className='bg-transparent w-full border-none outline-none' placeholder='Добавить дело' />
        </div>
    )
}

export default CreateTodoField