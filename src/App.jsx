import "./App.css";
import ToDoList from "./components/TodoList";
import Header from "./components/Header";
import { Container } from "@mui/material";
import TasksProvider from "./contexts/TasksContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <TasksProvider>
          <Header />
          <Container maxWidth="lg">
            <ToDoList />
          </Container>
        </TasksProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
