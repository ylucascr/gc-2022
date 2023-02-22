import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { useNavigate } from "react-router-dom";

export default function Item({ todo, onDone }) {
  const navigate = useNavigate();
  async function fetchSetDone() {
    const options = {
      url: `${process.env.API}/todos/${todo.id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    };

    await axios.request(options).then(
      (response) => {
        onDone();
      }).catch((error) => {
        console.log(error);
      });
  }

  return (
    <ListGroupItem
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
      }}
      onClick={() => navigate(`/${todo.id}`)}
      key={todo.id}>
      <h4>{todo.title}</h4>
      <Button variant="success" onClick={() => fetchSetDone()}>Done</Button>
    </ListGroupItem>
  );
}