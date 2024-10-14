import React, { useRef } from "react";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaRedditAlien,
} from "react-icons/fa";
import { CiNoWaitingSign } from "react-icons/ci";
import { HiBars2 } from "react-icons/hi2";

const Header = () => {
  const nav_ref = useRef(null);
  const button_true_ref = useRef(null);
  const button_false_ref = useRef(null);
  const helper_ref = useRef(null);

  function handelNavViwer() {
    nav_ref.current.style.height = "100vh";
    helper_ref.current.style.opacity = "1";
    button_true_ref.current.style.display = "none";
    button_false_ref.current.style.display = "block";
  }

  function handelNavViwerRevers() {
    nav_ref.current.style.height = "0%";
    helper_ref.current.style.opacity = "0";
    button_true_ref.current.style.display = "block";
    button_false_ref.current.style.display = "none";
  }

  return (
    <section className="header bg-[#040507 bg-transparent lg:py-0 py-4 fixed top-0 z-50 w-full">
      <div className="reletive">
        <div className="container_custom lgest_for_header:w-[1749px] xl:w-[1280px] lg:w-[864px] md:w-[720px] xsm:w-[393px] 2xsm:w-[343px] smest:w-[300px] mx-auto">
          <div className="con">
            <header className="flex justify-between items-center">
              <div className="logo flex lg:gap-4 gap-2 items-center">
                <img
                  src={require("../assets/imagine-logo.gif")}
                  className="2xsm:h-[36px] h-[28px] w-[28px] 2xsm:w-[36px] 2xsm:rounded-[12px] rounded-[8px] "
                  alt="logo"
                />
                <h2>
                  <a
                    href=""
                    className="text-white font-semibold lg:text-[24px] text-[18px]"
                  >
                    ImagineArt
                  </a>
                </h2>
              </div>
              <nav>
                <ul className="capitalize hidden lg:flex items-center xl:gap-[18px] gap-3">
                  <li>
                    <a
                      href=""
                      className="text-white font-semibold text-[14px] px-4 py-[26.5px] block"
                    >
                      <span className="relative blobk">Blog</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white font-semibold text-[14px] px-4 py-[26.5px] block"
                    >
                      <span className="relative blobk">Community</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white font-semibold text-[14px] px-4 py-[26.5px] block"
                    >
                      <span className="relative blobk">Affiliate</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white font-semibold text-[14px] px-4 py-[26.5px] block"
                    >
                      <span className="relative blobk">API</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-white font-semibold text-[14px] px-4 py-[26.5px] block"
                    >
                      <span className="relative blobk">Creators</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="button flex items-center gap-2">
                <button className="hidden lg:block">
                  <a
                    href=""
                    className="text-white py-[26.5px] px-4 block text-[14px] font-semibold sp_a"
                  >
                    Sign in
                  </a>
                </button>
                <button className="lg:hidden block">
                  <a
                    ref={button_true_ref}
                    className="text-white block 2xsm:p-2 p-[6px] text-[25px] bg-[#3D3D41] rounded-[12px] font-semibold"
                  >
                    <HiBars2 className="block" onClick={handelNavViwer} />
                  </a>
                  <a
                    ref={button_false_ref}
                    className="text-white 2xsm:p-2 hidden p-[6px] text-[25px] bg-[#3D3D41] rounded-[12px] font-semibold"
                  >
                    <CiNoWaitingSign onClick={handelNavViwerRevers} />
                  </a>
                </button>
                <button className="border-0 hidden lg:block">
                  <a
                    href=""
                    className="text-white py-[10px] sp_button_hover px-4 block bg-[#8850FF] rounded-[10px] text-[14px] font-semibold"
                  >
                    Launch App
                  </a>
                </button>
                <button className="border-0 lg:hidden block">
                  <a
                    href=""
                    className="text-white 2xsm:py-[10px]] sp_button_hover 2xsm:px-4 py-[8px] px-3 block bg-[#8850FF] rounded-[10px] text-[14px] font-semibold"
                  >
                    Open in App
                  </a>
                </button>
              </div>
              <nav
                className="lg:hidden block sp_transition absolute left-0 top-full w-full h-0 bg-[#121418] "
                ref={nav_ref}
              >
                <div ref={helper_ref} className="nav_helper sp_transition opacity-0 md:px-[24px] px-4 pt-[30px]">
                  <ul className="capitalize w-full">
                    <li>
                      <a
                        href=""
                        className="text-white 2xsm:font-bold  text-[18px] py-[14px] block"
                      >
                        <span className="relative blobk">Blog</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="text-white 2xsm:font-bold  text-[18px] py-[14px] block"
                      >
                        <span className="relative blobk">Community</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="text-white 2xsm:font-bold  text-[18px] py-[14px] block"
                      >
                        <span className="relative blobk">Affiliate</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="text-white 2xsm:font-bold  text-[18px] py-[14px] block"
                      >
                        <span className="relative blobk">API</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="text-white 2xsm:font-bold  text-[18px] py-[14px] block"
                      >
                        <span className="relative blobk">Creators</span>
                      </a>
                    </li>
                  </ul>
                  <div className="icon flex gap-4 items-center py-4">
                    <a
                      href=""
                      className="px-3 py-3 rounded-[.75rem] bg-[#2C2D31] blobk"
                    >
                      <FaFacebookF className="text-[white] text-[20px]" />
                    </a>
                    <a
                      href=""
                      className="px-3 py-3 rounded-[.75rem] bg-[#2C2D31] blobk"
                    >
                      <FaRedditAlien className="text-[white] text-[20px]" />
                    </a>
                    <a
                      href=""
                      className="px-3 py-3 rounded-[.75rem] bg-[#2C2D31] blobk"
                    >
                      <FaDiscord className="text-[white] text-[20px]" />
                    </a>
                    <a
                      href=""
                      className="px-3 py-3 rounded-[.75rem] bg-[#2C2D31] blobk"
                    >
                      <FaInstagram className="text-[white] text-[20px]" />
                    </a>
                  </div>
                </div>
              </nav>
            </header>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
