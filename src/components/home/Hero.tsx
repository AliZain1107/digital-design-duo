import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center px-5 py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Welcome banner */}
        <div
          className="px-6 py-3 rounded-full text-white font-medium text-lg shadow-sm mb-10"
          style={{
            background: "linear-gradient(90deg, rgba(89,50,134,1) 0%, rgba(250,111,64,1) 100%)",
          }}
        >
          Welcome to the Future of Design
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none mb-6">
          <div className="mb-1">#1 most used</div>
          <div className="mb-1">AI design tool</div>
          <div className="mb-1">for</div>
          <div className="text-purple-700">modern spaces</div>
        </h1>

        {/* Description */}
        <div className="max-w-xl text-center text-[rgba(44,30,73,1)] mb-6">
          <p className="text-lg">
            Redesign empty rooms into styled, market-ready interior —
            <br />
            for real estate, renovation, and retail. <span className="font-bold">No tools, no downloads. Just results</span>.
          </p>
        </div>

        {/* Award badge - Inline SVG */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center px-2 py-1 bg-white rounded-full border border-purple-200 shadow-sm">
            <svg className="w-10 h-10 mr-2 text-purple-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M12.9659 3.12645L14.6805 4.49893C14.9256 4.69594 15.2521 4.78842 15.5708 4.75335L17.8942 4.52815C18.42 4.47162 18.9039 4.82492 19.0267 5.33861L19.5341 7.6186C19.6014 7.93422 19.7958 8.20723 20.0777 8.38348L22.0229 9.62853C22.4703 9.9151 22.6532 10.4636 22.4724 10.9486L21.629 13.1322C21.5194 13.4335 21.5194 13.7655 21.629 14.0667L22.4724 16.2504C22.6532 16.7354 22.4703 17.2839 22.0229 17.5705L20.0777 18.8155C19.7958 18.9918 19.6014 19.2648 19.5341 19.5804L19.0267 21.8604C18.9039 22.3741 18.42 22.7274 17.8942 22.6708L15.5708 22.4456C15.2521 22.4106 14.9256 22.5031 14.6805 22.7001L12.9659 24.0725C12.5916 24.3775 12.0632 24.3775 11.6889 24.0725L9.9743 22.7001C9.72922 22.5031 9.40275 22.4106 9.08406 22.4456L6.76063 22.6708C6.23479 22.7274 5.75094 22.3741 5.62814 21.8604L5.12075 19.5804C5.05341 19.2648 4.85909 18.9918 4.57716 18.8155L2.63194 17.5705C2.18453 17.2839 2.00166 16.7354 2.18248 16.2504L3.02585 14.0667C3.13542 13.7655 3.13542 13.4335 3.02585 13.1322L2.18248 10.9486C2.00166 10.4636 2.18453 9.9151 2.63194 9.62853L4.57716 8.38348C4.85909 8.20723 5.05341 7.93422 5.12075 7.6186L5.62814 5.33861C5.75094 4.82492 6.23479 4.47162 6.76063 4.52815L9.08406 4.75335C9.40275 4.78842 9.72922 4.69594 9.9743 4.49893L11.6889 3.12645C12.0632 2.82145 12.5916 2.82145 12.9659 3.12645Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-bold text-purple-800">#1 AI INTERIOR</span>
              <span className="text-sm font-bold text-purple-800">APP OF 2024</span>
              <div className="flex text-orange-500 text-xs mt-0.5">★★★★★</div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <Link
          to="/upload"
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg mb-6"
        >
          Upload a Photo to Start
        </Link>

        {/* Supporting text */}
        <p className="text-gray-500 font-semibold text-sm">
          Supporting 20,000+ real estate pros & designers & Homeowners
        </p>
      </div>
    </section>
  );
};

export default Hero;
