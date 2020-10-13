import React from "react";
const Footer = () => {
  const añoActual = () => {
    const hoy = new Date();
    const año = hoy.getFullYear();
    return año;
  };
  return (
    <footer className="page-footer light-blue darken-2">
      <div className="footer-copyright">
        <div className="container">
          © {añoActual()} Dairo Cantillo
          <a className="grey-text text-lighten-4 right" href="https://github.com/DairoCantillo">
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
