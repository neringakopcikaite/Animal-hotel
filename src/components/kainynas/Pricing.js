import React from "react";
import "./pricing.scss";

const Pricing = () => {
  return (
    <div id="pricing" className="container-fluid mt-4">
      <div id="price" className="pb-md-4 mx-auto text-center">
        <h1 className="mb-5">Kainynas</h1>
        <p>
          *Taikoma 5% nuolaida ilgesnei nei 6 parų priežiūrai bei 10% nuolaida
          mėnesio ir ilgesnėms viešnagėms.
        </p>
      </div>
      <div className="container">
        <section id="pricing" className="row row-cols-1 row-cols-md-3 mb-3">
          <div className="col mb-4">
            <div className="card h-100 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-bold text-center">Viešbutis</h4>
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h1 className="card-title pricing-card-title text-center">
                  30€
                  <small className="text-body-secondary fw-light">/para</small>
                </h1>
                <h3 className="text-center">Į kainą įskaičiuota:</h3>
                <ul className="mt-3 mb-4" style={{ "text-align": "justify" }}>
                  <li>Jaukus kambarėlis jūsų šuns saugumui bei jaukumui;</li>
                  <li>Specialisto sudaryta individuali dienotvarkė;</li>
                  <li>
                    Komfortiškas laikas atvežti bei pasiimti​​ augintinį:
                    9:00-18:00val.
                  </li>
                  <li>
                    Reguliarūs pasivaikščiojimai lauke palaikyti jūsų šuns
                    fizinę bei protinę veiklą;
                  </li>
                  <li>Jūsų šuns foto reportažas, kad jaustumėtės ramūs;</li>
                  <li>Kasdieninė kailio priežiūra.</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Rezervuoti
                </button>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-bold text-center">SPA</h4>
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h1 className="card-title pricing-card-title text-center">
                  60€-100€
                </h1>
                <h3 className="text-center">Į kainą įskaičiuota:</h3>
                <ul className="mt-3 mb-4" style={{ "text-align": "justify" }}>
                  <li>Maudymas;</li>
                  <li>Džiovinimas;</li>
                  <li>Kailio kirpimas;</li>
                  <li>Šukavimas;</li>
                  <li>Higiena;</li>
                  <li>Nagų kirpimas.</li>
                </ul>
                <p className="small">
                  **Priklausomai nuo gyvūno rūšies ir dydžio kaina gali
                  svyruoti.
                </p>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Rezervuoti
                </button>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card h-100 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-bold text-center">Dresūra</h4>
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <h1 className="card-title pricing-card-title text-center">
                  40€
                  <small className="text-body-secondary fw-light">
                    /pamoka
                  </small>
                </h1>
                <h3 className="text-center">Apie dresūrą:</h3>
                <ul
                  className="list-unstyled mt-3 mb-4"
                  style={{ "text-align": "justify" }}
                >
                  <li>
                    SUTEIKSIME DRESAVIMO ĮGŪDŽIŲ, kuriuos galėsite taikyti
                    kasdien bendraudami su savo augintiniu.
                  </li>
                  <br />
                  <li>
                    Šunų dresūra vyksta uždaroje mūsų viešbučio aikštelėje, o
                    esant prastam orui – vidinėse patalpose. Be to, esant
                    reikalui dresūros pamokas galime perkelti į Jūsų namus ar į
                    bet kurią kitą vietą Vilniaus mieste.
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Rezervuoti
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
