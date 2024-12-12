import React from "react";
import "../homeSlider/homeSlider_style.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <>
      <div className="homeSlider py-4">
        <div className="container">
          <Swiper
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper sliderHome"
          >
            <SwiperSlide>
              <div className="item rounded-[20px] overflow-hidden">
                <img
                  src="../../../public/banner-1.webp"
                  alt="banner-1"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="../../../public/banner-2.webp"
                alt="banner-2"
                className="w-full"
              />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="../../../public/banner-1.webp"
                alt="banner-1"
                className="w-full"
              />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="item rounded-[20px] overflow-hidden">
              <img
                src="../../../public/banner-2.webp"
                alt="banner-2"
                className="w-full"
              />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
