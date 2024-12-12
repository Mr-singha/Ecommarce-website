import React from "react";
import HomeSlider from "../../components/homeSlider/indexhomeSlider";
import { CatSlider } from "../../components/catSlider/index_catSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannnerSlider from "../../components/adsBnnerSlider/indexAdsBannerSlider";
import RightSecWithSlider from "../../components/rightSecwithSlider/indexRightSecWithSlider";
import ProductsSlider from "../../components/ProductsSlider/indexProductsSlider";







const Home = () => {
    return (
        <>
        <div>Home</div>
        <HomeSlider/>
        <CatSlider/>


        <section className="bg-[white] py-8">
            <div className="container">
            <div className="flex items-center justify-between">
                <div className="leftSec">
                    <h2 className="text-[20px] font-[600]">Propular Products</h2>
                    <p className="text-[14px] font-[400]">Do not miss the current offers until the end of March.</p>
                </div>



                <div className="rightSec w-[60%]"> 
                    <RightSecWithSlider/>


                </div>
            </div>


            <ProductsSlider items = {5}/>

            </div>
        </section>



        <section className="py-16  bg-[white]">
            <div className="container">
                <div className="freeShipping w-[85%] m-auto py-4 p-4 border-2 border-[#ff5252] flex items-center justify-between rounded-md ">
                   <div className="col1 flex items-center gap-4 ">
                   < FaShippingFast className="text-[50px]"/>
                   <span className="text-[25px] font-[600] uppercase">Free Shipping </span>
                   </div>
                   <div className="col2">
                    <p className="mb-0 front-[600]">Free Delivery Now On Your First Order and over $200</p>
                   </div>
                   <div className="col3">
                    <p className="font-bold text-[25px]">- Only $200*</p>
                   </div>
                </div>
            </div>
        
        
        
            <AdsBannnerSlider items={4}/>
        
        
        </section>

       


        <br /><br /><br /><br /><br /><br /><br /><br /><br />



        </>
    );
}

export default Home