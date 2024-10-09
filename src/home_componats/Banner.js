import React from 'react'

const Banner = () => {

  return (
    <section className='benner py-[120px] bg-[#0A0B0E]'>
        <div className="container mx-auto">
            <div className="con">
                <div className="main_benner xl:w-[1200px] lg:w-[864px] md:w-[688px] 2xsm:w-[335px] w-full mx-auto bg-[#121418] xl:h-[392px] lg:h-[268px] md:h-[196px] h-[581px]  md:flex items-center justify-center relative rounded-3xl overflow-hidden">
                    <img src={require("../assets/vr-lady.webp")} className='absolute bottom-0 left-0 h-full xl:w-[372px] lg:w-[254px] m:w-[186px] md:block hidden' alt="" />
                    <div className="content text-center xl:px-0 md:px-1 md:pt-0 pt-[30px] px-2  xl:w-[455px] lg:w-[355px] md:w-[315px]">
                        <h3 className='text-white  xl:text-[46px] lg:text-[36px] md:text-[24px] font-semibold mb-4 text-[30px] md:tracking-0 tracking-[0.3px]'>Follow Us on Discord</h3>
                        <p className='text-[#B6B6B7] xl:text-[18px] lg:text-[16px] md:text-[14px] xl:w-[455px] lg:w-[355px] md:w-[315px] mx-auto mb-6'>Connect and share innovative ideas with over 63K+ creative like minded people</p>
                        <button className='border-0'>
                            <a href="" className='text-white py-[12px] px-6 block bg-[#8850FF] rounded-[10px] text-[16px] font-semibold'>Follow Us</a>
                        </button>
                    </div>
                    <img src={require("../assets/space-from-earth.webp")} className='absolute bottom-0 right-0 md:h-full xl:w-[372px] lg:w-[254px] md:w-[186px] w-full h-[365px]' alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner