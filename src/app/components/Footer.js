"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopyright } from "@fortawesome/free-solid-svg-icons";
import translations from "@/translations/translations";

export default function Footer() {
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    // Устанавливаем язык только на клиенте
    if (typeof document !== "undefined") {
      setCurrentLang(document.documentElement.lang);
    }
  }, []);

  return (
    <footer className="container mx-auto text-white pt-[20px] pb-[40px]">
      <div className="flex items-center justify-between h-[70px]">
        <Link href={`/${currentLang}/#home`} className="flex items-center">
          <img src="/logoBlue.svg" alt="Logo" className="w-[180px]" />
        </Link>

        <nav className="lg:flex hidden gap-[25px] text-[18px] text-[var(--customtext)]">
          <Link href={`/${currentLang}/#about`}>{translations.Header.about[currentLang]}</Link>
          <Link href={`/${currentLang}/#section`}>{translations.Header.sections[currentLang]}</Link>
          <Link href={`/${currentLang}/#speakers`}>{translations.Header.speakers[currentLang]}</Link>
          <Link href={`/${currentLang}/#news`}>{translations.Header.news[currentLang]}</Link>
        </nav>

        <Link
          href={`/${currentLang}/registration`}
          className="px-[30px] h-[50px] flex text-white text-[20px] items-center rounded-[360px] bg-[var(--customaccent)]"
        >
          {translations.Header.registration[currentLang]}
        </Link>
      </div>

      <div className="text-sm mx-auto flex items-center flex-col gap-[10px] mt-[20px] text-gray-400">
        {/* <div className="flex gap-[5px] items-center">
          <FontAwesomeIcon icon={faEnvelope} className=" w-[12px] h-[12px]" />
          <p>info@HR.forum</p>
        </div> */}
        <div className="flex gap-[5px] items-center">
          <FontAwesomeIcon icon={faCopyright} className="w-[12px] h-[12px]" />
          <p>{translations.Header.footer[currentLang]}</p>
        </div>
      </div>
    </footer>
  );
}
