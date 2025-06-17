"use client";

import { useState, useEffect } from "react";
import translations from "@/translations/translations";

export default function Sections() {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    setLang(document.documentElement.lang || "en");
  }, []); 

  const { title, section, items } = translations.Sections;

  return (
    <div id="section" className="container mx-auto mt-[70px]">
      <h3 className="w-fit pb-[30px] mb-[40px] text-[64px] font-bold text-[var(--customaccent)] border-b-4 border-[var(--customaccent)]">
        {translations.Sections.title[lang]}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px]">
        {items.map(({ id, title, description, hovertext, image }) => (
          <div
            key={id}
            className="group w-full relative flex flex-col justify-end p-[15px] h-[650px] bg-cover bg-center rounded-[10px] overflow-hidden"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="h-[200px] z-9">
              <p className="text-[24px] text-[#bcbcbc] uppercase leading-[26px] z-2">
                {description[lang] || description.en}
              </p>
              <h5
                className={`${
                  lang === 'kz' || lang === 'ru' ? 'text-[30px] leading-[36px]' : 'text-[50px] leading-[52px]'
                } font-bold text-white uppercase z-2 mt-[10px]`}
              >
                  {title[lang] || title.en}
              </h5>
            </div>


            <span className="opacity-[0.5] uppercase transform -rotate-90 inline-block w-fit origin-right text-[100px] text-white absolute top-0 right-[40px] leading-[85px]">
              {section[lang] || title.en}&nbsp;#{id}
            </span>

            <div className="absolute w-full h-full z-1 left-0 top-0" style={{ backgroundImage: 'url(/overlaymain.svg)' }}></div>
            <div className="absolute w-full h-full z-1 left-0 top-0" style={{ backgroundImage: 'url(/overlaymain.svg)' }}></div>

            <div className="w-full h-full flex items-center justify-center bg-[rgba(4,179,179,0.9)] absolute top-0 left-0 z-10 p-[20px]
              opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto
              transition-all duration-500 ease-in-out">
              <p className="text-white font-bold text-[29px] text-left whitespace-pre-line">
                {hovertext[lang] || hovertext.en}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
