import React from "react";

export const Team = ({ data }) => {
  return (
    <section id="team" className="partners-section">
      <div className="container">
        <h2 className="partners-title"> </h2>
        <div className="partners-grid">
          {data ? data.map((partner, i) => (
            <div className="partner-item" key={i}>
              <img src={partner.img} alt={partner.name} className="partner-logo" />
            </div>
          )) : "Yükleniyor..."}
        </div>
      </div>
    </section>
  );
};
