import React from 'react'

const Our_ai_tool = () => {
  return (
    <section className='main_section bg-[#0A0B0E]'>
        <section className='our_ai_tool xl:w-[1440px] mx-auto'>
            <div className="container_custom lg:py-[120px] lg:px-[80px] lg:pl-[120px] md:px-[40px] md:py-[80px] px-[20px] py-[60px] ">
                <div className="con">
                    <div className="headding_part text-center">
                        <h2 className='md:text-[46px] font-bold text-[30px]' >Our AI Tools Suite</h2>
                        <p className='text-[#b6b6b7] md:w-[460px] mx-auto md:text-[18px] xsm:w-[335px] w-[280px] text-[14px] mt-[18px]  '>Revolutionize your creative workflow with ImagineArt AI Tools Suite. This suite empowers you with cutting-edge AI technology to generate stunning AI art and captivating videos.</p>
                    </div>
                    <div className="main_content mt-[150px] flex items-center gap-28">
                        <div className="main_img ">
                            <video src={"https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-img.webm"} className='!h-[530px] !w-[530px] rounded-[25px]' muted loop autoPlay ></video>
                        </div>
                        <div className="sub_content w-auto">
                            <h3 className='text-[36px] font-semibold mb-[18px]'>Text to Image</h3>
                            <p className='w-[476px] text-[#b6b6b7] text-[14px] mb-[24px]'>Ignite your creative spark with Imagine AI Image Generator. Describe your vision with words, and watch the powerful tool translate them into captivating artwork. Catalyze a flurry of ideas and conquer creative roadblocks.</p>
                            <button className='border-0'>
                                <a href="" className='text-white  py-[10px] px-[18px] block bg-[#8850FF] rounded-[10px] font-semibold'>
                                Generate Image</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Our_ai_tool