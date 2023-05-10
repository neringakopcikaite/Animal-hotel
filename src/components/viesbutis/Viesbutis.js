import React from "react";
import "./viesbutis.scss";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";

const Viesbutis = () => {
  return (
    <div className="container-fluid mt-4">
      <div id="name" className="container mb-4">
        <h1>Gyvūnų viešbutis</h1>
        <div className="marker"></div>
      </div>
      <div id="main-info" className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-md-6">
            <div>
              <p>
                <strong>
                  <i>Tiukelio </i>
                  gyvūnų viešbutis suteikia ramybę šeimininkams bei laimės
                  jausmą jų augintiniui, užimdami jį fizine bei protine veikla.
                </strong>
                <br />
                <br />
                Garantuojame, kad dėsime visas pastangas, jog Jūsų augintinis
                jaustųsi laimingas gyvūnų viešbutyje Tiukelis. Mums tai
                ypatingai svarbu, todėl rūpinamės gyvūnais vadovaudamiesi
                <strong>„Be streso" filosofija.</strong> Jauki viešbučio aplinka
                skirta įvairaus amžiaus ir dydžio naminiams gyvūnams. Prižiūrime
                ne tik šunis ar kates, bet ir vėžlius, jūros kiaulytes ir kitus
                naminius gyvūnus. <br />
                <br />​ Gyvūnų viešbučio Tiukelis patalpose yra{" "}
                <strong>
                  atskiros zonos, skirtos šunims, katėms bei kitiems smulkiems
                  gyvūnams.
                </strong>{" "}
                Visiems augintiniams yra skiriami individualūs šildomi
                kambariai, kuriuose jie gali ramiai ilsėtis ir saugiai jaustis
                nakties metu, o dienos metu - žaisti su savo žaislais ar
                mėgautis skanėstais. Taip išvengiama potencialiai nesaugaus
                kontakto su kitu gyvūnu ir su tuo susijusių rizikų. Kasdien mūsų
                socialinėse paskyrose galite matyti kaip jaučiasi Jūsų
                augintinis. ​ <br />
                <br />
                <strong>
                  Gebame pasirūpinti spec. poreikių turinčiais gyvūnais.
                </strong>
              </p>
            </div>
            <div>
              <iframe
              className="mb-3"
                src="https://www.youtube.com/embed/tFeojWG1-Bg"
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
                <h3>Šunų viešbutis</h3>
              </div>
              <p id="firstP">
                Šunų viešbutyje mažų veislių šunys yra apgyvendinami atskirai
                nuo didelių veislių. Aptvertos lauko aikštelės padengtos
                specialia danga, kad Jūsų šuniukas visuomet būtų švarus bei
                saugus. Jei lauke lyja, šalta ar karšta, tausojant Jūsų šuniuko
                sveikatą, užsiėmimai vyksta vidaus žaidimų aikštelėje. Dienos
                užsiėmimų metu augintiniai bendraus vieni su kitais tik tuo
                atveju, jei Jūs ar jis to pageidaus. <br />
                <br />
                Viešbutyje naudojame išmaniuosius žaislus, skirtingus
                nusiraminimo skatinimo metodus, aromaterapiją, feramonus.
                Personalui atidžiai prižiūrint, leidžiame šunims bendrauti
                tarpusavyje, mokome įvairių triukų – stengiamės, kad šunys būtų
                kokybiškai užimti kiekvieną dieną. Šunų viešbutyje vienu metu
                apsistoja nedidelis kiekis augintinių, todėl kiekvienam iš jų
                užtikrinamas individualus dėmesys.
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
                <h3>Kačių viešbutis</h3>
              </div>
              <p id="secondP" >
                Kačių viešbutyje yra įrengti jaukūs bei šviesūs kambarėliai bei
                įrengta atskira žaidimų erdvė, kurioje Jūsų katytė galės
                laipioti, karstytis, tyrinėti aplinką ar tiesiog žiūrėti per
                langą. Katytės mėgsta individualų dėmesį, todėl dienos užsiėmimų
                metu jos nėra suleidžiamos viena su kita. Visas dėmesys
                skiriamas tik Jūsų katei.
                <br />
                <br />
                Stengiamės, kad nakvynė viešbutyje kiekvienam augintiniui būtų
                kuo malonesnė, todėl daug dėmesio skiriame komunikavimui su
                kate. Pagrindinė personalo užduotis - rasti tinkamiausią
                bendravimo būdą net su itin jautriomis katėmis.
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
                <h3>Kitų gyvūnų viešbutis</h3>
              </div>
              <p id="thirdP" className="hidden">
                Smulkūs gyvūnai yra apgyvendinami kaip namuose. Jei Jūsų
                augintinis namuose gyvena narvelyje, tuomet atsivežkite jį
                kartu. Jei Jūsų augintinis namuose gyvena laisvai, tuomet ir pas
                mus jis gyvens atskirame kambarėlyje. Dienos užsiėmimų metu jam
                bus skirtas individualus dėmesys bei sudaroma geriausiai jo
                poreikius tenkinanti programa.
                <br />
                <br />
                Kiekvienas gyvūnas atvyksta su savo narveliu, kad būtų
                užtikrinamas kuo mažesnis streso lygis. Vietą, kurioje apsistos
                Jūsų augintinis, parenkame pagal konkretų gyvūną, atsižvelgdami
                į jo fizinę bei psichologinę sveikatą: vieniems reikia ramybės
                ir tylos, kitiems patinka stebėti veiksmą viešbutyje, treti
                renkasi artimesnį komunikavimą su kitais viešbučio svečiais ar
                personalu.
              </p>
            </div>
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

export default Viesbutis;
