import React from "react";

const AiBedroomDesign: React.FC = () => {
  return (
    <div className="flex flex-col items-center px-4 py-10 space-y-12">
      

      <div className="max-w-3xl space-y-6 text-gray-800 text-sm">
        <div>
          <h2 className="text-lg font-semibold">Table of Contents:</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Introduction</li>
            <li>AI in Bedroom Design</li>
            <li>Styly.io Overview</li>
            <li>Eight AI-Powered Bedroom Designs</li>
            <li>Expert Design Tips</li>
            <li>Conclusion</li>
          </ul>
        </div>

        <section>
          <h2 className="text-lg font-semibold">Introduction</h2>
          <p>
            Bedrooms are our sanctuaries. According to the National Sleep Foundation, we spend about one-third of our lives there. It’s vital to create a space that fosters both comfort and style. AI tools like Styly.io are changing the game in bedroom design.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">AI in Bedroom Design</h2>
          <p>
            A recent study from Interior Design magazine found AI tools cut down initial concept time by 60%. This gives designers more room to personalize and perfect their designs.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Styly.io: Your AI-Powered Bedroom Design Companion</h2>
          <p>
            Whether you're a designer or a homeowner, Styly.io helps you create beautiful bedroom spaces with ease. It combines advanced AI with intuitive design.
          </p>
        </section>

        <img
          src="https://framerusercontent.com/images/VdJeNlAZKmKbGqtOEU5p1QGZs.jpg"
          alt="ai bedroom sample"
          className="w-full h-[500px] rounded-lg object-cover"
        />

        <section>
          <h2 className="text-lg font-semibold">Eight AI-Powered Bedroom Designs</h2>

          {[
            {
              title: "Scandinavian Serenity",
              prompt:
                "Scandinavian bedroom: minimalist design, light wood furniture, white walls, natural light...",
              img: "https://framerusercontent.com/images/pi01A97j7UMNxBcRpREKZzpluk.jpg",
            },
            {
              title: "Modern Luxury Suite",
              prompt:
                "Contemporary luxury bedroom: high ceilings, champagne metallic details, smart lighting...",
              img: "https://framerusercontent.com/images/u6iOWwSX4DlBxdSBUFhhEYZ9Vg.jpg",
            },
            {
              title: "Coastal Retreat",
              prompt:
                "Coastal bedroom: soft blues and sandy beiges, sheer curtains, beach vibes...",
              img: "https://framerusercontent.com/images/5AnXg7FUUJShc9jcuWsxPdPcwM.jpg",
            },
            {
              title: "Urban Industrial",
              prompt:
                "Industrial chic: exposed brick, steel-frame windows, leather accents...",
              img: "https://framerusercontent.com/images/39xj9Xn6JWU2zJ8TvjHwouLorA.jpg",
            },
            {
              title: "Bohemian Dreams",
              prompt:
                "Boho vibes: macramé, plants, vintage rug, cozy lighting...",
              img: "https://framerusercontent.com/images/d5weBH7LJbTNZtkewc9uSdymVI0.jpg",
            },
            {
              title: "Japanese Zen",
              prompt:
                "Japanese minimalist: tatami mats, bamboo accents, peaceful harmony...",
              img: "https://framerusercontent.com/images/GblR3QXJexhIW4uUjN6bGD634.jpg",
            },
            {
              title: "Mid-Century Modern",
              prompt:
                "Mid-century modern: walnut, geometric patterns, iconic pieces...",
              img: "https://framerusercontent.com/images/hS9OFnYRvhyaafYaA165rVxK4k.jpg",
            },
            {
              title: "Contemporary Glam",
              prompt:
                "Glamorous style: velvet headboard, crystal lighting, mirrored furniture...",
              img: "https://framerusercontent.com/images/Uam4DfciQaVVOqsa3jCwsTOd5g.jpg",
            },
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="font-semibold text-base">{idx + 1}. {item.title}</h3>
              <p className="text-sm">Prompt: {item.prompt}</p>
              <img src={item.img} alt={item.title} className="rounded-md h-[500px] w-64" />
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-lg font-semibold">Expert Design Tips</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Consider natural light when choosing colors</li>
            <li>Ensure walkable space around furniture</li>
            <li>Layer lighting for flexibility</li>
            <li>Include hidden or built-in storage</li>
            <li>Use calming, sleep-promoting materials</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Negative Prompt Guidelines</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Avoid overcrowded or cluttered layouts</li>
            <li>Keep lighting consistent and natural-looking</li>
            <li>Stick to a unified design style</li>
            <li>Maintain proper scale and proportion</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Sources and Research</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <a href="https://www.thensf.org/" className="text-blue-600" target="_blank">National Sleep Foundation</a>
            </li>
            <li>
              <a href="https://interiordesign.net/" className="text-blue-600" target="_blank">Interior Design Magazine</a>
            </li>
            <li>
              <a href="https://capen.asid.org/news/asid-highlights-growth-of-interior-design-practice-with-2024-state-of-interior-design-report" className="text-blue-600" target="_blank">ASID Annual Report</a>
            </li>
            <li>
              <a href="https://www.health.harvard.edu/topics/sleep" className="text-blue-600" target="_blank">Harvard Health Sleep Studies</a>
            </li>
          </ul>
        </section>

        <img
        src="https://framerusercontent.com/images/QHngMSH11seHyWEaHUx8lIoGQA.png"
        alt="footer banner"
        className="w-full h-[500px] max-w-3xl object-cover rounded-lg"
      />


        <section>
          <h2 className="text-lg font-semibold">Conclusion</h2>
          <p>
            With Styly.io, you can design your bedroom exactly how you imagine it. From calm Scandinavian vibes to glamorous hotel-like luxury, the power is in your hands—backed by smart AI.
          </p>



          <p>Keywords: bedroom design ai, ai room design, interior ai, bedroom ideas, room planner, ai interior design, bedroom decor ideas, small bedroom design, master bedroom ideas, ai room planner, interior design ai, bedroom inspiration, modern bedroom design, minimalist bedroom, luxury bedroom design</p>
        </section>

        
        <section className="pt-6 border-t border-gray-200 text-center">
          <p className="font-semibold">Follow Us here!</p>
          <div className="space-x-4 mt-2">
            <a href="https://www.instagram.com/stylyio/" target="_blank" className="text-blue-500">Instagram</a>
            <a href="../" target="_blank" className="text-blue-500">LinkedIn</a>
            <a href="https://www.facebook.com/profile.php?id=61558770901420" target="_blank" className="text-blue-500">Facebook</a>
          </div>
        </section>
      </div>

      
    </div>
  );
};

export default AiBedroomDesign;
