import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Priceing = () => {
  return (
        <section className='price py-[80px] bg-[#0E0F12]'>
        <div className='container_custom xl:w-[1440px] mx-auto'>
            <div className="con text-center">
                <div className="heading">
                    <span className='text-white py-[6px] px-[16px] block w-fit mx-auto rounded-full text-[14px] mb-[18px]' style={{border: "2px solid #333437" , letterSpacing: "4px" , color: "#b6b6b7"}}>OUR PRICING</span>
                    <h2 className='text_sp mx-auto md:text-[46px] xsm:w-[335px] text-[30px] font-semibold md:w-[540px] md:leading-[60px]'>
                        Get Started with ImagineArt
                    </h2>
                </div>
                <div className="content mt-20">
                    <div className="tag bg-[#1E2023] flex w-fit mx-auto" style={{borderRadius: "10px 0px 0px 10px"}} >
                        <div className="p_1 !py-[6px] !px-[20px] text-[#717174]">
                            Weekly
                        </div>
                        <div className="p_2 !py-[6px] !px-[20px] text-white font-semibold bg-[#2C2D31] rounded-[10px]" >
                            Yearly
                        </div>
                    </div>
                    <div className="box_container flex gap-5 mt-[54px] justify-center flex-wrap">
                        <div className="main_box">
                            <div className="sub_box p-6 bg-[#1E2023] xl:w-[350px] lg:w-[272px] md:w-[508px] xsm:w-[335px] 2xsm:w-[280px] rounded-[1rem] ">
                                <div className="p_1 flex justify-between mb-2">
                                    <h4 className='text-white text-[24px] font-semibold'>Standard</h4>
                                    <button className='py-1 px-2 rounded-[15px] text-white font-semibold' style={{border: "2px solid #7850FF"}}>16K +</button>
                                </div>
                                <div className="p_2">
                                    <p className='text-[#e0e0e1] text-[14px] font-medium text-left'>
                                        For newcomers exploring, with limited features and image generation.
                                    </p>
                                </div>
                                <div className="p_3 mt-4 flex items-center gap-2">
                                    <div className="price_o">
                                        <h2 className='text-white text-[36px] font-semibold'>
                                            ₹666
                                        </h2>
                                    </div>
                                    <div className="price_dis text-left">
                                        <del className='text-[#C8AFFF] text-[12px]'>₹952</del>
                                        <br />
                                        <span className='text-white text-[14px]'>/month</span>
                                    </div>                                    
                                </div>
                                <div className="p_4 mt-2 flex gap-1">
                                    <div className="pp_1 px-2 py-1 w-fit text-[12px] rounded-[5px] bg-[#31274A] text-[#C8AFFF]">
                                        Billed yearly
                                    </div>
                                    <div className="pp_1 px-2 py-1 w-fit text-[12px] rounded-[5px] bg-[#31274A] text-[#C8AFFF]">
                                        30% off
                                    </div>
                                </div>
                                <div className="p_5 mt-6">
                                    <button className='border-0 w-[100%]'>
                                        <a href="" className='text-white py-[12px] px-5 w-[100%] block bg-[#2C2D31] rounded-[10px] text-[14px] font-semibold'>Subscribe</a>
                                    </button>
                                </div>
                                <div className="p_6 my-[34px] bg-[#2c2d31] h-[2px]" ></div>
                                <div className="p_7 mb-3">
                                    <h4 className='text-white  font-medium text-left'>What’s included</h4>
                                </div>
                                <div className="p_8">
                                    <span className='text-white flex items-center mb-2 gap-2 font-semibold text-[14px]'><FaArrowRightLong></FaArrowRightLong><span>Fast Processing</span></span>
                                    <span className='text-white flex items-center mb-2 gap-2 font-semibold text-[14px]'><FaArrowRightLong></FaArrowRightLong><span>All Styles & Models</span></span>
                                    <span className='text-white flex items-center mb-2 gap-2 font-semibold text-[14px]'><FaArrowRightLong></FaArrowRightLong><span>Commercial License</span></span>
                                    <span className='text-white flex items-center mb-[42px] gap-2 font-semibold text-[14px]'><FaArrowRightLong></FaArrowRightLong><span>Early Access to new features</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="main_box" >
                            <div className="sub_box p-6 bg-[#1E2023] xl:w-[350px] lg:w-[272px] md:w-[508px] xsm:w-[335px] 2xsm:w-[280px] rounded-[1rem] " style={{border: "2px solid #714EFF" , transform: "scale(1.                              01)"}}>
                                <div className="p_1 flex justify-between mb-2">
                                    <h4 className='text-white text-[24px] font-semibold'>Premium</h4>
                                    <button className='py-1 px-2 rounded-[15px] text-white font-semibold' style={{border: "2px solid #7850FF"}}>100K +</button>
                                </div>
                                <div className="p_2">
                                    <p className='text-[#e0e0e1] text-[14px] font-medium text-left'>
                                        Seamless Android & Web access, expanded capabilities.
                                    </p>
                                </div>
                                <div className="p_3 mt-4 flex items-center gap-2">
                                    <div className="price_o">
                                        <h2 className='text-white text-[36px] font-semibold'>
                                            ₹1,083
                                        </h2>
                                    </div>
                                    <div className="price_dis text-left">
                                        <del className='text-[#C8AFFF] text-[12px]'>₹1,547</del>
                                        <br />
                                        <span className='text-white text-[14px]'>/month</span>
                                    </div>                                    
                                </div>
                                <div className="p_4 mt-2 flex gap-1">
                                    <div className="pp_1 px-2 py-1 w-fit text-[12px] rounded-[5px] bg-[#31274A] text-[#C8AFFF]">
                                        Billed yearly
                                    </div>
                                    <div className="pp_1 px-2 py-1 w-fit text-[12px] rounded-[5px] bg-[#31274A] text-[#C8AFFF]">
                                        30% off
                                    </div>
                                </div>
                                <div className="p_5 mt-6">
                                    <button className='border-0 w-[100%]'>
                                        <a href="" className='text-white py-[12px] px-5 w-[100%] block bg-[#8850FF] rounded-[10px] text-[14px] font-semibold'>Subscribe</a>
                                    </button>
                                </div>
                                <div className="p_6 my-[34px] bg-[#2c2d31] h-[2px]" ></div>
                                <div className="p_7 mb-3">
                                    <h4 className='text-white  font-medium text-left'>What’s included</h4>
                                </div>
                                <div className="p_8">
                                    <span className='text-white flex items-center mb-2 gap-2 font-semibold text-[14px]'><FaArrowRightLong></FaArrowRightLong><span>Fast Processing</span></span>
                                    <span className='text-white flex items-center mb-2 gap-2 font-semibold text-[14px]'><FaArrowRightLong></FaArrowRightLong><span>All Styles & Models</span></span>
                                    <span className='text-white flex items-center mb-2 gap-2 font-semibold text-[14px]'><FaArrowRightLong></FaArrowRightLong><span>Commercial License</span></span>
                                    <span className='text-white flex items-center mb-[42px] gap-2 font-semibold text-[14px]'><FaArrowRightLong></FaArrowRightLong><span>Early Access to new features</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="main_box">
                            <div className="sub_box p-6 bg-[#1E2023] xl:w-[350px] lg:w-[272px] md:w-[508px] xsm:w-[335px] 2xsm:w-[280px] rounded-[1rem] ">
                                <div className="p_1 flex justify-between mb-2">
                                    <h4 className='text-white text-[24px] font-semibold'>Professional</h4>
                                    <button className='py-1 px-2 rounded-[15px] text-white font-semibold' style={{border: "2px solid #7850FF"}}>40K +</button>
                                </div>
                                <div className="p_2">
                                    <p className='text-[#e0e0e1] text-[14px] font-medium text-left'>
                                        Serious users for personal/commercial images.
                                    </p>
                                </div>
                                <div className="p_3 mt-4 flex items-center gap-2">
                                    <div className="price_o">
                                        <h2 className='text-white text-[36px] font-semibold'>
                                            ₹833
                                        </h2>
                                    </div>
                                    <div className="price_dis text-left">
                                        <del className='text-[#C8AFFF] text-[12px]'>₹1,190</del>
                                        <br />
                                        <span className='text-white text-[14px]'>/month</span>
                                    </div>                                    
                                </div>
                                <div className="p_4 mt-2 flex gap-1">
                                    <div className="pp_1 px-2 py-1 w-fit text-[12px] rounded-[5px] bg-[#31274A] text-[#C8AFFF]">
                                        Billed yearly
                                    </div>
                                    <div className="pp_1 px-2 py-1 w-fit text-[12px] rounded-[5px] bg-[#31274A] text-[#C8AFFF]">
                                        30% off
                                    </div>
                                </div>
                                <div className="p_5 mt-6">
                                    <button className='border-0 w-[100%]'>
                                        <a href="" className='text-white py-[12px] px-5 w-[100%] block bg-[#2C2D31] rounded-[10px] text-[14px] font-semibold'>Subscribe</a>
                                    </button>
                                </div>
                                <div className="p_6 my-[34px] bg-[#2c2d31] h-[2px]" ></div>
                                <div className="p_7 mb-3">
                                    <h4 className='text-white  font-medium text-left'>What’s included</h4>
                                </div>
                                <div className="p_8">
                                    <span className='text-white flex items-center mb-2 gap-2 font-semibold text-[14px]'><FaArrowRightLong></FaArrowRightLong><span>Fast Processing</span></span>
                                    <span className='text-white flex items-center mb-2 gap-2 font-semibold text-[14px]'><FaArrowRightLong></FaArrowRightLong><span>All Styles & Models</span></span>
                                    <span className='text-white flex items-center mb-2 gap-2 font-semibold text-[14px]'><FaArrowRightLong></FaArrowRightLong><span>Commercial License</span></span>
                                    <span className='text-white flex items-center mb-[42px] gap-2 font-semibold text-[14px]'><FaArrowRightLong></FaArrowRightLong><span>Early Access to new features</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Priceing