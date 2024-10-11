import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Our_ai_tool = () => {
    return (
        <section className='main_section bg-[#0A0B0E] !relative'>
            <section className='our_ai_tool xl:w-[1440px] mx-auto'>
                <div className="container_custom lg:py-[120px] lg:px-[80px] lg:pl-[120px] md:px-[40px] md:py-[80px] px-[20px] py-[60px] ">
                    <div className="con">
                        <div className="headding_part text-center">
                            <h2 className='md:text-[46px] font-bold text-[30px]' >Our AI Tools Suite</h2>
                            <p className='text-[#b6b6b7] md:w-[460px] mx-auto md:text-[18px] xsm:w-[335px] w-[280px] text-[14px] mt-[18px]  '>Revolutionize your creative workflow with ImagineArt AI Tools Suite. This suite empowers you with cutting-edge AI technology to generate stunning AI art and captivating videos.</p>
                        </div>
                        <div className="main_content xl:mt-[150px] mt-[100px] items-center 2xl:gap-28 xl:gap-[167px] gap-12 md:flex hidden">
                            <div className="main_img !sticky !top-[0px]">
                                <video src={"https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-img.webm"} className='2xl:h-[530px] 2xl:w-[530px] xl:size-[438px] lg:size-[400px] size-[300px] rounded-[25px] sticky top-[0px]' muted loop autoPlay ></video>
                            </div>
                            <div className="sub_content w-auto">
                                <h3 className='text-[36px] font-semibold mb-[18px]'>Text to Image</h3>
                                <p className=' xl:w-[476px] text-[#b6b6b7] lg:w-[390px] w-[328px] text-[14px] mb-[24px]'>Ignite your creative spark with Imagine AI Image Generator. Describe your vision with words, and watch the powerful tool translate them into captivating artwork. Catalyze a flurry of ideas and conquer creative roadblocks.</p>
                                <button className='border-0'>
                                    <a href="" className='text-white sp_button_hover py-[10px] px-[18px] bg-[#8850FF] items-center gap-2 rounded-[10px] font-semibold flex'>
                                        <span>Generate Image</span>  <MdArrowOutward className='text-[20px]'/></a>
                                </button>
                            </div>
                        </div>
                        <div className="main_content xl:mt-[150px] mt-[100px] items-center xl:gap-28 gap-12 md:hidden block">
                            <div className="main_box our_box 2xsm:w-[335px] w-[280px] p-4 mx-auto bg-[#121317] rounded-[1.5rem]">
                                <div className="sub_box">
                                    <div className="main_img">
                                        <video src={"https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-img.webm"} className='size-[300px] rounded-[25px] sticky top-[0px]' muted loop autoPlay ></video>
                                    </div>
                                    <div className="sub_content w-auto">
                                        <h3 className='md:text-[36px] md:mt-0  mt-4  text-[24px] font-semibold mb-[18px]'>Text to Image</h3>
                                        <p className=' xl:w-[476px] text-[#b6b6b7] lg:w-[390px] md:w-[328px] md:text-[14px] text-[12px] w-full mb-[24px]'>Ignite your creative spark with Imagine AI Image Generator. Describe your vision with words, and watch the powerful tool translate them into captivating artwork. Catalyze a flurry of ideas and conquer creative roadblocks.</p>
                                        <button className='border-0  w-[100%]'>
                                            <a href="" className='text-white  py-[10px] md:px-[18px] w-[100%] block bg-[#8850FF] rounded-[10px] font-semibold'>
                                                Generate Image</a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Our_ai_tool