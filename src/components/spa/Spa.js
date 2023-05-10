import React from "react";
import "./spa.scss";

const Spa = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div id="content" className="my-4">
          <div className="row justify-content-between">
            <div id="spa-description" className="col-md-5">
              <h3>Pasinaudodami mūsų SPA, jūs gausite:</h3>
              <ul>
                <li>
                  Tobulą sprendimą, kuris sumažins šuns plaukų kiekį namuose;
                </li>
                <li>
                  Maloniai kvepiantį augintinį, kurį norėsis glostyti ir
                  apkabinti;
                </li>
                <li>
                  Prasmingą laiką su augintiniu, kai nebereikės tvarkyti vonios
                  po maudynių;
                </li>
                <li>
                  Ilgiau kvepiantį ir žvilgantį kailiuką, kuris mažiau velsis.{" "}
                </li>
              </ul>
            </div>
            <div id="image-animation" className="col-md-5"></div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div id="review" className="p-4 mb-4">
            <h1>ATSILIEPIMAI</h1>
            <p>
              Ačiū už malonų ir jaukų pasitikimą. Mano šuo yra kiek bailokas,
              todėl nemažai laiko personalas skyrė susipažinimui, kas nesukelia
              tiek daug streso šuniui. Po apsilankymo atvykus pasiimti šunį, jis
              jau buvo pripratęs prie aplinkos ir laimingas. Dar labiau ačiū už
              kokybišką darbą! Šuns kailis nepriekaištingai spindėjo po
              nukailinimo, šuo buvo dailiai iščiustytas (ausys išvalytos, nagai
              nukirpti, plaukai tam tikrose vietose taip pat, kai tuo tarpu
              konkurentai visa tai atlieka už papildomą kainą), malonus kvapas
              išliko dar ilgą laiką. - <strong>NEDAS</strong>
              <br />
              <br />
              "Labai rekomenduoju. Mūsų Pupa mergaitė su charakteriu. Personalas
              puikiai pasirūpino ir prieš vizitą net mus, šeimininkus nuramino,
              kad patys nestresuotume. Pasiėmėm laimingą augintinę. Ačiū,
              grįšime!" - <strong>SANDRA</strong>
              <br />
              <br />
              Labai patiko šuniui procedūra, buvo labai patenkintas kai grįžom
              jį pasiimti. Kolektyvas labai puikus, draugiškas, puiki atmosfera.
              - <strong>DOMANTAS</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spa;
