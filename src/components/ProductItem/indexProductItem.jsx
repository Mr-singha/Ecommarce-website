import React from "react";
import "./StyleProductItem.css";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import  Button  from "@mui/material/Button";
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareSharp } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";


const ProductItem = () => {
    return(
        <>
            <div>ProductItem</div>
            <div className="productItem rounded-md overflow-hidden shadow-md border-2 border-[rgba(0,0,0,0.1)] p-2">
                <div className="group imgWrapper w-[]100% h-[220px] overflow-hidden rounded-md relative " >
                    <img src="../../../public/mouse.jpg" alt="" className="w-[90%] m-auto" />
                    <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-[white] rounded-lg px-2 py-1 font-[500] text-[12px]">10%</span>

                    <div className="action absolute top-[-200px] right-[5px] flex items-center flex-col gap-2 w-[50px] transition-all duration-1000 group-hover:top-[10px]">
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#fff]
                        text-[#000] hover:!bg-primary hover:!text-[#fff] px-1 py-5 group">
                            <IoIosHeartEmpty className="text-[18px] !text-[#000] group-hover:text-[#fff] "/>
                        </Button>
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#fff]
                        text-[#000] hover:!bg-primary hover:!text-[#fff] px-1 py-5 group">
                            <MdOutlineShoppingCart className="text-[18px] !text-[#000] group-hover:text-[#fff] "/>
                        </Button>
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#fff]
                        text-[#000] hover:!bg-primary hover:!text-[#fff] px-1 py-5 group">
                            <IoGitCompareSharp className="text-[18px] !text-[#000] group-hover:text-[#fff] "/>
                        </Button>
                        <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#fff]
                        text-[#000] hover:!bg-primary hover:!text-[#fff] px-1 py-5 group">
                            <MdZoomOutMap className="text-[18px] !text-[#000]  group-hover:!text-[#fff] "/>
                        </Button>
                    </div>
                </div>
                <div className="info p-3  py-5" >
                    <h6 className="text-[13px]"><Link to = "/" className="links transition-all">Dell</Link></h6>
                    <h3 className="text-[13px] title mt-1 font-[500] text-[#000] mb-1"> <Link to = "/" className="links transition-all">DELL WM118 1000DPI, with USB Nano Receiver, Optical Tracking, Plug and Play, Ambidextrous Wireless Optical Mouse </Link> </h3>

                    <Rating name="size-small" defaultValue={4} size="small" readOnly />

                    <div className="flex items-center gap-4">
                        <span className="oldPrice line-through text-[gray] font-[500] text-[15px]">$58.00</span>
                        <span className="price text-primary font-[600] text-[15px] ">$58.00</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem;