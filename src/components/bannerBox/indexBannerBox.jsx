import React from "react";
import "./styleBannerBox.css";
import { Link } from "react-router-dom";

const BannerBox = (props) => {

    return(
        <>
            <div>BannerBox</div>

            <div className="box bannerBox overflow-hidden rounded-lg group">
                <Link to ='/'>
                <img src={props.img} className="w-full group-hover:scale-105 rotate-1
                 transition-all" alt="banner " />
                </Link>
               </div>
        </>
    )
}

export default BannerBox;