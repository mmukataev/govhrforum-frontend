"use client";
import { useEffect, useState } from 'react';
import translations from '@/translations/translations';

export default function Speakers() {
    const [speakers, setSpeakers] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const [lang, setLang] = useState("en"); // Язык по умолчанию

    // Получаем текущий <html lang="...">
    useEffect(() => {
        const htmlLang = document.documentElement.lang || "en";
        setLang(htmlLang);
    }, []);

    const updateItemsPerPage = () => {
        const width = window.innerWidth;
        if (width < 640) setItemsPerPage(1);
        else if (width < 1024) setItemsPerPage(2);
        else setItemsPerPage(4);
    };

    useEffect(() => {
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

useEffect(() => {
    const fetchSpeakers = async () => {
        try {
            const response = await fetch('https://api-govhrforum.apa.kz/api/speakers/');
            if (!response.ok) throw new Error('Failed to fetch speakers');
            const data = await response.json();
            // Сортируем по priority по убыванию (больше priority — выше в списке)
            data.sort((a, b) => b.priority - a.priority);
            setSpeakers(data);
        } catch (error) {
            console.error('Error fetching speakers:', error);
        }
    };

    fetchSpeakers();
}, []);


    const displayedSpeakers = speakers.slice(currentIndex, currentIndex + itemsPerPage);

    const nextSpeaker = () => {
        if (currentIndex + itemsPerPage >= speakers.length) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSpeaker = () => {
        if (currentIndex === 0) {
            setCurrentIndex(Math.max(speakers.length - itemsPerPage, 0));
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    // Универсальный геттер по полю
    const getLocalizedField = (obj, field) => {
        const localizedKey = `${field}_${lang}`;
        return obj[localizedKey] || obj[`${field}_en`] || ""; // fallback to en
    };

    return (
        <div id="speakers" className="container mx-auto my-[50px]">
            <h3 className="w-fit pb-[30px] mb-[40px] text-[64px] font-bold text-[var(--customaccent)] border-b-4 border-[var(--customaccent)]">
                {translations.Speakers.title[lang]}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px]">
                {displayedSpeakers.length > 0 ? (
                    displayedSpeakers.map((speaker) => (
                        <div key={speaker.id} className="flex flex-col items-center">
                            <img
                                src={speaker.photo}
                                alt={getLocalizedField(speaker, "name")}
                                className="object-cover rounded-full w-[150px] h-[150px] mb-4"
                            />
                            <h5 className="text-[18px] font-bold text-center text-[var(--customtext)]">
                                {getLocalizedField(speaker, "name")}
                            </h5>
                            <p className="text-[16px] text-center text-[var(--customtext)] opacity-75">
                                {getLocalizedField(speaker, "description")}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-center">Loading speakers...</p>
                )}
            </div>

            <div className="flex justify-center mt-[20px]">
                <button
                    onClick={prevSpeaker}
                    className="p-2 bg-[var(--customaccent)] text-white rounded-md mx-2"
                >
                    <img src="/arrow-ios-left.svg" alt="Previous" className="w-5 h-5" />
                </button>
                <button
                    onClick={nextSpeaker}
                    className="p-2 bg-[var(--customaccent)] text-white rounded-md mx-2"
                >
                    <img src="/arrow-ios-right.svg" alt="Next" className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
