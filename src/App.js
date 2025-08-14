import logo from "./logo.svg";
import "./App.css";

// export default function login() {
  
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link rel="stylesheet" href="App.css"/>
      </header>
      <bosy>

      <div>
        <form>
          <input type="text" name="codigo" placeholder="Código" />
          <input type="text" name="usuario" placeholder="Usuario"/>
          <input type="text" name="contrasenia" placeholder="Contraseña" />
          <button type="submit" disabled>Iniciar Sesión</button>
        </form>
      </div>
      </bosy>
    </div>
  );
}

export default App;
