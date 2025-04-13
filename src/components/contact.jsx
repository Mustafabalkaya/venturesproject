import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gbfmanh", // <-- EmailJS Service ID
        "template_y690fbs", // <-- EmailJS Template ID
        formRef.current, // <-- Referans alınan form
        "5u8mCWdTdkmHUV9go" // <-- Public Key
      )
      .then(
        (result) => {
          console.log("Mail gönderildi:", result.text);
          alert("Mesajınız başarıyla gönderildi!");
          clearState();
        },
        (error) => {
          console.error("Hata oluştu:", error.text);
          alert("Mesaj gönderilirken bir hata oluştu.");
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>İletişime Geçin</h2>
                <p>
                  Lütfen aşağıdaki formu doldurarak bize e-posta gönderin. En
                  kısa sürede size dönüş yapacağız.
                </p>
              </div>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Adınız"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Adresiniz"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mesajınız"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>İletişim Bilgileri</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Adres
                </span>
                {props.data ? props.data.address : "Yükleniyor..."}
              </p>
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefon
                </span>{" "}
                {props.data ? props.data.phone : "Yükleniyor..."}
              </p>
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "Yükleniyor..."}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2025 Tüm Hakları Saklıdır</p>
        </div>
      </div>
    </div>
  );
};
