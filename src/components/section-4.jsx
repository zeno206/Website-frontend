import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

function Section4() {
  const features = [
    {
      id: 0,
      img: "https://cdn-icons-png.flaticon.com/512/2331/2331945.png",
      title: "Seamless Transaction",
    },
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
      title: "24/7 Availability",
    },
    {
      id: 2,
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      title: "Single App for Multiple Accounts",
    },
    {
      id: 3,
      img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
      title: "Data Privacy and Security",
    },
    {
      id: 4,
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
      title: "Recurring Payments via AutoPay",
    },
  ];

  return (
    <div className="sctn-4">
      <div className="sctnp-1">
        <h2 className="scnp-h">Our Features</h2>
      </div>

      <div className="sctnp-2">
        <p className="pscn">
          With the right credit card, you can improve your financial life and
          make your future look more bright because your team care about your
          future so these features make your life look more easy
        </p>
      </div>

      <div className="slider">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
          spaceBetween={10}
          slidesPerView={3}
        >
          {features.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="feature-card">
                <img className="F-I" src={item.img} alt="" />
                <p className="F-p">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="slider-1">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          loopedSlides={features.length}
          loopAdditionalSlides={5}
          spaceBetween={10}
          slidesPerView={1}
        >
          {features.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="feature-card">
                <img className="F-I" src={item.img} alt="" />
                <p className="F-p">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Section4;
