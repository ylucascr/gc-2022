import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { useNavigate } from "react-router-dom";

export default function Item({ todo, onDone, onDelete }) {
  const navigate = useNavigate();
  async function fetchSetDone() {
    if (todo.isDone) {
      return;
    }

    const options = {
      url: `${process.env.REACT_APP_API}/todos/${todo.id}/done`,
      method: "POST",
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
        alignItems: "center"
      }}
      key={todo.id}>
      <h4 className="m-0">{todo.title}</h4>

      <div>
        <Button
          className="me-1"
          onClick={() => navigate(`/${todo.id}`)}>
          ⓘ
        </Button>
        <Button
          variant={todo.isDone ? "success" : "outline-success"}
          onClick={() => fetchSetDone()}>
          ✓
        </Button>
      </div>
    </ListGroupItem>
  );
}