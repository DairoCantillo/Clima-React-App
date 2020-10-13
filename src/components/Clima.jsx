import React from "react";
import PropTypes from "prop-types"

const Clima = ({ resultado }) => {
  const { name, main } = resultado;
  if (!name) return null;

  const aCentigrados = (temperaturaKelvin) => {
    const kelvin = 273.12;
    return parseFloat(temperaturaKelvin - kelvin, 10).toFixed(2);
  };
  return (
    <div className="card-panel white col s12">
      <div className="back-text">
        <h2>El clima de {name} es de: </h2>
        <p className="temperatura">
          {aCentigrados(main.temp)} <span>&#x2103;</span>
        </p>
        <p>Temperatura maxima: 
          {aCentigrados(main.temp_max)} <span>&#x2103;</span>
        </p>
        <p>Temperatura minima: 
          {aCentigrados(main.temp_min)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  );
};
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;
