import React from 'react';
import { GoHeartFill } from "react-icons/go";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {

  return (
   <section className='testimonial bg-[#0D0E0F] text-center'>
        <div className="container 2xl:w-[1440px] xl:!max-w-full mx-auto xl:p-[120px] lg:px-[80px] lg:py-[120px] py-[60px] xsm:px-[40px] px-[20px] ">
            <div className="con">
                <div className="headding">
                    <span className='text-white py-[6px] px-[16px] w-fit mx-auto rounded-full text-[14px] mb-[18px] flex items-center gap-2' style={{border: "2px solid #333437" , letterSpacing: "4px" , color: "#b6b6b7"}}> <span>WALL OF LOVE </span> <GoHeartFill className='text-[#ca3939]' /> </span>
                    <h2 className='text-white mx-auto md:text-[46px] xsm:w-[335px] text-[30px] font-semibold md:w-[540px] md:leading-[60px]'>
                        Join 1M+ users creating art using Imagine
                    </h2>
                </div>
                <div className="content mt-20">
                    <div className="testimonial_container">
                        <div className="part_1 flex justify-between gap-[24px] flex-wrap">
                            <div className="main_box xl:w-[32%] lg:w-[420px] w-full">
                                <div className="sub_box h-fit p-6 bg-[#121418] rounded-[20px]">
                                    <div className="user_info 2xsm:flex items-center gap-2 justify-between mb-4">
                                        <div className="data flex items-center gap-2">
                                            <img src={require("../assets/t_1.webp")} alt="" className='h-[44px] w-[44px] rounded-full' />
                                            <span className="name text-left">
                                                <h3 className='text-white'>Sarah Jones</h3>
                                                <span className='text-[#B6B6B7] text-[14px]'>Artist</span>
                                            </span>
                                        </div>
                                        <div className="star 2xsm:mt-0  flex gap-1">
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p className='text-white text-[16px] 2xsm:leading-[28px] leading-[20px] text-left'>
                                            ImagineArt is the best AI Image generator! I can brainstorm ideas and get stunning visuals in seconds. It helps me overcome creative block and explore new artistic directions.
                                        </p>
                                    </div>
                            </div>
                            </div>
                            <div className="main_box xl:w-[32%] lg:w-[420px] w-full">
                                <div className="sub_box h-fit p-6 bg-[#121418] rounded-[20px]">
                                    <div className="user_info 2xsm:flex items-center gap-2 justify-between mb-4">
                                        <div className="data flex items-center gap-2">
                                            <img src={require("../assets/t_1.webp")} alt="" className='h-[44px] w-[44px] rounded-full' />
                                            <span className="name text-left">
                                                <h3 className='text-white'>Sarah Jones</h3>
                                                <span className='text-[#B6B6B7] text-[14px]'>Artist</span>
                                            </span>
                                        </div>
                                        <div className="star 2xsm:mt-0  flex gap-1">
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p className='text-white text-[16px] 2xsm:leading-[28px] leading-[20px] text-left'>
                                            ImagineArt is the best AI Image generator! I can brainstorm ideas and get stunning visuals in seconds. It helps me overcome creative block and explore new artistic directions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="main_box xl:w-[32%] lg:w-[420px] w-full">
                                <div className="sub_box h-fit p-6 bg-[#121418] rounded-[20px]">
                                    <div className="user_info 2xsm:flex items-center gap-2 justify-between mb-4">
                                        <div className="data flex items-center gap-2">
                                            <img src={require("../assets/t_1.webp")} alt="" className='h-[44px] w-[44px] rounded-full' />
                                            <span className="name text-left">
                                                <h3 className='text-white'>Sarah Jones</h3>
                                                <span className='text-[#B6B6B7] text-[14px]'>Artist</span>
                                            </span>
                                        </div>
                                        <div className="star 2xsm:mt-0  flex gap-1">
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p className='text-white text-[16px] 2xsm:leading-[28px] leading-[20px] text-left'>
                                            ImagineArt is the best AI Image generator! I can brainstorm ideas and get stunning visuals in seconds. It helps me overcome creative block and explore new artistic directions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="main_box xl:w-[32%] lg:w-[420px] w-full">
                                <div className="sub_box h-fit p-6 bg-[#121418] rounded-[20px]">
                                    <div className="user_info 2xsm:flex items-center gap-2 justify-between mb-4">
                                        <div className="data flex items-center gap-2">
                                            <img src={require("../assets/t_1.webp")} alt="" className='h-[44px] w-[44px] rounded-full' />
                                            <span className="name text-left">
                                                <h3 className='text-white'>Sarah Jones</h3>
                                                <span className='text-[#B6B6B7] text-[14px]'>Artist</span>
                                            </span>
                                        </div>
                                        <div className="star 2xsm:mt-0  flex gap-1">
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p className='text-white text-[16px] 2xsm:leading-[28px] leading-[20px] text-left'>
                                            ImagineArt is the best AI Image generator! I can brainstorm ideas and get stunning visuals in seconds. It helps me overcome creative block and explore new artistic directions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="main_box xl:w-[32%] lg:w-[420px] w-full">
                                <div className="sub_box h-fit p-6 bg-[#121418] rounded-[20px]">
                                    <div className="user_info 2xsm:flex items-center gap-2 justify-between mb-4">
                                        <div className="data flex items-center gap-2">
                                            <img src={require("../assets/t_1.webp")} alt="" className='h-[44px] w-[44px] rounded-full' />
                                            <span className="name text-left">
                                                <h3 className='text-white'>Sarah Jones</h3>
                                                <span className='text-[#B6B6B7] text-[14px]'>Artist</span>
                                            </span>
                                        </div>
                                        <div className="star 2xsm:mt-0  flex gap-1">
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p className='text-white text-[16px] 2xsm:leading-[28px] leading-[20px] text-left'>
                                            ImagineArt is the best AI Image generator! I can brainstorm ideas and get stunning visuals in seconds. It helps me overcome creative block and explore new artistic directions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="main_box xl:w-[32%] lg:w-[420px] w-full">
                                <div className="sub_box h-fit p-6 bg-[#121418] rounded-[20px]">
                                    <div className="user_info 2xsm:flex items-center gap-2 justify-between mb-4">
                                        <div className="data flex items-center gap-2">
                                            <img src={require("../assets/t_1.webp")} alt="" className='h-[44px] w-[44px] rounded-full' />
                                            <span className="name text-left">
                                                <h3 className='text-white'>Sarah Jones</h3>
                                                <span className='text-[#B6B6B7] text-[14px]'>Artist</span>
                                            </span>
                                        </div>
                                        <div className="star 2xsm:mt-0  flex gap-1">
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                            <FaStar className='text-[#F2A000]' />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p className='text-white text-[16px] 2xsm:leading-[28px] leading-[20px] text-left'>
                                            ImagineArt is the best AI Image generator! I can brainstorm ideas and get stunning visuals in seconds. It helps me overcome creative block and explore new artistic directions.
                                        </p>
                                    </div>
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

export default Testimonial