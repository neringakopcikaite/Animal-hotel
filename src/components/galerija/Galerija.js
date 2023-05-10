import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./galerija.scss";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import "swiper/css/navigation";
import "swiper/css/pagination";
import First from "../../assets/karusele-1.webp";
import Second from "../../assets/karusele-2.webp";
import Third from "../../assets/karusele-3.webp";
import Forth from "../../assets/karusele-4.webp";
import Fifth from "../../assets/karusele-5.webp";
import Sixth from "../../assets/karusele-6.webp";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const Galerija = () => {
  return (
    <div className="container-fluid my-3">
      <div className="container d-flex justify-content-center">
        <Swiper
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={First} alt="carouselPhoto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Second} alt="carouselPhoto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Third} alt="carouselPhoto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Forth} alt="carouselPhoto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Fifth} alt="carouselPhoto" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Sixth} alt="carouselPhoto" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Galerija;
