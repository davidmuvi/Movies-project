import { useState } from "react";
import { Add } from "./components/Add";
import { List } from "./components/List";
import { Seeker } from "./components/Seeker";

function App() {

  const [movies, setMovies] = useState([])

  return (
    <div className="layout">
      {/*Cabecera*/}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h1>MisPelis</h1>
      </header>

      {/*Barra de navegación*/}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/*Contenido principal*/}
      <section id="content" className="content">

        {/*aqui van las peliculas*/}
        <List movies={movies} setMovies={setMovies} />

      </section>

      {/*Barra lateral*/}
      <aside className="lateral">
        <Seeker movies={movies} setMovies={setMovies} />

        <Add setMovies={setMovies} />
      </aside>

      {/*Pie de página*/}
      <footer className="footer">
        &copy; Máster en React
      </footer>

    </div>
  );
}

export default App;
