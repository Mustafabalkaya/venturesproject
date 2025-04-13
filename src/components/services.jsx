export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
        </div>

        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-lg-4 col-md-4 col-sm-6 d-flex">
              <div className="service-desc w-100">
                <i className={d.icon}></i>
                <h3>{d.name}</h3>
                <p dangerouslySetInnerHTML={{ __html: d.text }}></p>
              </div>
            </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
