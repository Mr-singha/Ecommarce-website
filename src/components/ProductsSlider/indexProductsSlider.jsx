import React from "react";
import "./StyleProductsSlider.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem/indexProductItem";

const ProductsSlider = (props) => {
    return(
        <>
            <p>ProductsSlider</p>
            <div className="productsSlider py-3">
            <Swiper
            slidesPerView={props.items}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>

            <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>


         
          </Swiper>
            </div>
        </>
    )
}

export default ProductsSlider;