import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
        <img src="/logo.png" alt="Ventures Logo" style={{ maxHeight: '50px' }} />
      </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
                   </li>
   
            <li>
              <a href="#services" className="page-scroll">
                Servislerimiz
              </a>
            </li>
            <li>
              <a href="#Team" className="page-scroll">
                Partnerlerimiz
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                İletişim
              </a>
            </li>
       
          </ul>
        </div>
      </div>
    </nav>
  );
};
