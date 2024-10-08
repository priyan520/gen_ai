import React, { useEffect, useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BsStars } from 'react-icons/bs';
import Test from './Test';

const Leandding = () => {

  const [input_data , setinput_data] = useState(
    [
      "A magical Disney-inspired castle",
      "An enchanted forest bathed in the soft, golden light",
      "realistic portrait of an elderly sailor",
      "action-packed, anime-style battle",
      "a cyberpunk dystopia with a sprawling, rain-soaked cityscape",
      "a breathtaking cosmic journey through a surreal dreamscape",
    ]
  );

  const [inp_val, setinp_val] = useState("");

  let a = "";

  var i = 0 , j = 0 , k = 0 , pause = false , animation , dataRemover , dataAdder;

  useEffect(() => {

    animation = document.getElementById("animation");
    
      dataAdder = setInterval(() => {

        if(j >= input_data[i].length){
          if(!pause){
            pause = true;

            setTimeout(() => {
              dataRemover = setInterval(() => {
                  if(k < input_data[i].length){
                    k++;
                  }else if(pause){
                    pause =  false;
                    j = 0;
                    i++;
                    animation.value = "";
                    if(i >= input_data.length){
                      i = 0;
                    }
                  }
                  if(pause){
                    animation.value = animation.value.substr(0 , animation.value.length - 1)
                  }
                } , 100)
            }, 1000)
          }
        }

        if(!pause){
          
          animation.value += input_data[i][j];
          j++;
          if(j >= input_data[i].length){
            pause = false;
            k = 0;
          }
        }


      }, 150)


  },[])

  function handleTextControler(){
    try{
      animation.value = input_data[i];
    clearInterval(dataAdder);
    clearInterval(dataRemover);
    }catch (err){
      console.log(err)
      console.log(input_data[i])
    }
  }

  return (
      <div className="home relative">
        <Test className="absolute top-0 left-0"></Test>
        <section className='slider_section pt-8 pb-0'>
          <div className="container_custom">
            <div className="con">
              <div className="slider_container">
                <div className="silder_div">
                  <div className="slider_1">
                    <OwlCarousel className='owl-theme' loop={true}  responsive={{
          0: {
            items: 1.5,
          },
          375: {
            items: 1.75,
          },
          425:{
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 4, 
          },
          1440: {
            items: 5,
          },
          1920: {
            items: 6.6,
          },
          2560: {
            items: 8.5,
          }
        }} center={true} autoplay autoplayTimeout={1000} dots={false} margin={10}>
                        <div className="item">
                          <img src={require("../assets/1_1.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_2.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_3.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_4.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_5.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_6.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_7.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />  
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_8.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_9.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_10.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_11.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_12.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_13.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_14.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_15.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_16.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_17.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_18.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_19.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_20.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/1_21.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                    </OwlCarousel>
                  </div>
                  <div className="slider_2 mt-2">
                    <OwlCarousel className='owl-theme' loop={true} responsive={{
          0: {
            items: 1.5,
          },
          375: {
            items: 1.75,
          },
          425:{
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 4, 
          },
          1440: {
            items: 5,
          },
          1920: {
            items: 6.6,
          },
          2560: {
            items: 8.5,
          }
        }} autoplay items={5} center={true} autoplayTimeout={1000} dots={false} margin={10}>
                        <div className="item">
                          <img src={require("../assets/2_1.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_2.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_3.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_4.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_5.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_6.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_7.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_8.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_9.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_10.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_11.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_12.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_13.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_14.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_15.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_16.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_17.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_18.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_19.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_20.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/2_21.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                    </OwlCarousel>
                  </div>
                  <div className="slider_3 mt-2">
                    <OwlCarousel className='owl-theme' loop={true} responsive={{
          0: {
            items: 1.5,
          },
          375: {
            items: 1.75,
          },
          425:{
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 4, 
          },
          1440: {
            items: 5,
          },
          1920: {
            items: 6.6,
          },
          2560: {
            items: 8.5,
          }
        }} autoplay items={5} center={true} autoplayTimeout={1000} dots={false} margin={10}>
                        <div className="item">
                          <img src={require("../assets/3_1.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_2.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_3.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_4.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_5.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_6.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_7.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_8.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_9.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_10.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_11.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_12.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_13.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_14.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_15.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_16.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_17.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_18.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_19.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                        <div className="item">
                          <img src={require("../assets/3_20.webp")} className='rounded-xl xl:!w-[280px] xl:!h-[158px] md:!w-[245px] md:!h-[138px] !w-[210px] !h-[120px]' alt="" />
                        </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='upper_layer px-3 py-10 absolute w-[100%] top-0 left-0 z-10 h-[100%]'>
          <div className="container mx-auto">
            <div className="con md:mt-[60px] mt-[45px]">
              <div className="flex_dev pt-1 px-3 md:flex gap-3 hidden items-center pr-1 w-fit mx-auto text-white rounded-xl bg-white/[0.04] p-1 pl-3 shadow-[0px_4px_14px_0px_rgba(255,255,255,0.25)_inset]">
                <span>
                  🔥 FLUX DEV is now available on ImagineArt
                </span>
                <button className='px-[7px] py-[4px] bg-white text-[#8850FF] rounded-md font-medium'>
                  Try Now
                </button>
              </div>
              <div className="content mt-4">
                <h1 className='lg:text-[64px] md:text-[54px] text-[36px] text-center font-semibold'>
                  Imagine AI Art Generator
                </h1>
                <p className='xl:text-[18px] mt-[18px] leading-[28px] xl:w-[650px] md:w-[580px] 2xsm:w-[335px] w-[300px] mx-auto text-[#b6b6b7] text-center'>
                  Create AI Art and turn your imaginations into reality with Imagine's AI Art Generator and produce stunning visuals to cover up your artistic thoughts.
                </p>
              </div>
              <div className="inp relative hidden lg:block w-fit mx-auto mt-[32px] items-center">
                <input type="text" name="" value={inp_val} className='w-[664px] p-4 pl-4 pr-1 rounded-full' onChange={(e) => setinp_val(e.target.value)} onClick={() => handleTextControler()} id="animation" />
                <button className='block'><a className='absolute py-[8px] px-[45px] flex bg-[#8550FF] font-semibold text-white rounded-full top-[8px] right-[10px] gap-2 items-center'><BsStars /> <span>Create</span></a></button>
              </div>
              <div className="button text-center mt-[32px] lg:hidden block">
                <button className='block mx-auto'><a href="" className='py-[10px] px-[50px] flex bg-[#8550FF] font-semibold text-white rounded-full gap-2 items-center'><BsStars /> <span>Start Creating for Free</span></a></button>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Leandding