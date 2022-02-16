import React from "react";
import Check from "./Check/Check";
import cn from "classnames";
import { BsTrash } from "react-icons/bs";
import { removeTodo, changeTodo } from "../../../store/todo.slice";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
    const dispatch = useDispatch();

    const id = props.todo.id;

    return (
        <div className="flex items-center justify-between bg-zinc-800 p-5 mb-4 rounded-2xl w-full flex-col sm:flex-row">
            <button
                className="flex items-center flex-col sm:flex-row"
                onClick={() => dispatch(changeTodo({ id }))}
            >
                <Check isCompleted={props.todo.isCompleted} />
                <span
                    className={cn("py-5", {
                        "line-through": props.todo.isCompleted,
                    })}
                >
                    {props.todo.title}
                </span>
            </button>
            <button onClick={() => dispatch(removeTodo({ id }))}>
                <BsTrash
                    size={22}
                    className="text-gray-600 hover:text-pink-400 transition-colors ease-in-out duration-300"
                />
            </button>
        </div>
    );
};

export default TodoItem;
