import logo from "./logo.png";
import "./App.css";

const Login = (codigo, usuario, contrasenia) => {
  console.log('Iniciando sesión con:', { codigo, usuario, contrasenia });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>FinTrust - Inicio de Sesión</h1>
      </header>

      <div>
        <form action={Login}>
          <input type="text" name="codigo" placeholder="Código" />
          <input type="text" name="usuario" placeholder="Usuario"/>
          <input type="text" name="contrasenia" placeholder="Contraseña" />
          <button type="submit" disabled>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default App;