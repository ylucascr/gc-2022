import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/">ToDo App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>

            <NavDropdown title="Link">
              <NavDropdown.Item href="/">Ex 1</NavDropdown.Item>
              <NavDropdown.Item href="/">Ex 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Ex 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};