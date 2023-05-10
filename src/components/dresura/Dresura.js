import React from "react";
import "./dresura.scss";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";
import data from "./DataDresura";

const Dresura = () => {
  return (
    <div id="training-dogs-div" className="container-fluid mt-4">
      <div id="name" className="container mb-4">
        <h1>Dresūra</h1>
        <div className="marker"></div>
      </div>
      <div id="main-info" className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-6">
            <div>
              <p>
                <strong>
                  SUTEIKSIME DRESAVIMO ĮGŪDŽIŲ, kuriuos galėsite taikyti kasdien
                  bendraudami su savo augintiniu
                </strong>
                <br />
                <br />
                Šunų dresavimas neretai kelia vienokių ar kitokių iššūkių
                šeimininkams. Kartais sunku rasti būdą, kaip motyvuoti šunis,
                kartais – išgauti norimą paklusnumą, ar tiesiog netenkina tai,
                kaip šuniukas elgiasi namuose bei viešose vietose.{" "}
                <strong>
                  Neverta tikėtis, kad šuo pats išmoks atlikti komandas, jei jo
                  nemokysite.
                </strong>
                <br />
                <br />
                <i>Tiukelio</i>
                <strong> dresuotoja Paulina </strong>jau ne vienerius metus
                padeda gyvūnų šeimininkams suprasti jų augintinių poreikius bei
                elgsenos priežastis.
              </p>
            </div>
            <div>
              <iframe
                src="https://www.youtube.com/embed/J_vnt3H4Bvs"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 toggled-sections">
            <div>
              <div className="section-title mb-4 p-3 d-flex justify-content-start align-items-center gap-3">
                <img
                  onClick={() => manageElement("first")}
                  id="first"
                  src={Minus}
                  alt="plus icon"
                />
                <h3>Nuo ko pradėti šuns dresūrą?</h3>
              </div>
              <p id="firstP">
                Jei auginate jauną šuniuką, verta pradėti nuo bendrojo
                paklusnumo, kurio reikia kasdien, pavyzdžiui, atėjimo komandų,
                žodinių komandų suvokimo, nusiraminimo metodų. Jauniems
                šuniukams būtina suformuoti tinkamas ribas, aiškiai parodyti, ko
                iš jų tikitės ateityje. Tik tada galima tikėtis, kad turėsite
                laimingą ir ramų augintinį, jam suaugus.
                <br />
                <br />
                Šunys mokosi visą gyvenimą, tačiau pagrindinius refleksus
                rekomenduojama suformuoti iki pusantrų metų (tai nereiškia, kad
                jų negalima mokyti vėliau). Šuniukai mokomi tiek individualiai,
                tiek grupiniuose užsiėmimuose – metodas parenkamas pagal Jūsų
                lūkesčius bei pačio šuns poreikius.
              </p>
            </div>
            <div>
              <div className=" section-title mb-4 p-3 d-flex justify-content-start align-items-center gap-3">
                <img
                  onClick={() => manageElement("second")}
                  id="second"
                  src={Minus}
                  alt="plus icon"
                />
                <h3>Kur vyksta užsiėmimai?</h3>
              </div>
              <p id="secondP">
                Šunų dresūra Vilniuje vyksta uždaroje aikštelėje, o esant
                prastam orui – vidinėse patalpose. Be to, esant reikalui
                dresūros pamokas galime perkelti į Jūsų namus ar į bet kurią
                kitą vietą Vilniaus mieste – dažniausiai tokios pamokos
                rekomenduojamos tiems šunims, kurie reaguoja į nepažįstamus
                dirgiklius, vietas. Visų pirma, pratimus išmokstame ramioje
                vietoje, o tuomet juos perkeliame ten, kur yra daugiau
                dirgiklių.
              </p>
            </div>
            <div>
              <div className="section-title mb-4 p-3 d-flex justify-content-start align-items-center gap-3">
                <img
                  onClick={() => manageElement("third")}
                  id="third"
                  src={Plus}
                  alt="plus icon"
                />
                <h3>Kokius šunis galima dresuoti?</h3>
              </div>
              <p id="thirdP" className="hidden">
                Klaidinga manyti, kad šunų dresūra reikalinga tik didelių ar
                vidutinių šunų veislių atstovams. Mažų veislių šuniukai taip pat
                turi mokėti pagrindines komandas, tinkamai reaguoti skirtingose
                situacijose bei būti kokybiškai iškrauti. Žinoma, kiekviena
                dresūros pamoka priklauso nuo norimo rezultato ir konkretaus
                šuns, tačiau bazinis paklusnumas būtinas kiekvienam – juk
                socialus ir laimingas šuo yra bet kurio šeimininko tikslas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="training-dogs album py-5 mb-4">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-md-3 g-3">
            {data.map(({ id, p, img }) => {
              return (
                <div key={id} className="col">
                  <div  className="card shadow-sm">
                    <img src={img} alt="dog" />
                    <div className="card-body">
                      <p className="card-text">{p}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const manageElement = (position) => {
  const [paragraph, icon] = getElements(position);
  if (paragraph.classList.contains("hidden")) {
    paragraph.classList.remove("hidden");
    paragraph.classList.add("show");
    icon.src = Minus;
  } else {
    paragraph.classList.add("hidden");
    paragraph.classList.remove("show");
    icon.src = Plus;
  }
};

const getElements = (position) => {
  let paragraph;
  let icon;
  switch (position) {
    case "first":
      paragraph = document.getElementById("firstP");
      icon = document.getElementById("first");
      break;
    case "second":
      paragraph = document.getElementById("secondP");
      icon = document.getElementById("second");
      break;
    case "third":
      paragraph = document.getElementById("thirdP");
      icon = document.getElementById("third");
      break;
    default:
      break;
  }
  return [paragraph, icon];
};

export default Dresura;
