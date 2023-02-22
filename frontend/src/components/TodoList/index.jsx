import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ListGroup, Button } from "react-bootstrap";

import Item from "./Item";

export default function TodoList() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
    await axios.get(`${process.env.API}/todos`).then(
      (response) => {
        setTodos(response.data);
      }).catch((error) => {
        console.log(error);
      });
  }

  function setDone(todo) {
    const _todos = todos.filter((_todo) => _todo.id !== todo.id);
    todo.isDone = true;

    _todos.push(todo);
    setTodos(_todos);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <h2>Listagem de ToDos</h2>
        <div>
          <Button onClick={() => navigate("/create")} variant="primary">+</Button>
        </div>
      </div>

      <ListGroup>
        {todos.map((todo) => <Item todo={todo} onDone={() => setDone(todo)} />)}
      </ListGroup>
    </div>
  )
}