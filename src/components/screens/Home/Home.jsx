import React, { useState } from 'react';
import CreateTodoField from './CreateTodoField/CreateTodoField';
import TodoItem from './TodoItem';

const data = [
    {
        id: 1,
        title: 'Привет! Я твоё первое дело. Пока что я здесь один, но надеюсь у меня скоро появятся друзья 😕',
        isCompleted: false
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(todo => todo.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id =>
        setTodos([...todos].filter(todo => todo.id !== id))


    return (
        <div className=' text-white w-4/5 mx-auto'>
            <h1 className="text-2xl font-bold text-center mb-6">Список дел на ReactJS</h1>
            {todos.map(item => (
                <TodoItem key={item.id} todo={item} changeTodo={changeTodo} removeTodo={removeTodo} />
            ))}
            <CreateTodoField setTodos={setTodos} />
        </div>
    )
}

export default Home