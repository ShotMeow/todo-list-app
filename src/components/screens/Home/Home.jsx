import React from 'react'
import CreateTodoField from './CreateTodoField/CreateTodoField'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const Home = () => {
    const todos = useSelector(state => state.todos.todos)

    return (
        <div className=' text-white w-4/5 mx-auto'>
            <h1 className="text-2xl font-bold text-center mb-6">Список дел на ReactJS</h1>
            {todos.map(item => (
                <TodoItem key={item.id} todo={item} />
            ))}
            <CreateTodoField />
        </div>
    )
}

export default Home