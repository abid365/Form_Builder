import React from "react";
import { LuBird } from "react-icons/lu";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { MdOutlineUnsubscribe } from "react-icons/md";
import FooterLink from "./SubComponents/FooterLink";

const Footer = () => {
  return (
    <div className="pt-5">
      <div className="bg-gradient-to-r from-pink-400 via-purple-300 to-blue-500 h-2"></div>
      <div className="bg-slate-900 text-white">
        {/* 1st upper section */}
        <div className="flex justify-between px-8 py-10">
          {/* 1st section */}
          <div>
            <h1 className="text-xl font-bold">
              Subscribe For our daily newsletter
            </h1>
            <p className="text-sm">
              Stay up to date with latest announcements, events and articles
            </p>
          </div>
          {/* 2nd section */}
          <div className="flex gap-3 items-center">
            <input
              className="px-5 py-2 rounded border border-slate-200"
              placeholder="Enter Your Email"
              type="text"
            />
            <button className="px-4 py-3 rounded font-bold text-sm border border-slate-300">
              <MdOutlineUnsubscribe className="inline-block text-white text-2xl"></MdOutlineUnsubscribe>{" "}
              Subscribe
            </button>
          </div>
        </div>
        {/* lower section it includes the app links company name and slogan.
        It has some bulleted list at the end */}

        {/* lower section left part */}
        <div className="pt-20 px-8 pb-10 flex flex-row-reverse justify-between items-end">
          {/* lower section left part */}
          <div>
            <h1 className="font-bold">
              <LuBird className="inline-block"></LuBird> Criform
            </h1>
            <p className="text-xs my-1">
              Creating Digital Solutions for Creators<br></br> and
              Entrepreneures
            </p>
            {/* app store links */}
            <div className="mt-4 flex gap-5">
              {/* Google playstore link */}
              <div className="border w-fit p-4 rounded-lg flex items-center gap-4">
                <FaGooglePlay className="inline-block text-4xl"></FaGooglePlay>
                <div>
                  <p className="text-xs">Download app from</p>
                  <h1>Goole Store</h1>
                </div>
              </div>
              {/* apple store link */}
              <div className="border w-fit p-4 rounded-lg flex items-center gap-4">
                <FaApple className="inline-block text-4xl"></FaApple>
                <div>
                  <p className="text-xs">Download app from</p>
                  <h1>App Store</h1>
                </div>
              </div>
            </div>
          </div>
          {/* lower section right part */}
          <div className="grid grid-cols-4 gap-3">
            <FooterLink
              header={"Product"}
              li1={"Overview"}
              li2={"Features"}
              li3={"Solution"}
              li4={"Pricing"}
              li5={"Projects"}
            ></FooterLink>
            <FooterLink
              header={"Company"}
              li1={"About us"}
              li2={"Careers"}
              li3={"Press"}
              li4={"News"}
              li5={"Media kit"}
            ></FooterLink>
            <FooterLink
              header={"Resources"}
              li1={"Blogs"}
              li2={"Newsletter"}
              li3={"Events"}
              li4={"Tutorials"}
              li5={"Support"}
            ></FooterLink>
            <FooterLink
              header={"Social"}
              li1={"Twitter"}
              li2={"Linkedin"}
              li3={"Facebook"}
              li4={"Youtube"}
              li5={`Mastodon`}
            ></FooterLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
