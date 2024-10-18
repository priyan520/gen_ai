import React, { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md"; // Correct icon import

const Our_ai_tool = () => {

    const [size1 , setsize1] = useState("size-full_cus");
    const [size2 , setsize2] = useState("size-0_cus");
    const [size3 , setsize3] = useState("size-0_cus");
    const [size4 , setsize4] = useState("size-0_cus");
    const [size5 , setsize5] = useState("size-0_cus");
    const [size6 , setsize6] = useState("size-0_cus");
    const [lineWidth , setLineWidth] = useState(0);

  useEffect(() => {
    var vidio_height
    var x_lg = 0;
    var lg = 0;
    var lg_sm = 0;
    var md = 0;
    var xl_2 = 0;

    const handleScroll = () => {

      console.log(window.screenY / 39)

        document.getElementById('line').style.width = (window.scrollY / 39)+"px";

      console.log(window.innerWidth )
      if(window.innerWidth >= 2000){
        xl_2 = 1;
        lg = 0;
        lg_sm = 0;
        md = 0;
      }
      else if(window.innerWidth >= 1900){
        x_lg = 1;
        lg = 0;
        lg_sm = 0;
        md = 0;
        xl_2 = 0;
      }else if(window.innerWidth >= 1420){
        x_lg = 0;
        lg = 1;
        lg_sm = 0;
        md = 0; 
        xl_2 = 0;
      }else if(window.innerWidth >= 1024){
        x_lg = 0;
        lg = 0;
        lg_sm = 1;
        md = 0;
        xl_2 = 0;
      }else if(window.innerWidth >= 768){
        x_lg = 0;
        lg = 0;
        lg_sm = 0;
        md = 1;
        xl_2 = 0;
      }

      console.log(window.scrollY)

      if (window.scrollY < (xl_2 * 2300)+(x_lg * 2230)+(lg * 2260)+(lg_sm * 2410)+(md * 2270)) {
        document.getElementById("output1").style.visibility = "visible";
        document.getElementById("output2").style.visibility = "hidden";
        document.getElementById("output3").style.visibility = "hidden";
        document.getElementById("output4").style.visibility = "hidden";
        document.getElementById("output5").style.visibility = "hidden";
        document.getElementById("output6").style.visibility = "hidden";

        document.getElementById("output1").style.opacity = "1";
        document.getElementById("output2").style.opacity = "0";
        document.getElementById("output3").style.opacity = "0";
        document.getElementById("output4").style.opacity = "0";
        document.getElementById("output5").style.opacity = "0";
        document.getElementById("output6").style.opacity = "0";

        setsize1("size-full_cus")
        setsize2("size-0_cus")
        setsize3("size-0_cus")
        setsize4("size-0_cus")
        setsize5("size-0_cus")
        setsize6("size-0_cus")

      } else if (window.scrollY >= (xl_2 * 2300)+(x_lg * 2230)+(lg * 2260)+(lg_sm * 2410)+(md * 2270) && window.scrollY < (xl_2 * 3500)+(x_lg * 3380)+(lg * 3380)+(lg_sm * 3810)+(md * 3560)) {
        document.getElementById("output1").style.visibility = "hidden";
        document.getElementById("output2").style.visibility = "visible";
        document.getElementById("output3").style.visibility = "hidden";
        document.getElementById("output4").style.visibility = "hidden";
        document.getElementById("output5").style.visibility = "hidden";
        document.getElementById("output6").style.visibility = "hidden";

        document.getElementById("output1").style.opacity = "0";
        document.getElementById("output2").style.opacity = "1";
        document.getElementById("output3").style.opacity = "0";
        document.getElementById("output4").style.opacity = "0";
        document.getElementById("output5").style.opacity = "0";
        document.getElementById("output6").style.opacity = "0";

        setsize1("size-0_cus")
        setsize2("size-full_cus")
        setsize3("size-0_cus")
        setsize4("size-0_cus")
        setsize5("size-0_cus")
        setsize6("size-0_cus")        
      } else if (window.scrollY >= (xl_2 * 3500)+(x_lg * 3380)+(lg * 3380)+(lg_sm * 3810)+(md * 3560) && window.scrollY < (xl_2 * 4700)+(x_lg * 4700)+(lg * 4510)+(lg_sm * 5210)+(md * 4850)) {
        document.getElementById("output1").style.visibility = "hidden";
        document.getElementById("output2").style.visibility = "hidden";
        document.getElementById("output3").style.visibility = "visible";
        document.getElementById("output4").style.visibility = "hidden";
        document.getElementById("output5").style.visibility = "hidden";
        document.getElementById("output6").style.visibility = "hidden";

        document.getElementById("output1").style.opacity = "0";
        document.getElementById("output2").style.opacity = "0";
        document.getElementById("output3").style.opacity = "1";
        document.getElementById("output4").style.opacity = "0";
        document.getElementById("output5").style.opacity = "0";
        document.getElementById("output6").style.opacity = "0";
        
        setsize1("size-0_cus")
        setsize2("size-0_cus")
        setsize3("size-full_cus")
        setsize4("size-0_cus")
        setsize5("size-0_cus")
        setsize6("size-0_cus")
      } else if (window.scrollY >= (xl_2 * 4700)+(x_lg * 4700)+(lg * 4510)+(lg_sm * 5210)+(md * 4850) && window.scrollY < (xl_2 * 5900)+(x_lg * 5620)+(lg * 5610)+(lg_sm * 6610)+(md * 6130)) {
        
        document.getElementById("output1").style.visibility = "hidden";
        document.getElementById("output3").style.visibility = "hidden";
        document.getElementById("output4").style.visibility = "visible";
        document.getElementById("output3").style.visibility = "hidden";
        document.getElementById("output5").style.visibility = "hidden";
        document.getElementById("output6").style.visibility = "hidden";

        document.getElementById("output1").style.opacity = "0";
        document.getElementById("output2").style.opacity = "0";
        document.getElementById("output3").style.opacity = "0";
        document.getElementById("output4").style.opacity = "1";
        document.getElementById("output5").style.opacity = "0";
        document.getElementById("output6").style.opacity = "0";

        setsize1("size-0_cus")
        setsize2("size-0_cus")
        setsize3("size-0_cus")
        setsize4("size-full_cus")
        setsize5("size-0_cus")
        setsize6("size-0_cus")
      } else if (window.scrollY >=  (xl_2 * 5900)+(x_lg * 5620)+(lg * 5610)+(lg_sm * 6610)+(md * 6130) && window.scrollY < (xl_2 * 7100)+(x_lg * 7000)+(lg * 6740)+(lg_sm * 8010)+(md * 7410)) {
        document.getElementById("output1").style.visibility = "hidden";
        document.getElementById("output4").style.visibility = "hidden";
        document.getElementById("output5").style.visibility = "visible";
        document.getElementById("output3").style.visibility = "hidden";
        document.getElementById("output4").style.visibility = "hidden";
        document.getElementById("output6").style.visibility = "hidden";

        document.getElementById("output1").style.opacity = "0";
        document.getElementById("output2").style.opacity = "0";
        document.getElementById("output3").style.opacity = "0";
        document.getElementById("output4").style.opacity = "0";
        document.getElementById("output5").style.opacity = "1";
        document.getElementById("output6").style.opacity = "0";

        setsize1("size-0_cus")
        setsize2("size-0_cus")
        setsize3("size-0_cus")
        setsize4("size-0_cus")
        setsize5("size-full_cus")
        setsize6("size-0_cus")
      } else if (window.scrollY >= (xl_2 * 7100)+(x_lg * 7000)+(lg * 6740)+(lg_sm * 7990)+(md * 7410)) {
        document.getElementById("output1").style.visibility = "hidden";
        document.getElementById("output5").style.visibility = "hidden";
        document.getElementById("output6").style.visibility = "visible";
        document.getElementById("output3").style.visibility = "hidden";
        document.getElementById("output4").style.visibility = "hidden";
        document.getElementById("output5").style.visibility = "hidden";

        document.getElementById("output1").style.opacity = "0";
        document.getElementById("output2").style.opacity = "0";
        document.getElementById("output3").style.opacity = "0";
        document.getElementById("output4").style.opacity = "0";
        document.getElementById("output5").style.opacity = "0";
        document.getElementById("output6").style.opacity = "1";

        setsize1("size-0_cus")
        setsize2("size-0_cus")
        setsize3("size-0_cus")
        setsize4("size-0_cus")
        setsize5("size-0_cus")
        setsize6("size-full_cus")
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  return (
    <section
      className="main_section mb:pb-96 bg-[#0A0B0E] 3xl:h-[7000px] xl:h-[6300px] md:h-[7500px] 2xl:h-[7000px] overflow-hidden"
      id="main_section"
    >
      <section className="our_ai_tool xl:w-[1440px] mx-auto">
        <div className="container_custom lg:py-[120px] lg:px-[80px] lg:pl-[120px] md:px-[40px] md:py-[80px] px-[20px] py-[60px] ">
          <div className="con">
            <div className="headding_part text-center">
              <h2 className="md:text-[46px] font-bold text-[30px]">
                Our AI Tools Suite
              </h2>
              <p className="text-[#b6b6b7] md:w-[460px] mx-auto md:text-[18px] xsm:w-[335px] w-[280px] text-[14px] mt-[18px]">
                Revolutionize your creative workflow with ImagineArt AI Tools
                Suite. This suite empowers you with cutting-edge AI technology
                to generate stunning AI art and captivating videos.
              </p>
            </div>

            {/* Desktop and large screen1s */}
            <div className=" 3xl:top-[1350px] md:top-[1250px] xl:h-[6300px] 2xl:h-[7000px] md:h-[7500px] absolute">
              <div className="main_content xl:mt-[150px] mt-[100px] items-center 2xl:gap-28 xl:gap-[200px] gap-10 md:flex hidden !sticky 3xl:top-[400px] 2xl:top-[200px] xl:top-[150px] lg:top-[200px] md:top-[250px]">
                <div className="main_img ">
                  {" "}
                  {/* Sticky positioning applied here */}
                  <video
                    src={
                      "https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-img.webm"
                    }
                    id="vidio"
                    className="2xl:h-[530px] 2xl:w-[530px] 3xl:size-[560px] xl:h-[480px] xl:w-[480px] lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-[25px]"
                    muted
                    loop
                    autoPlay
                  ></video>
                </div>
                <div className="main_sub_contnt_holder">
                  <div className="line_box mb-12 ">
                    <div className={"line w-[192px] h-[4px] bg-[#1E2023] relative"}>
                      <div className="line1 rounded-full max-w-full" id="line"></div>
                    </div>
                  </div>
                  <div className = {"sub_content relative lg:h-[224px] md:h-[282px] xl:w-[476px]  md:w-[390px] overflow-hidden invisible  opacity-0 "+size1}
                    id="output1"
                  >
                    <div className="absolute h-fit w-fit top-0 left-0">
                      <h3 className="text-[36px] font-semibold mb-[18px]">
                        Text to Image
                      </h3>
                      <p className="xl:w-[476px] text-[#b6b6b7] lg:w-[390px] w-[328px] text-[14px] mb-[24px]">
                        Ignite your creative spark with Imagine AI Image
                        Generator. Describe your vision with words, and watch
                        the powerful tool translate them into captivating
                        artwork. Catalyze a flurry of ideas and conquer creative
                        roadblocks.
                      </p>
                      <button className="border-0">
                        <a
                          href="#"
                          className="text-white sp_button_hover py-[10px] px-[18px] bg-[#8850FF] items-center gap-2 rounded-[10px] font-semibold flex"
                        >
                          <span>Generate Image</span>

                          <MdArrowOutward className="text-[20px]" />
                        </a>
                      </button>
                    </div>
                  </div>
                  <div
                    className={"sub_content relative lg:h-[224px] md:h-[282px] xl:w-[476px]  md:w-[390px] overflow-hidden invisible opacity-0 "+size2}
                    id="output2"
                  >
                    <div className="absolute h-fit w-fit top-0 left-0">
                      <h3 className="text-[36px] font-semibold mb-[18px]">
                        Real Time Generation
                      </h3>
                      <p className="xl:w-[476px] text-[#b6b6b7] lg:w-[390px] w-[328px] text-[14px] mb-[24px]">
                        Real Time Generation Witness your ideas blended with
                        Imagine AI Image Generator as Real-Time Generation lets
                        you sketch and see your creation come to life before
                        your eyes. Refine as you go for a seamless experience.
                      </p>
                      <button className="border-0">
                        <a
                          href="#"
                          className="text-white sp_button_hover py-[10px] px-[18px] bg-[#8850FF] items-center gap-2 rounded-[10px] font-semibold flex"
                        >
                          <span>Try Realtime Generation</span>

                          <MdArrowOutward className="text-[20px]" />
                        </a>
                      </button>
                    </div>
                  </div>
                  <div
                    className={"sub_content relative lg:h-[224px] md:h-[282px] xl:w-[476px]  md:w-[390px] overflow-hidden invisible opacity-0 "+size3}
                    id="output3"
                  >
                    <div className="absolute h-fit w-fit top-0 left-0">
                      <h3 className="text-[36px] font-semibold mb-[18px]">
                        AI Video Generator
                      </h3>
                      <p className="xl:w-[476px] text-[#b6b6b7] lg:w-[390px] w-[328px] text-[14px] mb-[24px]">
                        Ditch the filming crew as Imagine AI Art Creates HD
                        Videos Instantly. Convert scripts or ideas into stunning
                        4K videos with just a few clicks. Forget time consuming
                        filming, editing, and acting as the AI does it all in
                        seconds.
                      </p>
                      <button className="border-0">
                        <a
                          href="#"
                          className="text-white sp_button_hover py-[10px] px-[18px] bg-[#8850FF] items-center gap-2 rounded-[10px] font-semibold flex"
                        >
                          <span>Create Video in HD</span>

                          <MdArrowOutward className="text-[20px]" />
                        </a>
                      </button>
                    </div>
                  </div>
                  <div
                    className={"sub_content relative lg:h-[224px] md:h-[282px] xl:w-[476px]  md:w-[390px] overflow-hidden invisible opacity-0 "+size4}
                    id="output4"
                  >
                    <div className="absolute h-fit w-fit top-0 left-0">
                      <h3 className="text-[36px] font-semibold mb-[18px]">
                        Ideate
                      </h3>
                      <p className="xl:w-[476px] text-[#b6b6b7] lg:w-[390px] w-[328px] text-[14px] mb-[24px]">
                        imagine AI Image Generator brings you Ideate that
                        empowers you to paint with an intelligent brush. Simply
                        describe elements, watch them appear instantly, and
                        refine your artwork for an intuitive creative
                        experience.
                      </p>
                      <button className="border-0">
                        <a
                          href="#"
                          className="text-white sp_button_hover py-[10px] px-[18px] bg-[#8850FF] items-center gap-2 rounded-[10px] font-semibold flex"
                        >
                          <span>Try Ideate</span>

                          <MdArrowOutward className="text-[20px]" />
                        </a>
                      </button>
                    </div>
                  </div>
                  <div
                    className={"sub_content relative lg:h-[224px] md:h-[282px] xl:w-[476px]  md:w-[390px] overflow-hidden invisible opacity-0 "+size5}
                    id="output5"
                  >
                    <div className="absolute h-fit w-fit top-0 left-0">
                      <h3 className="text-[36px] font-semibold mb-[18px]">
                        Creative Upscaler
                      </h3>
                      <p className="xl:w-[476px] text-[#b6b6b7] lg:w-[390px] w-[328px] text-[14px] mb-[24px]">
                        From Blurry to Beautiful: Imagine AI Image Generator
                        Creative Upscaler. The image enhancement tool instantly
                        transforms them into crisp, high-definition
                        masterpieces. Imagine AI Art Generator makes it fast and
                        easy.
                      </p>
                      <button className="border-0">
                        <a
                          href="#"
                          className="text-white sp_button_hover py-[10px] px-[18px] bg-[#8850FF] items-center gap-2 rounded-[10px] font-semibold flex"
                        >
                          <span>Upscale your images</span>

                          <MdArrowOutward className="text-[20px]" />
                        </a>
                      </button>
                    </div>
                  </div>
                  <div
                    className={"sub_content relative lg:h-[224px] md:h-[282px] xl:w-[476px]  md:w-[390px] overflow-hidden invisible opacity-0 "+size6}
                    id="output6"
                  >
                    <div className="absolute h-fit w-fit top-0 left-0">
                      <h3 className="text-[36px] font-semibold mb-[18px]">
                        Character Consistency
                      </h3>
                      <p className="xl:w-[476px] text-[#b6b6b7] lg:w-[390px] w-[328px] text-[14px] mb-[24px]">
                        Maintain uniformity in your storytelling with Character
                        Consistency, which ensures all generated images
                        consistently reflect your characters. Experience
                        seamless and coherent visual narratives effortlessly.
                      </p>
                      <button className="border-0">
                        <a
                          href="#"
                          className="text-white sp_button_hover py-[10px] px-[18px] bg-[#8850FF] items-center gap-2 rounded-[10px] font-semibold flex"
                        >
                          <span>Try Character Consistency</span>

                          <MdArrowOutward className="text-[20px]" />
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[500px]"></div>
              <div className="main_content xl:mt-[150px] mt-[500px] items-center 2xl:gap-28 xl:gap-[200px] gap-12 md:flex hidden !sticky 2xl:top-[210px] 3xl:top-[410px] lg:top-[210px] xl:top-[160px] md:top-[260px]">
                <div className="main_img ">
                  {" "}
                  {/* Sticky positioning applied here */}
                  <video
                    src={
                      "https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/realtime-text.webm"
                    }
                    className="2xl:h-[530px] 2xl:w-[530px] 3xl:size-[560px] xl:h-[480px] xl:w-[480px] lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-[25px] "
                    muted
                    loop
                    autoPlay
                  ></video>
                </div>
              </div>
              <div className="h-[500px]"></div>
              <div className="main_content xl:mt-[150px] mt-[500px] items-center 2xl:gap-28 xl:gap-[200px] gap-12 md:flex hidden !sticky 2xl:top-[220px] 3xl:top-[420px] lg:top-[220px] xl:top-[170px] md:top-[270px]">
                <div className="main_img ">
                  {" "}
                  {/* Sticky positioning applied here */}
                  <video
                    src={
                      "https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-video.webm"
                    }
                    className="2xl:h-[530px] 2xl:w-[530px] 3xl:size-[560px] xl:h-[480px] xl:w-[480px] lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-[25px] "
                    muted
                    loop
                    autoPlay
                  ></video>
                </div>
              </div>
              <div className="h-[500px]"></div>
              <div className="main_content xl:mt-[150px] mt-[500px] items-center 2xl:gap-28 xl:gap-[200px] gap-12 md:flex hidden !sticky 2xl:top-[230px] 3xl:top-[430px] lg:top-[230px] xl:top-[180px] md:top-[280px]">
                <div className="main_img ">
                  {" "}
                  {/* Sticky positioning applied here */}
                  <video
                    src={
                      "https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/realtime-canvas.webm"
                    }
                    className="2xl:h-[530px] 2xl:w-[530px] 3xl:size-[560px] xl:h-[480px] xl:w-[480px] lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-[25px] "
                    muted
                    loop
                    autoPlay
                  ></video>
                </div>
              </div>
              <div className="h-[500px]"></div>
              <div className="main_content xl:mt-[150px] mt-[500px] items-center 2xl:gap-28 xl:gap-[200px] gap-12 md:flex hidden !sticky 2xl:top-[240px] 3xl:top-[440px] lg:top-[240px] xl:top-[190px] md:top-[290px]">
                <div className="main_img ">
                  {" "}
                  {/* Sticky positioning applied here */}
                  <video
                    src={
                      "https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/enhance.webm"
                    }
                    className="2xl:h-[530px] 2xl:w-[530px] 3xl:size-[560px] xl:h-[480px] xl:w-[480px] lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-[25px] "
                    muted
                    loop
                    autoPlay
                  ></video>
                </div>
              </div>
              <div className="h-[500px]"></div>
              <div className="main_content xl:mt-[150px] mt-[500px] items-center 2xl:gap-28 xl:gap-[200px] gap-12 md:flex hidden !sticky 2xl:top-[250px] 3xl:top-[450px] lg:top-[250px] xl:top-[200px] md:top-[300px] ">
                <div className="main_img ">
                  {/* Sticky positioning applied here */}
                  <video
                    src={
                      "https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/character-consistency.webm"
                    }
                    className="2xl:h-[530px] 2xl:w-[530px] 3xl:size-[560px] xl:h-[480px] xl:w-[480px] lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] rounded-[25px]"
                    muted
                    loop
                    autoPlay
                  ></video>
                </div>
                <div className="sub_content relative h-[224px] xl:w-[476px]  md:w-[390px] overflow-hidden"></div>
              </div>
            </div>

            {/* Mobile and small screens */}
            <div className="main_content xl:mt-[150px] mt-[100px] items-center xl:gap-28 gap-12 md:hidden block">
              <div className="main_box our_box 2xsm:w-[335px] w-[280px] p-4 mx-auto bg-[#121317] rounded-[1.5rem] mb-10">
                <div className="sub_box">
                  <div className="main_img">
                    <video
                      src={
                        "https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-img.webm"
                      }
                      className="size-[300px] rounded-[25px]"
                      muted
                      loop
                      autoPlay
                    ></video>
                  </div>
                  <div className="sub_content w-auto">
                    <h3 className="md:text-[36px] md:mt-0 mt-4 text-[24px] font-semibold mb-[18px]">
                      Text to Image
                    </h3>
                    <p className="xl:w-[476px] text-[#b6b6b7] lg:w-[390px] md:w-[328px] md:text-[14px] text-[12px] w-full mb-[24px]">
                      Ignite your creative spark with Imagine AI Image
                      Generator. Describe your vision with words, and watch the
                      powerful tool translate them into captivating artwork.
                      Catalyze a flurry of ideas and conquer creative
                      roadblocks.
                    </p>
                    <button className="border-0 w-[100%]">
                      <a
                        href=""
                        className="text-white py-[10px] md:px-[18px] w-[100%] block bg-[#8850FF] rounded-[10px] font-semibold"
                      >
                        Generate Image
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="main_box our_box 2xsm:w-[335px] w-[280px] p-4 mx-auto bg-[#121317] rounded-[1.5rem] mb-10">
                <div className="sub_box">
                  <div className="main_img">
                    <video
                      src={
                        "https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/realtime-text.webm"
                      }
                      className="size-[300px] rounded-[25px]"
                      muted
                      loop
                      autoPlay
                    ></video>
                  </div>
                  <div className="sub_content w-auto">
                    <h3 className="md:text-[36px] md:mt-0 mt-4 text-[24px] font-semibold mb-[18px]">
                      Text to Image
                    </h3>
                    <p className="xl:w-[476px] text-[#b6b6b7] lg:w-[390px] md:w-[328px] md:text-[14px] text-[12px] w-full mb-[24px]">
                      Ignite your creative spark with Imagine AI Image
                      Generator. Describe your vision with words, and watch the
                      powerful tool translate them into captivating artwork.
                      Catalyze a flurry of ideas and conquer creative
                      roadblocks.
                    </p>
                    <button className="border-0 w-[100%]">
                      <a
                        href=""
                        className="text-white py-[10px] md:px-[18px] w-[100%] block bg-[#8850FF] rounded-[10px] font-semibold"
                      >
                        Generate Image
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="main_box our_box 2xsm:w-[335px] w-[280px] p-4 mx-auto bg-[#121317] rounded-[1.5rem] mb-10">
                <div className="sub_box">
                  <div className="main_img">
                    <video
                      src={
                        "https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/text-to-video.webm"
                      }
                      className="size-[300px] rounded-[25px]"
                      muted
                      loop
                      autoPlay
                    ></video>
                  </div>
                  <div className="sub_content w-auto">
                    <h3 className="md:text-[36px] md:mt-0 mt-4 text-[24px] font-semibold mb-[18px]">
                      Text to Image
                    </h3>
                    <p className="xl:w-[476px] text-[#b6b6b7] lg:w-[390px] md:w-[328px] md:text-[14px] text-[12px] w-full mb-[24px]">
                      Ignite your creative spark with Imagine AI Image
                      Generator. Describe your vision with words, and watch the
                      powerful tool translate them into captivating artwork.
                      Catalyze a flurry of ideas and conquer creative
                      roadblocks.
                    </p>
                    <button className="border-0 w-[100%]">
                      <a
                        href=""
                        className="text-white py-[10px] md:px-[18px] w-[100%] block bg-[#8850FF] rounded-[10px] font-semibold"
                      >
                        Generate Image
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="main_box our_box 2xsm:w-[335px] w-[280px] p-4 mx-auto bg-[#121317] rounded-[1.5rem] mb-10">
                <div className="sub_box">
                  <div className="main_img">
                    <video
                      src={
                        "https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/realtime-canvas.webm"
                      }
                      className="size-[300px] rounded-[25px]"
                      muted
                      loop
                      autoPlay
                    ></video>
                  </div>
                  <div className="sub_content w-auto">
                    <h3 className="md:text-[36px] md:mt-0 mt-4 text-[24px] font-semibold mb-[18px]">
                      Text to Image
                    </h3>
                    <p className="xl:w-[476px] text-[#b6b6b7] lg:w-[390px] md:w-[328px] md:text-[14px] text-[12px] w-full mb-[24px]">
                      Ignite your creative spark with Imagine AI Image
                      Generator. Describe your vision with words, and watch the
                      powerful tool translate them into captivating artwork.
                      Catalyze a flurry of ideas and conquer creative
                      roadblocks.
                    </p>
                    <button className="border-0 w-[100%]">
                      <a
                        href=""
                        className="text-white py-[10px] md:px-[18px] w-[100%] block bg-[#8850FF] rounded-[10px] font-semibold"
                      >
                        Generate Image
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="main_box our_box 2xsm:w-[335px] w-[280px] p-4 mx-auto bg-[#121317] rounded-[1.5rem] mb-10">
                <div className="sub_box">
                  <div className="main_img">
                    <video
                      src={
                        "https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/enhance.webm"
                      }
                      className="size-[300px] rounded-[25px]"
                      muted
                      loop
                      autoPlay
                    ></video>
                  </div>
                  <div className="sub_content w-auto">
                    <h3 className="md:text-[36px] md:mt-0 mt-4 text-[24px] font-semibold mb-[18px]">
                      Text to Image
                    </h3>
                    <p className="xl:w-[476px] text-[#b6b6b7] lg:w-[390px] md:w-[328px] md:text-[14px] text-[12px] w-full mb-[24px]">
                      Ignite your creative spark with Imagine AI Image
                      Generator. Describe your vision with words, and watch the
                      powerful tool translate them into captivating artwork.
                      Catalyze a flurry of ideas and conquer creative
                      roadblocks.
                    </p>
                    <button className="border-0 w-[100%]">
                      <a
                        href=""
                        className="text-white py-[10px] md:px-[18px] w-[100%] block bg-[#8850FF] rounded-[10px] font-semibold"
                      >
                        Generate Image
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="main_box our_box 2xsm:w-[335px] w-[280px] p-4 mx-auto bg-[#121317] rounded-[1.5rem]">
                <div className="sub_box">
                  <div className="main_img">
                    <video
                      src={
                        "https://cdn.web.imagine.art/imagine-frontend/assets/video/landing-page/tools/character-consistency.webm"
                      }
                      className="size-[300px] rounded-[25px]"
                      id="line"
                      muted
                      loop
                      autoPlay
                    ></video>
                  </div>
                  <div className="sub_content w-auto">
                    <h3 className="md:text-[36px] md:mt-0 mt-4 text-[24px] font-semibold mb-[18px]">
                      Text to Image
                    </h3>
                    <p className="xl:w-[476px] text-[#b6b6b7] lg:w-[390px] md:w-[328px] md:text-[14px] text-[12px] w-full mb-[24px]">
                      Ignite your creative spark with Imagine AI Image
                      Generator. Describe your vision with words, and watch the
                      powerful tool translate them into captivating artwork.
                      Catalyze a flurry of ideas and conquer creative
                      roadblocks.
                    </p>
                    <button className="border-0 w-[100%]">
                      <a
                        href=""
                        className="text-white py-[10px] md:px-[18px] w-[100%] block bg-[#8850FF] rounded-[10px] font-semibold"
                      >
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
  );
};

export default Our_ai_tool;
