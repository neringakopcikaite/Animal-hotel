import React from "react";
import "./specialistai.scss";
import Spec2 from "../../assets/spec-2.webp";
import Spec3 from "../../assets/spec-3.jpg";
import Spec4 from "../../assets/spec-4.jpg";

const Komanda = () => {
  return (
    <>
      <div id="info-about-team" className="container-fluid">
        <div className="mt-4 mb-2 container">
          <h1 className="font-size-h1 mb-5 title">Mūsų šaunioji komanda</h1>
        </div>
        <div className="container h-100 w-100">
          <div className="row">
            <div className="col-md-3">
              <div className="card mb-3 ">
                <div className="card-body firstImg"></div>
                <div className="card-footer">
                  <h3 className="font-size-h3">Prižiūrėtoja</h3>
                  <div className="d-flex flex-column">
                    <span>Evelina</span>
                    <a href="mailto:evelina@tiukelis.lt">evelina@tiukelis.lt</a>
                    <a href="tel:+37065555555">+37065555555</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 ">
                <div className="card-body secondImg"></div>
                <div className="card-footer">
                  <h3 className="font-size-h3">Prižiūrėtoja</h3>
                  <div className="d-flex flex-column">
                    <span>Kornelija</span>
                    <a href="mailto:kornelija@tiukelis.lt">
                      kornelija@tiukelis.lt
                    </a>
                    <a href="tel:+37067777777">+37067777777</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card mb-3 ">
                <div className="card-body thirdImg"></div>
                <div className="card-footer">
                  <h3 className="font-size-h3">SPA</h3>
                  <div className="d-flex flex-column">
                    <span>Aurelija</span>
                    <a href="mailto:aurelija@tiukelis.lt">
                      aurelija@tiukelis.lt
                    </a>
                    <a href="tel:+37068888888">+37068888888</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card mb-3 
              "
              >
                <div className="card-body forthImg"></div>
                <div className="card-footer">
                  <h3 className="font-size-h3">Dresuotoja</h3>
                  <div className="d-flex flex-column">
                    <span>Paulina</span>
                    <a href="mailto:paulina@tiukelis.lt">paulina@tiukelis.lt</a>
                    <a href="tel:+37063333333">+37063333333</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Komanda;
