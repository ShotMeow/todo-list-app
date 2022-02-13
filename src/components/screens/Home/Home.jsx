import React, { useState } from 'react';
import TodoItem from './TodoItem';

const data = [
    {
        id: 1,
        title: 'Finish the essay collaboration',
        isCompleted: false
    },
    {
        id: 2,
        title: 'Finish the essay collaboration',
        isCompleted: false
    },
    {
        id: 3,
        title: 'Send the finished assigment',
        isCompleted: false
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(todo => todo.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id =>
        setTodos([...todos].filter(todo => todo.id !== id))


    console.log(todos);

    return (
        <div className=' text-white w-4/5 mx-auto'>
            <h1 className="text-2xl font-bold text-center mb-6">To-Do List App</h1>
            {data.map(item => (
                <TodoItem key={item.id} todo={item} changeTodo={changeTodo} removeTodo={removeTodo} />
            ))}
        </div>
    )
}

export default Home