import React, { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "What makes Styly AI unique in the world of interior design?",
    answer:
      "Styly AI stands out by combining cutting-edge artificial intelligence with principles from legendary architects like Le Corbusier and Zaha Hadid. Our platform requires no downloads or special tools, making professional interior design accessible to everyone from real estate professionals to homeowners.",
  },
  {
    id: 2,
    question:
      "Can anyone use Styly AI, or is it designed specifically for professionals?",
    answer:
      "Styly AI is designed for everyone! While it's powerful enough for real estate professionals and interior designers, it's also intuitive enough for homeowners and design enthusiasts with no prior experience. Our simple three-step process makes it accessible to users of all skill levels.",
  },
  {
    id: 3,
    question:
      "How does Styly AI assist users in visualizing their design ideas?",
    answer:
      "Simply upload a photo of your empty space, select your design preferences and style, and our AI will transform it into a professionally designed interior. You can experiment with different styles, furniture arrangements, and color schemes until you find the perfect look for your space.",
  },
  {
    id: 4,
    question: "Does Styly AI offer a variety of design styles to choose from?",
    answer:
      "Absolutely! Styly AI offers a wide range of design styles from modern minimalist to classic traditional, industrial, Scandinavian, mid-century modern, and many more. You can also customize elements within each style to create a unique look that perfectly matches your vision.",
  },
  {
    id: 5,
    question: "What kind of support does Styly AI provide to its users?",
    answer:
      "We offer comprehensive support including video tutorials, a detailed knowledge base, and responsive customer service. Our team is available to help with any questions or challenges you might encounter while using our platform. Plus, our blog regularly features design tips and inspiration.",
  },
];

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="bg-white flex w-full flex-col overflow-hidden items-center justify-center px-10 py-20 max-md:max-w-full max-md:px-5">
      <div className="flex w-[1629px] max-w-full flex-col overflow-hidden items-center justify-center">
        <div className="flex w-full flex-col overflow-hidden items-center text-base font-normal leading-[1.2] px-20 max-md:px-5">
          <div className="flex w-[446px] max-w-full flex-col items-center">
            <div className="w-[98px] text-[rgba(250,111,64,1)]">
              <div className="w-full">How it works</div>
            </div>
            <h2 className="w-[120px] max-w-full text-[50px] text-[rgba(51,51,51,1)] font-extrabold whitespace-nowrap text-center tracking-[-2.6px] mt-[9px] max-md:text-[40px]">
              <div className="w-full pb-px max-md:text-[40px]">FAQs</div>
            </h2>
            <div className="self-stretch text-black mt-[9px] max-md:max-w-full">
              Everything you need to know about the product and billing.
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center mt-2.5">
          <div className="bg-[rgba(242,242,242,1)] self-stretch min-w-60 w-full overflow-hidden flex-1 shrink basis-[0%] my-auto pb-0.5 px-5 rounded-[20px] max-md:max-w-full">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="flex w-full items-center gap-6 overflow-hidden flex-wrap pl-2.5 py-5 max-md:max-w-full"
              >
                <div
                  className="self-stretch min-w-60 text-base text-[rgba(51,51,51,1)] font-semibold flex-1 shrink basis-[0%] my-auto max-md:max-w-full cursor-pointer"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="w-full max-md:max-w-full">
                    {item.question}
                  </div>
                  {openItem === item.id && (
                    <div className="w-full text-sm font-normal mt-3 text-[rgba(102,102,102,1)] max-md:max-w-full">
                      {item.answer}
                    </div>
                  )}
                </div>
                <button
                  className="self-stretch flex min-h-[23px] flex-col items-stretch justify-center w-[22px] my-auto"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={openItem === item.id}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <img
                    src={
                      openItem === item.id
                        ? "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/77380469c6e02d866dd12bdc3fd46696122b057d?placeholderIfAbsent=true"
                        : "https://cdn.builder.io/api/v1/image/assets/a22916bd9acc4a4986d78d713f5de3db/5121e61296999c22cf69c321d98030701840c3b8?placeholderIfAbsent=true"
                    }
                    alt={openItem === item.id ? "Collapse" : "Expand"}
                    className="aspect-[0.96] object-contain w-[22px] flex-1"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
