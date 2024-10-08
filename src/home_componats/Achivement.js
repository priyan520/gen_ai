import React from 'react'
import { MdManageAccounts } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Achivement = () => {
    return (
        <section className='achivment bg-black py-[54px]'>
            <div className="container_custom xl:w-[1440px] mx-auto">
                <div className="con flex justify-center xl:gap-28 lg:gap-24 md:gap-20 md:gap-y-0 xsm:gap-x-16 2xsm:gap-x-16 gap-x-12 gap-y-6 flex-wrap">
                    <div className="main_box">
                        <div className="sub_box">
                            <div className="content text-center">
                                <div className="icon ">
                                    <MdManageAccounts className="text-white text-[26px] mx-auto" />
                                </div>
                                <div className="text_title">
                                    <h3 className='text-white font-semibold mt-1 text-[18px]' >30+ million</h3>
                                </div>
                                <div className="text_sub_title">
                                    <span className='text-white text-[12px] font-medium'>
                                        Active Users
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_box">
                        <div className="sub_box">
                            <div className="content text-center">
                                <div className="icon">
                                    <FaMobileAlt className="text-white text-[26px] mx-auto" />
                                </div>
                                <div className="text_title">
                                    <h3 className='text-white font-semibold mt-1 text-[18px]' >100+ million</h3>
                                </div>
                                <div className="text_sub_title">
                                    <span className='text-white text-[12px] font-medium'>
                                        Downloads
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main_box">
                        <div className="sub_box">
                            <div className="content text-center">
                                <div className="icon">
                                    <FaDiscord className="text-white text-[26px] mx-auto" />
                                </div>
                                <div className="text_title">
                                    <h3 className='text-white font-semibold mt-1 text-[18px]' >63+ thousand</h3>
                                </div>
                                <div className="text_sub_title">
                                    <span className='text-white text-[12px] font-medium'>
                                        Discord Members
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achivement