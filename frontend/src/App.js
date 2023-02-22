import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";

// Shared
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoList/Add";
import TodoDetails from "./components/TodoList/Details";

export default function App() {
  const routes = [
    { path: "/", element: <TodoList /> },
    { path: "/add", element: <TodoAdd /> },
    { path: "/:id", element: <TodoDetails /> },
  ];

  return (
    <BrowserRouter>
      <Header />

      <Container>
        <Routes>
          {routes.map((route) => <Route path={route.path} element={route.element} />)}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
