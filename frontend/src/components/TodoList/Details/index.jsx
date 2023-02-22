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
    const options = {
      url: `${process.env.API}/todos/${id}`,
      method: "PUT",
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
      axios.get(`${process.env.API}/todos/${id}`).then(
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

        <Button onClick={() => fetchSetDone(id)}>Done</Button>
      </Card.Body>
    </Card>
  );
}