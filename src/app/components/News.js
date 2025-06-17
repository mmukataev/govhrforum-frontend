"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import translations from '@/translations/translations';

export default function News() {
    const [newsItems, setNewsItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [columns, setColumns] = useState(4);
    const [lang, setLang] = useState("en"); // Язык по умолчанию

    // Получаем текущий <html lang="...">
    useEffect(() => {
        const htmlLang = document.documentElement.lang || "en";
        setLang(htmlLang);
    }, []);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://api-govhrforum.apa.kz/api/news/');
                if (!response.ok) throw new Error('Failed to fetch news');
                const data = await response.json();
                setNewsItems(data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    // Обновление колонок в зависимости от ширины экрана
    useEffect(() => {
        const updateColumns = () => {
            const width = window.innerWidth;
            if (width < 640) setColumns(1);
            else if (width < 1024) setColumns(2);
            else setColumns(4);
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    const next = () => {
        if (newsItems.length === 0) return;
        setCurrentIndex((prev) => (prev + 1) % newsItems.length);
    };

    const prev = () => {
        if (newsItems.length === 0) return;
        setCurrentIndex((prev) =>
            (prev - 1 + newsItems.length) % newsItems.length
        );
    };

    const visibleNews = [];
    for (let i = 0; i < columns; i++) {
        const index = (currentIndex + i) % newsItems.length;
        visibleNews.push(newsItems[index]);
    }

    return (
        <div id='news' className="container mx-auto">
            <h3 className="w-fit pb-[30px] mb-[40px] text-[64px] font-bold text-[var(--customaccent)] border-b-4 border-[var(--customaccent)]">
                {translations.News.title[lang]}
            </h3>

            {/* Гибкий ряд с фиксированным числом карточек */}
            <div className="flex gap-[15px] overflow-hidden">
                {visibleNews.map((news, i) => (
                    news && (
                        <Link
                            key={news.id || i}
                            href={news.url_en || "#"}
                            className="bg-white rounded-lg hover:shadow-xl flex-shrink-0 w-full flex items-end sm:w-[calc(50%-8px)] lg:w-[calc(25%-11px)] h-[450px] transition-shadow bg-cover bg-center group overflow-hidden"
                            
                            style={{ backgroundImage: `url(${news.img})` }}
                        >
                            <div className="p-[5px] pt-[120px] pb-[10px] w-full bg-gradient-to-t from-black group-hover:from-[var(--customaccent)] to-transparent">
                                <h2 className="text-[16px] text-white font-bold line-clamp-2">
                                    {news.title_en}
                                </h2>
                            </div>
                        </Link>
                    )
                ))}
            </div>

            {/* Навигационные кнопки */}
            <div className="flex justify-center mt-6 gap-4">
                <button
                    onClick={prev}
                    className="p-2 bg-[var(--customaccent)] text-white rounded-md mx-2"
                >
                    <img src="/arrow-ios-left.svg" alt="Previous" className="w-5 h-5" />
                </button>
                <button
                    onClick={next}
                    className="p-2 bg-[var(--customaccent)] text-white rounded-md mx-2"
                >
                    <img src="/arrow-ios-right.svg" alt="Next" className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
