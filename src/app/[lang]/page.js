// app/[lang]/page.js
import Link from "next/link";
import Sections from "@/components/Sections";
import Partners from "@/components/Partners";
import Speakers from "@/components/Speakers";
import News from "@/components/News";
import translations from "@/translations/translations";

export default function Home({ params }) {
  const { lang } = params;

  return (
    <main>
      <div id="home" className="relative z-0 h-screen bg-[#007aff] flex ">
        <div className="z-[4] relative container mx-auto my-auto flex flex-col gap-[30px]">
          <div className="flex flex-col lg:flex-row gap-[10px] xl:items-center sm:items-start">
            <p className="p-[40px] w-fit uppercase text-white bg-[rgba(255,255,255,0.1)] xl:text-[26px] text-[22px] rounded-[10px] whitespace-pre-line">{translations.Main.description[lang]}</p>
            <h1 className="uppercase text-white xl:text-[68px] text-[50px] xl:leading-[68px] leading-[50px] whitespace-pre-line ">{translations.Main.title[lang]}</h1>
          </div>

            {/* <Link href={translations.Main.buttonLink[lang]} className="px-[50px] h-[70px] w-fit flex text-white text-[20px] items-center rounded-[360px] bg-[var(--customaccent)]">
                {translations.Main.button[lang]}
                <object data="/program.svg" className="ml-[10px] w-[20px] h-[20px]" />
            </Link> */}

        </div>

            <img
              src="/ornament-white.svg"
              alt="ornament"
              className="w-[300px] h-full absolute z-3 opacity-[10%]  object-cover top-0 right-0"
            />
        <img
          src="/overlaymain.svg"
          alt="Logo"
          className="z-[2] absolute absolute top-0 left-0 w-full h-full object-cover"
        />
        <video
          className="z-[1] absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/mainvideo.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      </div>

      <div id="about" className="container mx-auto grid xl:grid-cols-2 grid-cols-1 items-center gap-[30px] mt-[70px]">
        <div className="w-full">
          <h3 className="w-fit pb-[30px] mb-[40px] text-[64px] font-bold text-[var(--customaccent)] border-b-4 border-[var(--customaccent)]">
            {translations.About.title[lang]}
          </h3>
          <p className="text-[var(--customtext)] text-[18px] whitespace-pre-line text-justify">
            {translations.About.description[lang]}
          </p>
        </div>

        <img
          src="/logoBlue.svg"
          alt="Logo"
          className="w-full h-full object-content fill-[#000]"
        />
      </div>

    <Sections />
    <Speakers />
    <News />
    <Partners />

      <div className="container mx-auto flex flex-col md:flex-row mt-[100px] h-full">
          <iframe
            src="https://www.google.com/maps?q=Казахстан,+Астана,+пр-т.+Абая+33&output=embed"
            className="w-full h-[450px] border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <img src="/academy.jpg" alt="Картина АГУ" className="w-full md:max-w-2/4 h-[450px] object-cover fill-[#000]" />
        </div>
    </main>
  );
}

export async function generateStaticParams() {
  return ["en", "ru", "kz"].map(lang => ({ lang }));
}
