import * as React from 'react';
import'../Navigation/Style_CategoryPanel.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import  Button  from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import { FaRegSquarePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaRegSquareMinus } from "react-icons/fa6";


const CategoryPanel = (props) => {
    
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
      props.setIsOpenCategoryPanel(newOpen);
    };

    const [submenuIndex, setSubmenuIndex] = React.useState(null);

    const openSubmenu = (index) => {

        if(submenuIndex === index){
            setSubmenuIndex(null);
        }
        else{
            setSubmenuIndex(index);
        }
        
    }

    const [inner_submenuIndex, setInner_submenuIndex] = React.useState(null);

    const openInner_submenu = (index) => {

        if(inner_submenuIndex === index){
            setInner_submenuIndex(null);
        }
        else{
        setInner_submenuIndex(index);
        }
    }

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className="categoryPanel" >

            <h3 className='p-3 text-[16px] font-[500] flex items-center justify-between'>
                Shop By Categories 
                <IoCloseSharp onClick={toggleDrawer(false)} className='cursor-pointer font-[20px]' />
            </h3>

            <div className='scroll'>
                <ul className='w-full'>
                    <li  className='list-none flex items-center relative flex-col'>
                        <Link to='/' className='w-full'>
                        <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                            Brand 1 category
                        </Button>
                        </Link>

                        {
                            submenuIndex === 0 ? 
                            <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer ' onClick={
                                () => openSubmenu(0)
                            }/>
                            :
                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer ' onClick={
                                () => openSubmenu(0)
                            }/>
                        }
                        

                       

                        {

                            submenuIndex === 0 && 
                            
                            <ul className='submenu  w-full pl-3 '>
                            <li className='list-none relative'>
                                <Link className='w-full'>
                                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                                        Brand 1.1 category
                                    </Button>
                                    </Link>

                                        {
                                            inner_submenuIndex === 0 ? 
                                            <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer ' onClick={
                                                () => openInner_submenu(0)
                                            }/>
                                            :
                                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer ' onClick={
                                                () => openInner_submenu(0)
                                            }/>
                                        }
                                    


                                        {
                                            inner_submenuIndex === 0 && 
                                            

                                            <ul className='inner_submenu  w-full pl-3 '>
                                            <li className='list-none relative mb-1'>
                                                <Link className=" w-full links !text-left !justify-start !px-3 transition text-[14px]">
                                                    Brand 1.1.1
                                                </Link>
                                               
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link className=" w-full links !text-left !justify-start !px-3 transition text-[14px]">
                                                    Brand 1.1.2
                                                </Link>
                                               
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link className=" w-full links !text-left !justify-start !px-3 transition text-[14px]">
                                                    Brand 1.1.3
                                                </Link>
                                               
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link className=" w-full links !text-left !justify-start !px-3 transition text-[14px]">
                                                    Brand 1.1.4
                                                </Link>
                                               
                                            </li>
                                        </ul>


                                        }





                                     




                            </li>
                        </ul>


                        }



                       


                    </li>


                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/' className='w-full'>
                        <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                            Brand 2 category
                        </Button>
                        </Link>

                        {
                            submenuIndex === 1 ? 
                            <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer ' onClick={
                                () => openSubmenu(1)
                            }/>
                            :
                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer ' onClick={
                                () => openSubmenu(1)
                            }/>
                        }
                        

                       

                        {

                            submenuIndex === 0 && 
                            
                            <ul className='submenu  w-full pl-3 '>
                            <li className='list-none relative '>
                                <Link className='w-full'>
                                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                                        Brand 1.1 category
                                    </Button>
                                    </Link>

                                        {
                                            inner_submenuIndex === 1 ? 
                                            <FaRegSquareMinus className='absolute top-[10px] right-[15px] cursor-pointer ' onClick={
                                                () => openInner_submenu(1)
                                            }/>
                                            :
                                            <FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer ' onClick={
                                                () => openInner_submenu(1)
                                            }/>
                                        }
                                    


                                        {
                                            inner_submenuIndex === 1 && 
                                            

                                            <ul className='inner_submenu  w-full pl-3 '>
                                            <li className='list-none relative mb-1'>
                                                <Link className=" w-full links !text-left !justify-start !px-3 transition text-[14px]">
                                                    Brand 1.1.1
                                                </Link>
                                               
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link className=" w-full links !text-left !justify-start !px-3 transition text-[14px]">
                                                    Brand 1.1.2
                                                </Link>
                                               
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link className=" w-full links !text-left !justify-start !px-3 transition text-[14px]">
                                                    Brand 1.1.3
                                                </Link>
                                               
                                            </li>
                                            <li className='list-none relative mb-1'>
                                                <Link className=" w-full links !text-left !justify-start !px-3 transition text-[14px]">
                                                    Brand 1.1.4
                                                </Link>
                                               
                                            </li>
                                        </ul>


                                        }





                                     




                            </li>
                        </ul>


                        }



                       


                    </li>

                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/' className='w-full'>
                        <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                            Brand 3 category
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/' className='w-full'>
                        <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                            Brand 4 category
                        </Button>
                        </Link>
                    </li>

                    <li className='list-none flex items-center relative flex-col'>
                        <Link to='/' className='w-full'>
                        <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                            Brand 5 category
                        </Button>
                        </Link>
                    </li>
                </ul>
            </div>


        </Box>
      );

    return(
        <>
        <Drawer open={props.isOpenCategoryPanel} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
        </>
    )
}

export default CategoryPanel;