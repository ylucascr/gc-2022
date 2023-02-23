import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit() {
    const todo = { title, description };

    const options = {
      url: `${process.env.REACT_APP_API}/todos/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        ...todo
      }
    };

    await axios.request(options).then(
      (response) => {
        navigate(`/${id}`);
      }).catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    if (id) {
      axios.get(`${process.env.REACT_APP_API}/todos/${id}`).then(
        (response) => {
          setTitle(response.data.title);
          setDescription(response.data.description);
        }).catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Título</Form.Label>
        <Form.Control
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Terminar Dying Light 2" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          as="textarea"
          placeholder="Lorem ipsum dolor etc etc"
          rows={3} />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary">Atualizar</Button>
    </Form>
  );
}