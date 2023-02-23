import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export default function Details() {
  const navigate = useNavigate();
  const [todo, setTodo] = useState({});
  const { id } = useParams();

  async function fetchSetDone() {
    if (todo.isDone) {
      return;
    }

    const options = {
      url: `${process.env.REACT_APP_API}/todos/${id}/done`,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    };

    await axios.request(options).then(
      (response) => {
        navigate("/");
      }).catch((error) => {
        console.log(error);
      });
  }

  async function fetchDelete() {
    const options = {
      url: `${process.env.REACT_APP_API}/todos/${todo.id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };

    await axios.request(options).then(
      (response) => {
        navigate("/");
      }).catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (id) {
      axios.get(`${process.env.REACT_APP_API}/todos/${id}`).then(
        (response) => {
          setTodo(response.data);
        }).catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{todo?.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{todo?.createdAt}</Card.Subtitle>

        <Card.Text>
          {todo?.description}
        </Card.Text>

        <Button
          className="me-1"
          variant={"danger"}
          onClick={() => fetchDelete()}>
          🗙
        </Button>
        <Button
          className="me-1"
          onClick={() => navigate(`/${todo.id}/edit`)}>
          ✎
        </Button>
        <Button
          variant={todo.isDone ? "success" : "outline-success"}
          onClick={() => fetchSetDone()}>
          ✓
        </Button>
      </Card.Body>
    </Card>
  );
}