import React from 'react'
import { HiBars2 } from "react-icons/hi2";

const Header = () => {
  return (
    <section className="header bg-[#040507] lg:py-0 py-4">
        <div className="container_custom lgest_for_header:w-[1749px] xl:w-[1280px] lg:w-[864px] md:w-[720px] xsm:w-[393px] 2xsm:w-[343px] smest:w-[300px] mx-auto">
            <div className="con">
                <header className='flex justify-between items-center'>
                    <div className="logo flex lg:gap-4 gap-2 items-center">
                        <img src={require("../assets/imagine-logo.gif")} className='2xsm:h-[36px] h-[28px] w-[28px] 2xsm:w-[36px] 2xsm:rounded-[12px] rounded-[8px] ' alt="logo" />
                        <h2><a href="" className='text-white font-semibold lg:text-[24px] text-[18px]'>ImagineArt</a></h2>
                    </div>
                    <nav>
                        <ul className='capitalize hidden lg:flex'>
                            <li><a href="" className='text-white font-semibold text-[14px] px-4 py-[26.5px] block'><span className='relative blobk'>Blog</span></a></li>
                            <li><a href="" className='text-white font-semibold text-[14px] px-4 py-[26.5px] block'><span className='relative blobk'>Community</span></a></li>
                            <li><a href="" className='text-white font-semibold text-[14px] px-4 py-[26.5px] block'><span className='relative blobk'>Affiliate</span></a></li>
                            <li><a href="" className='text-white font-semibold text-[14px] px-4 py-[26.5px] block'><span className='relative blobk'>API</span></a></li>
                            <li><a href="" className='text-white font-semibold text-[14px] px-4 py-[26.5px] block'><span className='relative blobk'>Creators</span></a></li>
                        </ul>
                    </nav>
                    <div className="button flex gap-2">
                        <button className='hidden lg:block'>
                            <a href="" className='text-white py-[26.5px] px-4 block text-[14px] font-semibold'>Sign in</a>
                        </button>
                        <button className='lg:hidden block'>
                            <a href="" className='text-white block 2xsm:p-2 p-[6px] text-[25px] bg-[#3D3D41] rounded-[12px] font-semibold'><HiBars2 /></a>
                        </button>
                        <button className='border-0 hidden lg:block'>
                            <a href="" className='text-white py-[10px] px-4 block bg-[#8850FF] rounded-[10px] text-[14px] font-semibold'>Launch App</a>
                        </button>
                        <button className='border-0 lg:hidden block'>
                            <a href="" className='text-white 2xsm:py-[10px] 2xsm:px-4 py-[8px] px-3 block bg-[#8850FF] rounded-[10px] text-[14px] font-semibold'>Open in App</a>
                        </button>
                    </div>
                </header>
            </div>
        </div>
    </section>
  )
}

export default Header;