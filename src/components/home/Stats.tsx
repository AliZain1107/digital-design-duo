import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!isIntersecting) return;

    const startTime = Date.now();
    const endValue = end;
    
    const animate = () => {
      const currentTime = Date.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const nextCount = Math.floor(progress * endValue);
      if (nextCount !== countRef.current) {
        setCount(nextCount);
        countRef.current = nextCount;
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, isIntersecting]);

  return { count, setIsIntersecting };
};

const Stats: React.FC = () => {
  const { t, language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const stats = [
    { value: 8000, label: t.statsHours },
    { value: 25, label: t.statsDesigners },
    { value: 250, label: t.statsCompanies },
    { value: 32, label: t.statsArticles },
  ];

  const counter0 = useCountUp(stats[0].value);
  const counter1 = useCountUp(stats[1].value);
  const counter2 = useCountUp(stats[2].value);
  const counter3 = useCountUp(stats[3].value);
  const counters = [counter0, counter1, counter2, counter3];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach(counter => counter.setIsIntersecting(true));
          }
        });
      },
      { threshold: 0.1 }
    );

    const refCurrent = ref.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }

    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, [counters]);

  return (
    <>
      <section ref={ref} className="bg-white flex w-full flex-col overflow-hidden items-center justify-center -mt-20 pt-24 pb-16 sm:-mt-28 sm:pt-28 sm:pb-20 max-md:max-w-full">
        <div className="w-full max-w-7xl px-2 sm:px-6 md:px-12">
          <div className="text-4xl font-baloo font-extralight text-center tracking-[-0.72px] leading-none px-4 md:px-8">
            <div className="flex flex-col items-center">
              <div className="max-w-2xl">
                <div className="flex flex-col items-center pb-3.5">
                  <div className="text-black">"{t.culminationQuantitativeResearch}."</div>
                  <div className="mt-4 bg-gradient-to-r from-[#593286] via-purple-400 to-[#FA6F40] bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient-x font-davetica-wide">- STYLY</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-12 md:mt-[58px] px-0 md:px-8">
            <div className="bg-[rgba(90,50,135,1)] pt-12 pb-12 px-4 md:px-16 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center font-baloo">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-semibold text-center tracking-[-1.2px] leading-[1.2] pb-1 drop-shadow-[0_0_12px_white] font-baloo">
                      {counters[index].count}+
                    </div>
                    <div className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-white font-medium text-center leading-tight px-1 font-baloo">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="w-full border-black border-t-2 my-0" />
    </>
  );
};

export default Stats;
