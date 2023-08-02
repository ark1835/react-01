import { useState } from "react";
import styles from "./todolist.module.css";

export default function _() {
  const [todoInput, setTodoInput] = useState("");
  const changeTodoInput = (ev) => setTodoInput(ev.currentTarget.value);

  const [todoList, setTodoList] = useState([]);
  const addTodo = (ev) => {
    ev.preventDefault();

    if (todoInput === "") return;
    
    setTodoList((cur) => [todoInput, ...cur]);
    setTodoInput("");
  }

  return (
    <main className={styles.main}>
      <div>
        <form onSubmit={addTodo}>
          <input value={todoInput} onChange={changeTodoInput}></input>
          <button>Submit</button>
        </form>
        <ul>
          {todoList.map((todo, i) => (
            <li key={i}>{i}. {todo}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
