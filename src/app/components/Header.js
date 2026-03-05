"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import translations from "@/translations/translations";

export default function Header() {
  const [bgColor, setBgColor] = useState("transparent");
  const [logoSrc, setLogoSrc] = useState("/logo.svg");
  const [currentLang, setCurrentLang] = useState("en"); // Состояние для текущего языка
  const [lang, setLang] = useState("en"); // Язык по умолчанию

    // Получаем текущий <html lang="...">
    useEffect(() => {
        const htmlLang = document.documentElement.lang || "en";
        setLang(htmlLang);
    }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("white");
        setLogoSrc("/logoBlue.svg");
      } else {
        setBgColor("transparent");
        setLogoSrc("/logo.svg");
      }
    };

    // При монтировании: сразу проверить текущий scrollY
    handleScroll();

    // Устанавливаем язык из <html lang="en">
    setCurrentLang(document.documentElement.lang);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header
      id="header"
      className={`fixed top-0 py-[20px] z-50 w-full transition-all duration-300 ${bgColor === "white" ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto flex items-center justify-between h-[70px]">
        <Link href={`/${currentLang}/#home`} className="flex items-center">
          <img src={logoSrc} alt="Logo" className="w-[180px]" />
        </Link>

        <nav className={`xl:flex hidden gap-[25px] text-[18px]  ${bgColor === "white" ? "text-[var(--customtext)]" : "text-white"}`}>
          <Link href={`/${currentLang}/#about`}>{translations.Header.about[lang]}</Link>
          <Link href={`/${currentLang}/#section`}>{translations.Header.sections[lang]}</Link>
          <Link href={`/${currentLang}/#speakers`}>{translations.Header.speakers[lang]}</Link>
          <Link href={`/${currentLang}/#news`}>{translations.Header.news[lang]}</Link>
        </nav>

        <div className="flex items-center gap-[20px]">
          <LanguageSwitcher currentLang={currentLang} isScrolled={bgColor === "white"} />
                    {/* <Link
            href={`https://apa.kz/${currentLang}`}
            className="px-[30px] h-[50px] flex text-white text-[20px] items-center rounded-[360px] bg-[var(--customaccent)]"
          >
            {translations.Header.registration[lang]}
          </Link> */}
        </div>
      </div>
    </header>
  );
}
