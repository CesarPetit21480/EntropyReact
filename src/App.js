import "./App.css";
import Rutas from "./routes/Rutas";
import GlobalGeneral from "./context/GlobalContext";

function App() {
  return (
    <GlobalGeneral>
      <Rutas />
    </GlobalGeneral>
  );
}

export default App;
