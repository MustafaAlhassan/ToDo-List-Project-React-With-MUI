import "./App.css";
import ToDoList from "./components/TodoList";
import Header from "./components/Header";
import { Container } from "@mui/material";
import TasksProvider from "./contexts/TasksContext";

function App() {
  return (
    <>
      <TasksProvider>
        <Header />
        <Container maxWidth="lg">
          <ToDoList />
        </Container>
      </TasksProvider>
    </>
  );
}

export default App;
