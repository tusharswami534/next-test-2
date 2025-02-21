"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SLIDER_DATA } from "@/utils/helper";
import SliderProps from "../common/SliderProps";
import { MenuIcon, RobotIcon } from "@/utils/icons";
gsap.registerPlugin(ScrollTrigger);

const SliderTwo = () => {
  const componentRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      let tl = gsap.timeline();
      // Gsap Code
      mm.add("(min-width:1025px) and (max-width:1599px)", () => {
        ScrollTrigger.create({
          trigger: ".gsap-slider",
          start: "-5% top",
          end: "800% center",
          scrub: 2,
          pin: true,
          animation: tl,
          markers: true,
        });

        //   Main Slide

        tl.fromTo(
          ".slider-item",
          {
            x: "0%",
          },
          {
            x: "-75%",
          },
          0
        );

        //   Line fill Animation

        tl.to(
          ".fill-line",
          {
            width: "95%",
          },
          "0"
        );

        //   Box fill animation

        // box - 1

        gsap.set(".box-1", {
          boxShadow: "58px 0px 0 #0000FF inset",
        });
        gsap.set(".path-one-animation", {
          fill: "#fff",
        });

        tl.to(
          ".box-2",
          {
            boxShadow: "58px 0px 0 0 #0000FF inset",
            duration: 0.1,
          },
          0.0
        );

        // path animation

        tl.to(
          ".path-two-animation",
          {
            fill: "#fff",
          },
          0
        );

        // box - 3

        tl.to(
          ".box-3",
          {
            boxShadow: "58px 0px 0 0 #0000FF inset",
            duration: 0.1,
          },
          0.12
        );

        tl.to(
          ".box-4",
          {
            boxShadow: "58px 0px 0 0 #0000FF inset",
            duration: 0.1,
          },
          0.35
        );

        //   Media Query
      });

      mm.add("(max-width : 1025.98px)", () => {
        ScrollTrigger.create({
          trigger: ".gsap-slider",
          start: "top top",
          end: "200% center",
          scrub: 1,
          pin: true,
          markers: true,
          animation: tl,
        });
        tl.to(
          ".slider-item",
          {
            yPercent: -345,
          },
          0
        );
      });
    }, componentRef);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={componentRef}>
      <div className="min-h-screen overflow-hidden w-full flex justify-center max-lg:max-h-[100vh]  items-center max-lg:px-5">
        <div className="w-full">
          <h2 className="text-white text-5xl mx-auto max-lg:text-4xl max-md:text-3xl leading-[57px] max-lg:leading-[42px] max-md:leading-[36px] max-w-[830px] text-center font-medium">
            Transforming Secure, Modern{" "}
            <span className="text-blue">Development</span> with AdaptsAI
          </h2>
          <div className="gsap-slider max-lg:flex max-lg:px-5">
            {/* Line Code  */}
            <div className="w-full relative pt-[60px] mb-[60px]">
              <div className="w-full absolute bottom-0 left-0 bg-white h-0.5"></div>
              <div className="max-w-[1140px] flex justify-between relative items-center mx-auto max-lg:flex-col max-lg:gap-10">
                <div className="absolute bg-green-500 w-0 h-0.5 left-[24px] bottom-0 fill-line"></div>

                {/* Box 1 */}
                <div className="size-[58px] flex justify-center items-center mb-6 box-1 shadow-[] relative rounded-md">
                  <RobotIcon myClass="path-one-animation" />
                  <div className="size-4 bg-blue left-1/2 max-lg:hidden -translate-x-1/2 rounded-full absolute -bottom-8"></div>
                </div>
                {/* Box 2 */}
                <div className="size-[58px] flex justify-center items-center mb-6 box-2 bg-[#0B0B0B] relative rounded-md">
                  <MenuIcon myClass="path-two-animation" />
                  <div className="size-4 bg-blue left-1/2 max-lg:hidden -translate-x-1/2 rounded-full absolute -bottom-8"></div>
                </div>
                {/* box 3 */}
                <div className="size-[58px] flex justify-center items-center mb-6 box-3 bg-[#0B0B0B] relative rounded-md">
                  <div className="size-4 bg-blue left-1/2 max-lg:hidden -translate-x-1/2 rounded-full absolute -bottom-8"></div>
                </div>
                {/* Box 4 */}
                <div className="size-[58px] flex justify-center items-center mb-6 box-4 bg-[#0B0B0B] relative rounded-md">
                  <div className="size-4 bg-blue left-1/2 max-lg:hidden -translate-x-1/2 rounded-full absolute -bottom-8"></div>
                </div>
              </div>
            </div>
            {/* Line Code end  */}
            {/* SLider Content */}
            <div className="gsap-slider">
              <div className="w-max flex max-lg:flex-col max-lg:gap-20 slider-item">
                {SLIDER_DATA.map((item, index: number) => (
                  <SliderProps
                    key={index}
                    SliderNumber={`0${index + 1}`}
                    heading={item.heading}
                    spanHeading={item.colorHeading}
                    description={item.description}
                    SliderImage={item.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderTwo;
