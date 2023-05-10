import React from "react";
import "./hero.scss";
import Icon1 from "../../assets/Rectangle 151.png";
import Icon2 from "../../assets/Rectangle 153.png";
import Icon3 from "../../assets/Rectangle 154 (1).png";
import Icon4 from "../../assets/Rectangle 155.png";
import Icon5 from "../../assets/Rectangle 156 (1).png";
import Icon6 from "../../assets/Rectangle 157.png";

const Hero = () => {
  return (
    <section className="container-fluid mt-4">
      <div className="container ">
        <div className="row d-flex align-items-center">
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <p>Malonu Jus matyti!</p>
            </div>
          </div>
          <div className="hero-images col-md-6"></div>
          <div className="hero-info col-md-6 mt-4 d-flex flex-column align-items-center">
            <span className="mb-2">Geriausias pasirinkimas augintiniams</span>
            <p>
              Išvykstate atostogauti arba į komandiruotę? O galbūt išvažiuojate
              savaitgaliui arba per šventes iš miesto? Palikite mums Jūsų
              pūkuotus draugus ir mes su visa meile prižiūrėsime juos,
              lepinsime, glostysime, mylėsime juos visą tą laiką, kol gyvūnai
              gyvens pas mus. Grąžinsime Jums gražius, išmaudytus ir sušukuotus
              atgal į Jūsų mylinčias rankas.
            </p>
            <div className="mini-icons d-flex mt-3">
              <div>
                <img src={Icon1} alt="mini icon 1" />
              </div>
              <div>
                <img src={Icon2} alt="mini icon 2" />
              </div>
              <div>
                <img src={Icon3} alt="mini icon 3" />
              </div>
              <div>
                <img src={Icon4} alt="mini icon 4" />
              </div>
              <div>
                <img src={Icon5} alt="mini icon 5" />
              </div>
              <div>
                <img src={Icon6} alt="mini icon 6" />
              </div>
            </div>
            <div className="mini-description mt-3">
              <p>
                Esame augintinių priežiūros centras, įvertintas 4,8 iš 5
                žvaigždutėmis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

let modal;
let span;
window.onload = () => {
  setTimeout(() => {
    modal = document.getElementById("myModal");
    span = document.getElementsByClassName("close")[0];
    if (modal && span) {
      modal.style.display = "block";
      // When the user clicks on <span> (x), close the modal
      span.onclick = () => {
        modal.style.display = "none";
      };
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = (event) => {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
    }
  }, 3000);
};

export default Hero;
