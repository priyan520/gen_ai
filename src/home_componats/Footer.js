import React, { useEffect, useState } from 'react';
import { BsXLg } from 'react-icons/bs';
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {

  return (
    <section className='footer bg-[#040507]'>
        <div className="container w-[1440px] xl:py-[80px] xl:px-[268px] lg:px-[80px] lg:py-[60px] md:px-[40px] md:py-[50px] xsm:px-[65px] xsm:py-10 mx-auto p-10">
            <div className="con">
                <div className="p_1">
                    <div className="headding flex gap-4 items-center">
                        <img src={require("../assets/imagine-logo.gif")} className='rounded-2xl md:h-[50px] md:w-[50px] size-[40px]' alt="" />
                        <h2 className='md:text-[48px] text-[36px] text-white'>ImagineArt</h2>
                    </div>
                    <div className="content flex md:flex-nowrap flex-wrap gap-[56px] md:mt-[72px] mt-[50px] md:gap-y-0 gap-y-[40px] ">
                        <div className="flex flex-col">
                            <h4 className='text-white mb-3 text-[14px] font-semibold'>ImagineArt</h4>
                            <span className='text-[#e0e0e1] mb-2 text-[14px]'>Blogs</span>
                            <span className='text-[#e0e0e1] mb-2 text-[14px]'>Community</span>
                            <span className='text-[#e0e0e1] mb-2 text-[14px]'>Our Tools</span>
                            <span className='text-[#e0e0e1] mb-2 text-[14px]'>Mobile App</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className='text-white mb-3 text-[14px] font-semibold'>Company</h4>
                            <span className='text-[#e0e0e1] mb-2 text-[14px]'>API</span>
                            <span className='text-[#e0e0e1] mb-2 text-[14px]'>Contact Us</span>
                        </div>
                        <div className="flex flex-col">
                            <h4 className='text-white mb-3 text-[14px] font-semibold'>Legal</h4>
                            <span className='text-[#e0e0e1] mb-2 text-[14px]'>Privacy Policy</span>
                            <span className='text-[#e0e0e1] mb-2 text-[14px]'>Terms & Conditions</span>
                        </div>
                    </div>
                </div>
                <div className="p_2"></div>
            </div>
        </div>
        <div className="min_footer">
            <div className="container w-[1440px] xl:py-[80px] xl:px-[268px] lg:px-[80px] lg:py-[60px] md:px-[40px] md:py-[50px] xsm:px-[65px] xsm:py-10 xsm:pt-0 md:pt-0 p-[40px] py-0 mx-auto">
                <div className="con flex lg:flex-row flex-col lg:gap-0 gap-4 justify-between  lg:items-center">
                    <span className='text-[#b5b5b5] text-[12px]'>Endless Possibilities. Just Imagine.</span>
                    <div className="icon flex gap-4 items-center">
                        <FaDiscord className='text-[white] text-[20px]' />
                        <FaInstagram className='text-[white] text-[20px]' />
                        <FaRedditAlien className='text-[white] text-[20px]' />
                        <FaFacebookF className='text-[white] text-[20px]' />
                    </div>
                    <span className='text-[#c4c4c5] text-[12px]'>© 2024 Vyro AI. All rights reserved.</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer

// one man can little die but not his idea