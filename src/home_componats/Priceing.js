import React, { useRef, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Priceing = () => {

    const weekly_ref = useRef();
    const yearly_ref = useRef();
    const [stare, setstare] = useState(["16K" , "100k" , "40K" ]);
    const [price, setprice] = useState([666 , 1083 , 833]);
    const [calcle_price, setCalcle_price] = useState([952 , 1547 , 1190])
    const [time, settime] = useState("/month");
    const [time_2, settime_2] = useState("year");
    const [dis , setdis] = useState(30)

    function handleWeekly(){
        weekly_ref.current.style.backgroundColor = "#2C2D31";
        yearly_ref.current.style.backgroundColor = "transparent";
        weekly_ref.current.style.color = "white";
        yearly_ref.current.style.color = "#717174";
        weekly_ref.current.style.fontWeight = "600";
        yearly_ref.current.style.fontWeight = "400";
        setstare(["550" , "5K" , "1.6K" ]);
        setprice([580 , 1260 , 750]);
        setCalcle_price([662 , 1482 , 882])
        settime("/week");
        settime_2("week");
        setdis(15)
    }

    function handleYearly(){
        yearly_ref.current.style.backgroundColor = "#2C2D31";
        weekly_ref.current.style.backgroundColor = "transparent";
        yearly_ref.current.style.color = "white";
        weekly_ref.current.style.color = "#717174";
        yearly_ref.current.style.fontWeight = "600";
        weekly_ref.current.style.fontWeight = "400";
        setstare(["16K" , "100k" , "40K" ]);
        setprice([666 , 1083 , 833]);
        setCalcle_price([952 , 1547 , 1190])
        settime("/month");
        settime_2("year");
        setdis(30)
    }

  return (
        <section className='price py-[80px] bg-[#0E0F12] px-[6px]'>
        <div className='container_custom xl:w-[1440px] mx-auto'>
            <div className="con text-center">
                <div className="heading">
                    <span className='text-white py-[6px] px-[16px] block w-fit mx-auto rounded-full text-[14px] mb-[18px]' style={{border: "2px solid #333437" , letterSpacing: "4px" , color: "#b6b6b7"}}>OUR PRICING</span>
                    <h2 className='text-white mx-auto md:text-[46px] xsm:w-[335px] text-[30px] font-semibold md:w-[540px] md:leading-[60px]'>
                        Get Started with ImagineArt
                    </h2>
                </div>
                <div className="content mt-20">
                    <div className="tag bg-[#1E2023] flex w-fit mx-auto" style={{borderRadius: "10px"}} >
                        <div ref={weekly_ref} className="p_1 !py-[6px] !px-[20px] rounded-[10px] text-[#717174]" onClick={handleWeekly}>
                            Weekly
                        </div>
                        <div ref={yearly_ref} onClick={handleYearly} className="p_2 !py-[6px] !px-[10px] text-white font-semibold bg-[#2C2D31] rounded-[10px]" >
                            Yearly 
                            <span className='text-[#44d483] p-1 bg-[#304A3F] rounded-[.375rem] text-[12px]'>-75%</span>
                        </div>
                    </div>
                    <div className="box_container flex gap-5 mt-[54px] justify-center flex-wrap">
                        <div className="main_box">
                            <div className="sub_box_price p-6 bg-[#1E2023] xl:w-[350px] lg:w-[272px] md:w-[508px] xsm:w-[335px] 2xsm:w-[280px] rounded-[1rem] ">
                                <div className="p_1 flex justify-between mb-2">
                                    <h4 className='text-white text-[24px] font-semibold'>Standard</h4>
                                    <button className='py-1 px-2 rounded-[15px] text-white font-semibold' style={{border: "2px solid #7850FF"}}>{stare[0]}</button>
                                </div>
                                <div className="p_2">
                                    <p className='text-[#e0e0e1] text-[14px] font-medium text-left'>
                                        For newcomers exploring, with limited features and image generation.
                                    </p>
                                </div>
                                <div className="p_3 mt-4 flex items-center gap-2">
                                    <div className="price_o">
                                        <h2 className='text-white text-[36px] font-semibold'>
                                            {price[0]}
                                        </h2>
                                    </div>
                                    <div className="price_dis text-left">
                                        <del className='text-[#C8AFFF] text-[12px]'>₹{calcle_price[0]}</del>
                                        <br />
                                        <span className='text-white text-[14px]'>{time}</span>
                                    </div>                                    
                                </div>
                                <div className="p_4 mt-2 flex gap-1">
                                    <div className="pp_1 px-2 py-1 w-fit text-[12px] rounded-[5px] bg-[#31274A] text-[#C8AFFF]">
                                        Billed {time_2}
                                    </div>
                                    <div className="pp_1 px-2 py-1 w-fit text-[12px] rounded-[5px] bg-[#31274A] text-[#C8AFFF]">
                                        {dis} off
                                    </div>
                                </div>
                                <div className="p_5 mt-6">
                                    <button className='border-0 w-[100%]'>
                                        <a href="" className='text-white py-[12px] px-5 w-[100%] block dark_subscribe bg-[#2C2D31] rounded-[10px] text-[14px] font-semibold'>Subscribe</a>
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
                            <div className="sub_box special_price_box p-6 bg-[#1E2023] xl:w-[350px] lg:w-[272px] md:w-[508px] xsm:w-[335px] 2xsm:w-[280px] rounded-[1rem] " style={{border: "2px solid #714EFF" , transform: "scale(1.01)"}}>
                                <div className="p_1 flex justify-between mb-2">
                                    <h4 className='text-white text-[24px] font-semibold'>Premium</h4>
                                    <button className='py-1 px-2 rounded-[15px] text-white font-semibold' style={{border: "2px solid #7850FF"}}>{stare[1]}</button>
                                </div>
                                <div className="p_2">
                                    <p className='text-[#e0e0e1] text-[14px] font-medium text-left'>
                                        Seamless Android & Web access, expanded capabilities.
                                    </p>
                                </div>
                                <div className="p_3 mt-4 flex items-center gap-2">
                                    <div className="price_o">
                                        <h2 className='text-white text-[36px] font-semibold'>
                                            ₹{price[1]}
                                        </h2>
                                    </div>
                                    <div className="price_dis text-left">
                                        <del className='text-[#C8AFFF] text-[12px]'>₹{calcle_price[1]}</del>
                                        <br />
                                        <span className='text-white text-[14px]'>{time}</span>
                                    </div>                                    
                                </div>
                                <div className="p_4 mt-2 flex gap-1">
                                    <div className="pp_1 px-2 py-1 w-fit text-[12px] rounded-[5px] bg-[#31274A] text-[#C8AFFF]">
                                        Billed {time_2}
                                    </div>
                                    <div className="pp_1 px-2 py-1 w-fit text-[12px] rounded-[5px] bg-[#31274A] text-[#C8AFFF]">
                                        {dis} off
                                    </div>
                                </div>
                                <div className="p_5 mt-6">
                                    <button className='border-0 w-[100%]'>
                                        <a href="" className='text-white py-[12px] subscribe_main px-5 w-[100%] block bg-[#8850FF] rounded-[10px] text-[14px] font-semibold'>Subscribe</a>
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
                            <div className="sub_box_price p-6 bg-[#1E2023] xl:w-[350px] lg:w-[272px] md:w-[508px] xsm:w-[335px] 2xsm:w-[280px] rounded-[1rem] ">
                                <div className="p_1 flex justify-between mb-2">
                                    <h4 className='text-white text-[24px] font-semibold'>Professional</h4>
                                    <button className='py-1 px-2 rounded-[15px] text-white font-semibold' style={{border: "2px solid #7850FF"}}>{stare[2]}</button>
                                </div>
                                <div className="p_2">
                                    <p className='text-[#e0e0e1] text-[14px] font-medium text-left'>
                                        Serious users for personal/commercial images.
                                    </p>
                                </div>
                                <div className="p_3 mt-4 flex items-center gap-2">
                                    <div className="price_o">
                                        <h2 className='text-white text-[36px] font-semibold'>
                                            {price[2]}
                                        </h2>
                                    </div>
                                    <div className="price_dis text-left">
                                        <del className='text-[#C8AFFF] text-[12px]'>₹{calcle_price[2]}</del>
                                        <br />
                                        <span className='text-white text-[14px]'>{time}</span>
                                    </div>                                    
                                </div>
                                <div className="p_4 mt-2 flex gap-1">
                                    <div className="pp_1 px-2 py-1 w-fit text-[12px] rounded-[5px] bg-[#31274A] text-[#C8AFFF]">
                                        Billed {time_2}
                                    </div>
                                    <div className="pp_1 px-2 py-1 w-fit text-[12px] rounded-[5px] bg-[#31274A] text-[#C8AFFF]">
                                        {dis} off
                                    </div>
                                </div>
                                <div className="p_5 mt-6">
                                    <button className='border-0 w-[100%]'>
                                        <a href="" className='text-white dark_subscribe py-[12px] px-5 w-[100%] block bg-[#2C2D31] rounded-[10px] text-[14px] font-semibold'>Subscribe</a>
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