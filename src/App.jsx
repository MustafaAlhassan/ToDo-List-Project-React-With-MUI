import "./App.css";
import ToDoList from "./components/TodoList";
import Header from "./components/Header";
import { Container } from "@mui/material";
import TasksProvider from "./contexts/TasksContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";

function App() {
  return (
    <>
      <SnackbarProvider>
        <TasksProvider>
          <Header />
          <Container maxWidth="lg">
            <ToDoList />
          </Container>
        </TasksProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
