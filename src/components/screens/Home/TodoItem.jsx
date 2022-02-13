import React from 'react';
import Check from './Check/Check';
import cn from 'classnames';
import { BsTrash } from 'react-icons/bs';

const TodoItem = (props) => {
    return (
        <div className='flex items-center justify-between rounded-xl bg-zinc-800 p-5 mb-4 rounded-2xl w-full flex-col sm:flex-row'>
            <button className='flex items-center flex-col sm:flex-row' onClick={() => props.changeTodo(props.todo.id)}>
                <Check isCompleted={props.todo.isCompleted} />
                <span className={cn('py-5', {
                    'line-through': props.todo.isCompleted
                })}>{props.todo.title}</span>
            </button>
            <button onClick={() => props.removeTodo(props.todo.id)}>
                <BsTrash size={22} className='text-gray-600 hover:text-pink-400 transition-colors ease-in-out duration-300' />
            </button>

        </div>
    )
}

export default TodoItem