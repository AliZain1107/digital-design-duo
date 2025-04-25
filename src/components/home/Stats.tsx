
import React, { useEffect, useRef, useState } from "react";

const useCountUp = (end: number, duration: number = 2000) => {
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
  const ref = useRef<HTMLDivElement>(null);
  const stats = [
    { value: 8000, label: "hours of development" },
    { value: 25, label: "Top Designers approved" },
    { value: 250, label: "Companies trusted" },
    { value: 32, label: "Research articles" },
  ];

  const counters = stats.map(stat => useCountUp(stat.value));

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} className="bg-[rgba(242,242,242,1)] flex w-full flex-col overflow-hidden items-center justify-center py-24 max-md:max-w-full">
      <div className="flex w-[1799px] max-w-full flex-col overflow-hidden items-center px-20 max-md:px-5">
        <div className="w-[1280px] max-w-full">
          <div className="text-4xl text-[rgba(89,50,134,1)] font-extralight text-center tracking-[-0.72px] leading-none px-8 max-md:max-w-full max-md:px-5">
            <div className="flex w-full flex-col items-center max-md:max-w-full">
              <div className="w-[768px] max-w-full">
                <div className="flex w-full flex-col items-center pl-8 pr-[23px] max-md:max-w-full max-md:px-5">
                  <div className="flex max-w-full w-[713px] flex-col items-stretch pb-3.5 px-[49px] max-md:px-5">
                    <div className="max-md:max-w-full">
                      STYLY: Not chance, but the culmination of{" "}
                    </div>
                    <div className="self-center mt-[15px] max-md:max-w-full">
                      rigorous quantitative research.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-[58px] px-8 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="bg-[rgba(90,50,135,1)] flex w-full gap-8 flex-wrap pt-[63px] pb-16 px-16 rounded-2xl max-md:max-w-full max-md:px-5">
              {stats.map((stat, index) => (
                <div key={index} className="relative min-w-60 flex-1 shrink basis-[0%]">
                  <div className="z-0 w-full">
                    <div className="w-full text-6xl text-white font-semibold whitespace-nowrap text-center tracking-[-1.2px] leading-[1.2] pb-px max-md:text-[40px]">
                      {counters[index].count}+
                    </div>
                    <div className="w-full mt-[11px]">
                      <div className="w-full text-lg text-white font-medium text-center leading-loose pb-px">
                        {stat.label}
                      </div>
                      <div className="w-full pt-[18px]">
                        <div className="flex min-h-7 w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-0 flex min-h-[158px] max-w-full w-[248px] top-px bottom-0 inset-x-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
