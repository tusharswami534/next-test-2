"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SLIDER_DATA } from "@/utils/helper";
import SliderProps from "../common/SliderProps";
gsap.registerPlugin(ScrollTrigger);

const SliderTwo = () => {
  const componentRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Gsap Code
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".gsap-slider",
          start: "top top",
          end: "800% top",
          scrub: 1,
          pin: true,
        },
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
        "0"
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
          
      })
    }, componentRef);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={componentRef}>
      <div className="min-h-screen overflow-hidden w-full gsap-slider flex justify-center items-center">
        <div className="w-full">
          <h2 className="text-white text-5xl mx-auto max-lg:text-4xl max-md:text-3xl leading-[57px] max-lg:leading-[42px] max-md:leading-[36px] max-w-[830px] text-center font-medium">
            Transforming Secure, Modern{" "}
            <span className="text-blue">Development</span> with AdaptsAI
          </h2>
          {/* Line Code  */}
          <div className="w-full relative pt-[60px] mb-[60px]">
            <div className="w-full absolute bottom-0 left-0 bg-white h-0.5"></div>
            <div className="max-w-[1140px] flex justify-between relative items-center mx-auto">
              <div className="absolute bg-green-500 w-0 h-0.5 left-[24px] bottom-0 fill-line"></div>
              <div className="size-[58px] mb-6 box-1 shadow-[] relative rounded-md">
                <div className="size-4 bg-blue left-1/2 -translate-x-1/2 rounded-full absolute -bottom-8"></div>
              </div>
              <div className="size-[58px] mb-6 box-2 bg-[#0B0B0B] relative rounded-md">
                <div className="size-4 bg-blue left-1/2 -translate-x-1/2 rounded-full absolute -bottom-8"></div>
              </div>
              <div className="size-[58px] mb-6 box-3 bg-[#0B0B0B] relative rounded-md">
                <div className="size-4 bg-blue left-1/2 -translate-x-1/2 rounded-full absolute -bottom-8"></div>
              </div>
              <div className="size-[58px] mb-6 box-4 bg-[#0B0B0B] relative rounded-md">
                <div className="size-4 bg-blue left-1/2 -translate-x-1/2 rounded-full absolute -bottom-8"></div>
              </div>
            </div>
          </div>
          {/* Line Code end  */}
          <div className="w-[1440px]">
            <div className="w-max flex slider-item">
              {SLIDER_DATA.map((item, index: number) => (
                <SliderProps
                  myClass="ss"
                  componentClass="ss"
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
  );
};

export default SliderTwo;
