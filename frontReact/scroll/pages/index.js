import React, { useState, useEffect } from "react";

function UnlimitedScroll() {
  const [todos, setTodos] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const request = await fetch(
          `http://localhost:3333/scroll?skip=${skip}`
        );
        const todosJson = await request.json();
        setTodos([...todos, ...todosJson]);
      } catch (e) {
        console.log(e);
      }
    };

    fetchTodos();
  }, [skip]);

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;

    if (offsetHeight + scrollTop === scrollHeight) {
      setSkip(todos.length);
    }
  };

  console.log(todos);
  return (
    <div className="todos-list" onScroll={handleScroll}>
      {todos.map((todo) => (
        <div className="todo" key={todo._id}>
          <p className="todo-title">{todo.title}</p>
          <p className="todo-description">{todo.description}</p>
        </div>
      ))}
    </div>
  );
}

export default UnlimitedScroll;
