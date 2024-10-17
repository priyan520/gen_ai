import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Slider2 = () => {
  return (
    <section className="slider_section bg-[#0A0B0E] py-[120px]">
      <div className="container_custom">
        <div className="con">
          <div className="slider_container">
            <div className="silder_div">
              <div className="slider_1">
                <OwlCarousel
                  className="owl-theme"
                  loop={true}
                  responsive={{
                    0: {
                      items: 2,
                    },
                    375: {
                      items: 2.4,
                    },
                    425: {
                      items: 2.7,
                    },
                    768: {
                      items: 3.7,
                    },
                    1024: {
                      items: 4.9,
                    },
                    1440: {
                      items: 5.5,
                    },
                    1880: {
                    items: 7.2,
                    },
                    1920: {
                      items: 7.3,
                    },
                    2560: {
                      items: 9.5
                    },
                  }}
                  center={true}
                  autoplay
                  autoplayTimeout={1000}
                  dots={false}
                  margin={10}
                >
                  <div className="item">
                    <img
                      src={require("../assets/s2_1.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_2.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_3.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_4.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_5.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_6.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_7.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_8.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_9.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_10.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_11.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_12.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_13.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_14.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_15.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_16.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_17.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_18.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_19.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_20.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s2_21.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                </OwlCarousel>
              </div>
              <div className="slider_2 mt-8">
                <OwlCarousel
                  className="owl-theme"
                  loop={true}
                  responsive={{
                    0: {
                      items: 2,
                    },
                    375: {
                      items: 2.4,
                    },
                    425: {
                      items: 2.7,
                    },
                    768: {
                      items: 3.7,
                    },
                    1024: {
                      items: 4.9,
                    },
                    1440: {
                      items: 6,
                    },
                    1880: {
                    items: 7.2,
                    },
                    1920: {
                      items: 7.3,
                    },
                    2560: {
                      items: 9.5,
                    },
                  }}
                  autoplay
                  items={5}
                  center={true}
                  autoplayTimeout={1000}
                  dots={false}
                  margin={10}
                >
                  <div className="item">
                    <img
                      src={require("../assets/s3_1.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_2.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_3.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_4.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_5.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_6.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_7.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_8.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_9.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_10.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_11.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_12.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_13.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_14.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_15.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_16.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_17.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_18.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_19.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>
                  <div className="item">
                    <img
                      src={require("../assets/s3_20.webp")}
                      className="rounded-xl xl:!w-[250px] xl:!h-[250px] object-cover md:!w-[200px] md:!h-[200px] !w-[150px] h-[150px]"
                      alt=""
                    />
                  </div>

                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider2;

import React from 'react'
import { MdArrowOutward } from "react-icons/md";


// export default Our_ai_tool



import React, { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md"; // Correct icon import



const contentData = [
    {
        title: "Text to Image",
        description: "Ignite your creative spark with Imagine AI Image Generator. Describe your vision with words, and watch the powerful tool translate them into captivating artwork.",
        button:"generate Image",
    },
    {
        title: "Real-Time Text Generation",
        description: "Experience the power of AI with real-time text generation. Transform your ideas into textual content effortlessly.",
        button:"Time Realtimne Generation",
    },
    {
        
        title: "Text to Video",
        description: "Convert your text descriptions into dynamic videos, adding a new dimension to your storytelling.",
        button:"Create Video In HD",
    },
    {
        title: "Real-Time Canvas",
        description: "Utilize our real-time canvas tool to create and edit your artwork dynamically and interactively.",
        button:"Try Ideate",
    },
    {
        
        title: "Enhance Your Art",
        description: "Boost your creative output with AI-enhanced features that improve your artwork with a click.",
        button:"Upsacle Your Images",
    },
    {
        
        title: "Character Consistency",
        description: "Mainta in consistency in your character designs with our intelligent AI tools that adapt to your style.",
        button:"Try Character Consistency",
    },
];

const Our_ai_tool = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [currentContentIndex, setCurrentContentIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(false);
    var a = 0 ;
    
    const lastScrollTop = useRef(0); 

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
            // Change content index based on scroll position
            const index = Math.floor(position / 1500); // Adjust the divisor for how quickly to switch content
            if (index < contentData.length && index !== currentContentIndex) {
                setFadeIn(false); // Start fade-out
                setTimeout(() => {
                    setCurrentContentIndex(index); // Change content
                    setFadeIn(true); // Start fade-in
                }, 500); // Wait for fade-out animation to finish
            }
        };

        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [currentContentIndex]);

    const { videoSrc, title, description, button } = contentData[currentContentIndex];

    return (
        <section className='main_section bg-[#0A0B0E] h-[7000px] overflow-hidden' id="main_section">
            <section className='our_ai_tool xl:w-[1440px] mx-auto'>
                <div className="container_custom lg:py-[120px] lg:px-[80px] lg:pl-[120px] md:px-[40px] md:py-[80px] px-[20px] py-[60px] ">
                    <div className="con">
                        <div className="headding_part text-center">
                            <h2 className='md:text-[46px] font-bold text-[30px]'>Our AI Tools Suite</h2>
                            <p className='text-[#b6b6b7] md:w-[460px] mx-auto md:text-[18px] xsm:w-[335px] w-[280px] text-[14px] mt-[18px]'>
                                Revolutionize your creative workflow with ImagineArt AI Tools Suite. This suite empowers you with cutting-edge AI technology to generate stunning AI art and captivating videos.
                            </p>
                        </div>

                        {/* Desktop and large screens */}
                        <div className= " top-[150vh] h-[7000px] absolute">
                            <div className="main_content xl:mt-[150px] mt-[100px] items-center 2xl:gap-28 xl:gap-[200px] gap-12 md:flex hidden !sticky top-[100px]">
                                <div className="main_img "> {/* Sticky positioning applied here */}
                                    <video
                                        src={"https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-img.webm"}
                                        className='2xl:h-[530px] 2xl:w-[530px] xl:h-[438px] xl:w-[438px] lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-[25px] '
                                        muted loop autoPlay>
                                    </video>
                                </div>
                                <div className="sub_content relative h-[224px] w-[476px] overflow-hidden" id="output">
                                    <div className="absolute h-fit w-fit top-0 left-0">
                                        <h3 className='text-[36px] font-semibold mb-[18px]'>{title}</h3>
                                        <p className='xl:w-[476px] text-[#b6b6b7] lg:w-[390px] w-[328px] text-[14px] mb-[24px]'>
                                            {description}
                                        </p>
                                        <button className='border-0'>
                                            <a href="#" className='text-white sp_button_hover py-[10px] px-[18px] bg-[#8850FF] items-center gap-2 rounded-[10px] font-semibold flex'>
                                                <span>{button}</span>

                                                <MdArrowOutward className='text-[20px]' />
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[500px]"></div>
                            <div className="main_content xl:mt-[150px] mt-[500px] items-center 2xl:gap-28 xl:gap-[200px] gap-12 md:flex hidden !sticky top-[110px]">
                                <div className="main_img "> {/* Sticky positioning applied here */}
                                    <video
                                        src={"https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/realtime-text.webm"}
                                        className='2xl:h-[530px] 2xl:w-[530px] xl:h-[438px] xl:w-[438px] lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-[25px] '
                                        muted loop autoPlay>
                                    </video>
                                </div>
                                
                            </div>
                            <div className="h-[500px]"></div>
                            <div className="main_content xl:mt-[150px] mt-[500px] items-center 2xl:gap-28 xl:gap-[200px] gap-12 md:flex hidden !sticky top-[120px]">
                                <div className="main_img "> {/* Sticky positioning applied here */}
                                    <video
                                        src={"https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-video.webm"}
                                        className='2xl:h-[530px] 2xl:w-[530px] xl:h-[438px] xl:w-[438px] lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-[25px] '
                                        muted loop autoPlay>
                                    </video>
                                </div>
                                
                            </div>
                            <div className="h-[500px]"></div>
                            <div className="main_content xl:mt-[150px] mt-[500px] items-center 2xl:gap-28 xl:gap-[200px] gap-12 md:flex hidden !sticky top-[130px]">
                                <div className="main_img "> {/* Sticky positioning applied here */}
                                    <video
                                        src={"https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/realtime-canvas.webm"}
                                        className='2xl:h-[530px] 2xl:w-[530px] xl:h-[438px] xl:w-[438px] lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-[25px] '
                                        muted loop autoPlay>
                                    </video>
                                </div>
                                
                            </div>
                            <div className="h-[500px]"></div>
                            <div className="main_content xl:mt-[150px] mt-[500px] items-center 2xl:gap-28 xl:gap-[200px] gap-12 md:flex hidden !sticky top-[140px]">
                                <div className="main_img "> {/* Sticky positioning applied here */}
                                    <video
                                        src={"https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/enhance.webm"}
                                        className='2xl:h-[530px] 2xl:w-[530px] xl:h-[438px] xl:w-[438px] lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-[25px] '
                                        muted loop autoPlay>
                                    </video>
                                </div>
                                
                            </div>
                            <div className="h-[500px]"></div>
                            <div className="main_content xl:mt-[150px] mt-[500px] items-center 2xl:gap-28 xl:gap-[200px] gap-12 md:flex hidden !sticky top-[150px]">
                                <div className="main_img "> {/* Sticky positioning applied here */}
                                    <video
                                        src={"https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/character-consistency.webm"}
                                        className='2xl:h-[530px] 2xl:w-[530px] xl:h-[438px] xl:w-[438px] lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-[25px] '
                                        muted loop autoPlay>
                                    </video>
                                </div>
                                <div className="sub_content relative h-[224px] w-[476px] overflow-hidden">
                                   
                                </div>
                            </div>
                        </div>



                        {/* Mobile and small screens */}
                        <div className="main_content xl:mt-[150px] mt-[100px] items-center xl:gap-28 gap-12 md:hidden block">
                            <div className="main_box our_box 2xsm:w-[335px] w-[280px] p-4 mx-auto bg-[#121317] rounded-[1.5rem]">
                                <div className="sub_box">
                                    <div className="main_img">
                                        <video
                                            src={"https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-img.webm"}
                                            className='size-[300px] rounded-[25px]'
                                            muted loop autoPlay>
                                        </video>
                                    </div>
                                    <div className="sub_content w-auto">
                                        <h3 className='md:text-[36px] md:mt-0 mt-4 text-[24px] font-semibold mb-[18px]'>Text to Image</h3>
                                        <p className='xl:w-[476px] text-[#b6b6b7] lg:w-[390px] md:w-[328px] md:text-[14px] text-[12px] w-full mb-[24px]'>
                                            Ignite your creative spark with Imagine AI Image Generator. Describe your vision with words, and watch the powerful tool translate them into captivating artwork. Catalyze a flurry of ideas and conquer creative roadblocks.
                                        </p>
                                        <button className='border-0 w-[100%]'>
                                            <a href="" className='text-white py-[10px] md:px-[18px] w-[100%] block bg-[#8850FF] rounded-[10px] font-semibold'>
                                                Generate Image
                                            </a>
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

export default Our_ai_tool;

import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { BsStars } from "react-icons/bs";
import Test from "./Test";

var iSeter = false;
const Leandding = () => {
  const [input_data, setinput_data] = useState([
    "A magical Disney-inspired castle",
    "An enchanted forest bathed in the soft, golden light",
    "realistic portrait of an elderly sailor",
    "action-packed, anime-style battle",
    "a cyberpunk dystopia with a sprawling, rain-soaked cityscape",
    "a breathtaking cosmic journey through a surreal dreamscape",
  ]);
  const [inp_val, setinp_val] = useState("");


  var i = 0,
    j = 0,
    k = 0,
    pause = false,
    animation,
    dataRemover,
    dataAdder,
    timeOutForAnimation;
  
  useEffect(() => {

    function handleTextControler(){
      console.log("pasue")
      animation.value = input_data[i];
      clearInterval(dataRemover);
      clearInterval(dataAdder);
      clearTimeout(timeOutForAnimation)

      console.log(iSeter , "important")

      if(iSeter){
        // alert()
        i = 0;
        iSeter = false;
      }

      j = 0;
      k = 0;
    }

    animation = document.getElementById("animation");
    document.body.addEventListener('click' , () => {animation.value  == "" ? handleTextAnimation() : console.log("hello")});
    animation.addEventListener('click' , handleTextControler);

    async function handleTextAnimation(event){

      console.log(animation.value)
      if(event?.target.id == "animation"){
        return;
      }
      else{
        iSeter = true;
        dataAdder = setInterval(() => {
          if (j >= input_data[i].length) {
            if (!pause) {
              pause = true;
              delFunTimeOut()
            }
          }
          if (!pause) {
            animation.value += input_data[i][j];
            j++;
            if (j >= input_data[i].length) {
              pause = false;
              k = 0;
            }
          }
        }, 40);
      } 
    }

    async function delFunTimeOut(){
      timeOutForAnimation = await setTimeout(() => {
      delFun();
       return;
      }, 1000);
    }

    async function delFun(){
      dataRemover = await setInterval(() => {
        if (k < input_data[i].length) {
          k++;
        } else if (pause) {
          pause = false;
          j = 0;
          i++;
          animation.value = "";
          if (i >= input_data.length) {
            i = 0;
          }
          return;
        }
        if (pause) {
          animation.value = animation.value.substr(
            0,
            animation.value.length - 1
          );
        }
      }, 50);
    }

    handleTextAnimation();
    
    
  }, []);

  

  return (
    <div className="home relative mt-[75px]">
      <Test className="absolute top-0 left-0 h-full w-full"></Test>
      <section className="slider_section pt-8 pb-0">
        <div className="container_custom">
          <div className="con">
            <div className="slider_container">
              <div className="silder_div">
                <div className="carousel xl:w-[5830px] md:w-[4780px] w-[3730px]">
                  <div className="group w-[3000px] gap-[20px]">
                    <div className="item">
                      <img
                        src={require("../assets/1_1.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_2.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_3.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_4.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_5.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_6.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_7.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_8.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_9.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_10.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_11.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_12.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_13.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_14.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_15.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_16.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_17.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_18.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_19.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_20.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_21.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="group w-[3000px] gap-[20px]">
                    <div className="item">
                      <img
                        src={require("../assets/1_1.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_2.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_3.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_4.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_5.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_6.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_7.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_8.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_9.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_10.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_11.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_12.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_13.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_14.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_15.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_16.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_17.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_18.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_19.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_20.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/1_21.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel xl:w-[5830px] md:w-[4780px] w-[3730px] mt-2">
                  <div className="group group_2 w-[3000px] gap-[20px]">
                    <div className="item">
                      <img
                        src={require("../assets/2_1.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_2.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_3.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_4.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_5.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_6.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_7.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_8.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_9.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_10.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_11.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_12.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_13.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_14.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_15.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_16.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_17.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_18.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_19.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_20.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_21.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="group group_2 w-[3000px] gap-[20px]">
                    <div className="item">
                      <img
                        src={require("../assets/2_1.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_2.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_3.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_4.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_5.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_6.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_7.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_8.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_9.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_10.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_11.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_12.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_13.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_14.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_15.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_16.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_17.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_18.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_19.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_20.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/2_21.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel xl:w-[5830px] md:w-[4780px] w-[3730px] mt-2">
                  <div className="group w-[3000px] gap-[20px]">
                    <div className="item">
                      <img
                        src={require("../assets/3_1.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_2.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_3.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_4.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_5.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_6.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_7.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_8.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_9.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_10.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_11.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_12.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_13.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_14.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_15.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_16.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_17.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_18.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_19.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_20.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_7.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="group w-[3000px] gap-[20px]">
                    <div className="item">
                      <img
                        src={require("../assets/3_1.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_2.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_3.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_4.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_5.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_6.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_7.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_8.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_9.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_10.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_11.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_12.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_13.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_14.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_15.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_16.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_17.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_18.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_19.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_20.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                    <div className="item">
                      <img
                        src={require("../assets/3_7.webp")}
                        className="rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="upper_layer px-3 py-10 absolute w-[100%] top-0 left-0 z-10 h-[100%]">
        <div className="container mx-auto">
          <div className="con md:mt-[60px] mt-[45px]">
            <div className="flex_dev pt-1 px-3 md:flex gap-3 hidden items-center pr-1 w-fit mx-auto text-white rounded-xl bg-white/[0.04] p-1 pl-3 shadow-[0px_4px_14px_0px_rgba(255,255,255,0.25)_inset]">
              <span>🔥 FLUX DEV is now available on ImagineArt</span>
              <button className="px-[7px] py-[4px] bg-white text-[#8850FF] rounded-md font-medium">
                Try Now
              </button>
            </div>
            <div className="content mt-4">
              <h1 className="lg:text-[64px] md:text-[54px] text-[36px] text-center font-semibold">
                Imagine AI Art Generator
              </h1>
              <p className="xl:text-[18px] mt-[18px] leading-[28px] xl:w-[650px] md:w-[580px] 2xsm:w-[335px] w-[300px] mx-auto text-[#b6b6b7] text-center">
                Create AI yArt and turn your imaginations into reality with
                Imagine's AI Art Generator and produce stunning visuals to cover
                up your artistic thoughts.
              </p>
            </div>
            <div className="inp relative hidden lg:block w-fit mx-auto mt-[32px] items-center">
              <input
                type="text"
                name=""
                value={inp_val}
                className="w-[664px] p-4 pl-4 pr-1 rounded-full text-ssm"
                onChange={(e) => {setinp_val(e.target.value)}}
                
                id="animation"
              />
              <button className="block">
                <a className="absolute py-[8px] px-[45px] flex bg-[#8550FF] font-semibold text-white rounded-full top-[8px] right-[10px] gap-2 items-center">
                  <BsStars /> <span>Create</span>
                </a>
              </button>
            </div>
            <div className="button text-center mt-[32px] lg:hidden block">
              <button className="block mx-auto">
                <a
                  href=""
                  className="py-[10px] px-[50px] flex bg-[#8550FF] font-semibold text-white rounded-full gap-2 items-center"
                >
                  <BsStars /> <span>Start Creating for Free</span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leandding;
