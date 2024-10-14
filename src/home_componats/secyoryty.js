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
