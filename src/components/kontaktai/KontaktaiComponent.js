import React from "react";
import "./kontaktai.scss";
import { Link } from "react-router-dom";
import Fb from "../../assets/Shape (6).svg";
import LinkedIn from "../../assets/Shape (5).svg";

const KontaktaiComponent = () => {
  return (
    <div id="contacts" className="container-fluid">
      <div className="container">
        <div className="row my-3">
          <div
            id="first-column"
            className="col-md-6 d-flex justify-content-between"
          >
            <div className="row w-100 d-flex justify-content-between">
            <div className="d-flex col-md-6  justify-content-between flex-column">
              <div className="main-contacts text-center">
                <h2>Kontaktai:</h2>
                <span>PetCity, UAB</span> <br />
                <span>Ozo gatvė 18, Vilnius</span> <br />
                <a style={{'word-break': 'break-word'}} href="mailto:gyvunuviesbutis@tiukelis.lt">
                  cia@tiukelis.lt
                </a>{" "}
                <br />
                <a href="tel:+37061234567" >+37061234567</a> <br />
                <span></span>
              </div>
              <div>
                <h2>
                  Socialiniai <br />
                  tinklai:
                </h2>
                <div className="social-media-icons-div d-flex justify-content-center">
                  <div className="social-media-icons">
                    <Link to="https://www.linkedin.com/" target="_blank">
                      <img
                        style={{ "margin-bottom": "4px" }}
                        src={LinkedIn}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="social-media-icons mb-3">
                    <Link to="https://www.facebook.com/" target="_blank">
                      <img style={{ "margin-bottom": "2px" }} src={Fb} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <h2>Užklausa:</h2>
              <form>
                <div className="form-group">
                  <label for="exampleInputName">Vardas</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="name"
                    placeholder="Vardas"
                  />
                  <small id="name" className="form-text text-muted">
                    Informacija nesidalinsime.
                  </small>
                </div>
                <div className="form-group mt-2">
                  <label for="exampleInputEmail">El. paštas</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail"
                    aria-describedby="email"
                    placeholder="xxx@gmail.com"
                  />
                  <small id="email" className="form-text text-muted">
                    Informacija nesidalinsime.
                  </small>
                </div>
                <div className="form-group mt-2">
                  <label for="exampleInputTel">Telefonas</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="exampleInputTel"
                    aria-describedby="tel"
                    placeholder="+370XXX"
                  />
                  <small id="tel" className="form-text text-muted">
                    Informacija nesidalinsime.
                  </small>
                </div>
                <div className="form-group mt-2">
                  <label for="exampleFormControlTextarea">Jūsų užklausa</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea"
                    rows="3"
                    aria-describedby="textarea"
                    placeholder="Tekstas"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-center">
                <button
                  type="reset"
                  style={{ width: "180px" }}
                  className="btn btn-lg btn-outline-primary mt-3 mb-3"
                >
                  Pateikti
                </button>
                </div>
              </form>
            </div>
            </div>
          </div>
          <div id="map" className="col-md-6">
            <h2>Kaip mus rasti:</h2>
            <iframe
              style={{ width: "100%", height: "480px" }}
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=pet%20city,%20vilnius,%20ozas%20Vilnius+(map)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktaiComponent;
