import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Footer from "./components/Footer";
import Error from "./components/Error";
import "./App.css";

function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);
  const { ciudad, pais } = busqueda;
  useEffect(() => {
    const consultarAPI = async () => {
      if (consultar) {
        const appId = "90c8e866ad2b9ea6d90d14ff5e797276";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        const respuesta = await fetch(url);
        const resultadoApi = await respuesta.json();

        setResultado(resultadoApi);
        setConsultar(false);

        // Detecta si hubo resultados correctos en la consulta

        if (resultadoApi.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultarAPI();
    // eslint-disable-next-line
  }, [consultar]);

  const componenteMostrar = () => {
    if (error) {
      return  <Error mensaje="No hay resultados" />
    } else {
      return  <Clima resultado={resultado} />
    }
  };

  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <div className="contenedor-form alto">
        <div className="container">
          <div className="row">
            <div className="col m12 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m12 s12">{componenteMostrar()}</div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
