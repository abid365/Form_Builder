import React from "react";
import { LuBird } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Welcome = () => {
  return (
    <div className="grid grid-cols-3 gap-4 my-5 mx-8">
      {/* 1st col */}
      <div className="border-2 border-slate-300 shadow-xl rounded-2xl p-10 text-white min-h-screen bg-[#3b37ff] flex flex-col justify-evenly">
        <div>
          <p className="text-xs font-bold tracking-wider text-white mb-28">
            <LuBird className="inline-block text-white text-lg"></LuBird>{" "}
            CRIFORM
          </p>
          <h1 className="text-4xl font-extrabold my-7">
            Start your<br></br> journey with us
          </h1>
          <p className="text-slate-200 w-3/4 text-sm">
            Boost Productivity: Craft Tailored Forms Effortlessly React-Powered
            Form Builder.
          </p>
        </div>
        {/* swiper-carousel */}
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper bg-[#2420e2] my-3 rounded-xl"
          >
            <SwiperSlide className="px-4 py-6 ">
              <h1 className="text-xs w-full tracking-tighter">
                CrickFrom made creating complex forms a breeze, but a wider
                variety of customizable templates would be fantastic!
              </h1>
              <div className="flex items-center gap-3 my-3">
                <img
                  className="h-10 border-2 rounded-full border-slate-700"
                  src="https://i.ibb.co/DQ3sD4m/No-gravity.png"
                  alt="User One"
                />
                <p className="text-xs">
                  Tom Holland{" "}
                  <span className="block text-slate-200">Freelancer</span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-4 py-6 ">
              <h1 className="text-xs w-full tracking-tighter">
                User-friendly interface and seamless integration options, though
                improved mobile responsiveness would enhance the overall
                experience.
              </h1>
              <div className="flex items-center gap-3 my-3">
                <img
                  className="h-10 border-2 rounded-full border-slate-700"
                  src="https://i.ibb.co/4ZZHFQC/No-gravity-1.png"
                  alt="User One"
                />
                <p className="text-xs">
                  Maria{" "}
                  <span className="block text-slate-200">Fashion Designer</span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="px-4 py-6 ">
              <h1 className="text-xs w-full tracking-tighter">
                CrickFrom's intuitive drag-and-drop design is impressive, yet
                more advanced styling features could take it to the next level
              </h1>
              <div className="flex items-center gap-3 my-3">
                <img
                  className="h-10 border-2 rounded-full border-slate-700"
                  src="https://i.ibb.co/rMKZ0NM/Teamwork-7.png"
                  alt="User One"
                />
                <p className="text-xs">
                  Ben Haddock{" "}
                  <span className="block text-slate-200">CEO, Camper Bell</span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* 2nd col */}
      <div className="border rounded-lg min-h-screen col-span-2">text</div>
    </div>
  );
};

export default Welcome;
