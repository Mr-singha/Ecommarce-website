import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import BannerBox from "../bannerBox/indexBannerBox";

const AdsBannnerSlider = (props) =>{
return(
    <>
        <div>Ads</div>
       
        <div className="w-full py-5">
        <Swiper
            slidesPerView={props.items}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="smlBtn"
          >
            <SwiperSlide>
              <BannerBox img="../../../public/cms-banner-3.jpg" link="/"/>
            </SwiperSlide>

            <SwiperSlide>
              <BannerBox img="../../../public/cms-banner-6.jpg" link="/"/>
            </SwiperSlide>

            <SwiperSlide>
              <BannerBox img="../../../public/cms-banner-7.jpg" link="/"/>
            </SwiperSlide>

            <SwiperSlide>
              <BannerBox img="../../../public/cms-banner-3.jpg" link="/"/>
            </SwiperSlide>

            <SwiperSlide>
              <BannerBox img="../../../public/cms-banner-6.jpg" link="/"/>
            </SwiperSlide>

            <SwiperSlide>
              <BannerBox img="../../../public/cms-banner-7.jpg" link="/"/>
            </SwiperSlide>

           



            
          </Swiper>
        </div>


    </>
)
}

export default AdsBannnerSlider;