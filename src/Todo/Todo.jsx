import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, clearAllTask } from "../Redux/Slices/TodoSlice";
import "./Todo.css";

/**
 * 
 * @returns Todo Application
 */

function Todo() {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState("");

  const handleOnchangeInput = (e) => {
    setTodo(e.target.value);  

  };
  const handleKeyDown = (e) => {
     // If user press Enter, it should add into task list
     if(e.key === 'Enter') {
       dispatch(addTask(todo));
        setTodo("");
     }
  }

  const handleAddTask = () => {
    dispatch(addTask(todo));
    setTodo("");
  };
  return (
    <div className="todo-maincontainer">
      <h1>Todo Application</h1>
      <div className="inputAndbutton-container">
        <input
          value={todo}
          onChange={handleOnchangeInput}
          onKeyDown={handleKeyDown}
          type="text"
          placeholder="Add todo"
        />
        <button onClick={handleAddTask} >Add</button>
        <button onClick={() => dispatch(clearAllTask())}>Clear All</button>
      </div>
      <div className="todolist-container">
        {todoList.map((item, index) => {
          return (
            <div key={item + index} className="todoItem-container">
              <span>
                {index + 1}. {item}
              </span>
              <button onClick={() => dispatch(deleteTask(index))}>
                Delete
              </button>              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
