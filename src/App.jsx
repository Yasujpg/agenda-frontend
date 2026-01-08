import { useState } from "react";
import AppRoutes from "./clasesReact/20-ToDoList/routes/AppRoutes";

function App() {
  const [isLogged, setIsLogged] = useState(
    !!localStorage.getItem("user")
  );

  return (
    <AppRoutes
      isLogged={isLogged}
      setIsLogged={setIsLogged}
    />
  );
}

export default App;
