import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';
import  "./catSlider.css";

const CatSlider = () => {
  return (
    <>
      <div className="homeCatSlider pt-4 py-8 ">
        <div className="container ">
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to="/">
                <div className="item px-1 py-1 bg-[white] rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../../../public/ac.png"
                    alt=""
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>


            <SwiperSlide>
              <Link to="/">
                <div className="item px-1 py-1 bg-[white] rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../../../public/wash-machine.avif"
                    alt=""
                    className="w-[60px] transition-all"

                  />
                  <h3 className="text-[15px] font-[500] mt-3">Washing Machine</h3>
                </div>
              </Link>
            </SwiperSlide>


            <SwiperSlide>
              <Link to="/">
                <div className="item px-1 py-1 bg-[white] rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../../../public/ac.png"
                    alt=""
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>


            <SwiperSlide>
              <Link to="/">
                <div className="item px-1 py-1 bg-[white] rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../../../public/wash-machine.avif"
                    alt=""
                    className="w-[60px] transition-all"

                  />
                  <h3 className="text-[15px] font-[500] mt-3">Washing Machine</h3>
                </div>
              </Link>
            </SwiperSlide>


            <SwiperSlide>
              <Link to="/">
                <div className="item px-1 py-1 bg-[white] rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../../../public/ac.png"
                    alt=""
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>


            <SwiperSlide>
              <Link to="/">
                <div className="item px-1 py-1 bg-[white] rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../../../public/wash-machine.avif"
                    alt=""
                    className="w-[60px] transition-all"

                  />
                  <h3 className="text-[15px] font-[500] mt-3">Washing Machine</h3>
                </div>
              </Link>
            </SwiperSlide>


            <SwiperSlide>
              <Link to="/">
                <div className="item px-1 py-1 bg-[white] rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../../../public/ac.png"
                    alt=""
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>


            <SwiperSlide>
              <Link to="/">
                <div className="item px-1 py-1 bg-[white] rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../../../public/wash-machine.avif"
                    alt=""
                    className="w-[60px] transition-all"

                  />
                  <h3 className="text-[15px] font-[500] mt-3">Washing Machine</h3>
                </div>
              </Link>
            </SwiperSlide>


            <SwiperSlide>
              <Link to="/">
                <div className="item px-1 py-1 bg-[white] rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../../../public/ac.png"
                    alt=""
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>


            <SwiperSlide>
              <Link to="/">
                <div className="item px-1 py-1 bg-[white] rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../../../public/wash-machine.avif"
                    alt=""
                    className="w-[60px] transition-all"

                  />
                  <h3 className="text-[15px] font-[500] mt-3">Washing Machine</h3>
                </div>
              </Link>
            </SwiperSlide>


            <SwiperSlide>
              <Link to="/">
                <div className="item px-1 py-1 bg-[white] rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../../../public/ac.png"
                    alt=""
                    className="w-[60px] transition-all"
                  />
                  <h3 className="text-[15px] font-[500] mt-3">Smart Tablet</h3>
                </div>
              </Link>
            </SwiperSlide>


            <SwiperSlide>
              <Link to="/">
                <div className="item px-1 py-1 bg-[white] rounded-sm text-center flex items-center justify-center flex-col">
                  <img
                    src="../../../public/wash-machine.avif"
                    alt=""
                    className="w-[60px] transition-all"

                  />
                  <h3 className="text-[15px] font-[500] mt-3">Washing Machine</h3>
                </div>
              </Link>
            </SwiperSlide>


       

            
          </Swiper>
        </div>
      </div>
    </>
  );
};

export { CatSlider };
