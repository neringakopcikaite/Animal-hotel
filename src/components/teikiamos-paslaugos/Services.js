import React from "react";
import "./services.scss";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";
import data from "./DataServices";

const Services = () => {
  return (
    <div className="container-fluid services-container">
      <div className="container d-flex flex-column align-items-center justify-content-between services">
        <h2 id="services-title">Teikiamos paslaugos</h2>
        <div className="services-descriptions w-100">
          {data.map(
            ({
              id,
              iconId,
              icon,
              imgId,
              pId,
              classNameP,
              classNameImg,
              title,
              description,
            }) => {
              return (
                <div key={id}>
                  <div className=" mb-1 p-2 d-flex justify-content-start align-items-center gap-3">
                    <img
                      onClick={() => manageElement(iconId)}
                      id={iconId}
                      src={icon}
                      alt="toggle icon"
                    />
                    <h3>{title}</h3>
                  </div>
                  <p id={pId} className={classNameP}>
                    {description}
                  </p>
                  <div id={imgId} className={classNameImg}></div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

const manageElement = (position) => {
  const [paragraph, icon, image] = getElements(position);
  if (paragraph.classList.contains("hidden")) {
    paragraph.classList.remove("hidden");
    image.classList.remove("hidden");
    paragraph.classList.add("show");
    image.classList.add("show");
    icon.src = Minus;
  } else {
    paragraph.classList.add("hidden");
    image.classList.add("hidden");
    paragraph.classList.remove("show");
    image.classList.remove("show");
    icon.src = Plus;
  }
};

const getElements = (position) => {
  let paragraph;
  let icon;
  let image;
  switch (position) {
    case "first":
      paragraph = document.getElementById("firstP");
      icon = document.getElementById("first");
      image = document.getElementById("firstImg");
      break;
    case "second":
      paragraph = document.getElementById("secondP");
      icon = document.getElementById("second");
      image = document.getElementById("secondImg");
      break;
    case "third":
      paragraph = document.getElementById("thirdP");
      icon = document.getElementById("third");
      image = document.getElementById("thirdImg");
      break;
    default:
      break;
  }
  return [paragraph, icon, image];
};

export default Services;
