import Registration from "@/[lang]/registration/page";

const translations = {
    Header: {
        about: {
            en: "About",
            ru: "О форуме",
            kz: "Форум туралы"
        },
        sections: {
            en: "Sessions",
            ru: "Сессии",
            kz: "Сессиялар"
        },
        speakers: {
            en: "Speakers",
            ru: "Спикеры",
            kz: "Спикерлер"
        },
        news: {
            en: "News",
            ru: "Новости",
            kz: "Жаңалықтар"
        },
        registration: {
            en: "Register",
            ru: "Зарегистрироваться",
            kz: "Тіркелу"
        },
        footer: {
            en: "2025 All rights reserved.",
            ru: "2025 Все права защищены.",
            kz: "2025 Құқықтардың бәрі қорғалған."
        }
    },

    Main: {
        title: {
            en: "NEW SYSTEMS\nMODERN SERVICES\nNOVEL SOLUTIONS",
            ru: "Новые системы\nСовременные УСЛУГИ\nИнновационные решения",
            kz: "Жаңа жүйелер\nЗАМАНАУИ қызметтер\nТЫҢ ШЕШІМДЕР"
        },
        description: {
            en: "JUNE 20,\n2025\nAstana",
            ru: "20 ИЮНЯ\n2025\nАстана",
            kz: "20 маусым\n2025\nАстана"
        },
        button: {
            en: "Program",
            ru: "Программа",
            kz: "Бағдарлама"
        },
        buttonLink: {
            en: "/programs/En.pdf",
            ru: "/programs/Ru.pdf",
            kz: "/programs/Kz.pdf"
        },
    },

    About: {
        title: {
            en: "About the Forum", 
            ru: "О форуме",
            kz: "Форум туралы"
        },
        description: {
            en: "GovHR Forum is a premier platform for the exchange of best practices, exploration of cutting-edge technologies, and development of forward-looking approaches to human resource management in the public sector.\n\nBringing together public sector leaders, IT professionals, HR practitioners, and digital transformation experts, the Forum creates a space for meaningful dialogue on how emerging technologies and innovative services are reshaping government HR processes.\n\nMore than just an event, GovHR Forum is a catalyst for those committed to advancing public HR services, driving smart solutions, and building transparent, agile, and high-performing human capital systems.\n\nGovHR Forum — empowering smart, transparent, and future-ready public administration.",
            ru: "GovHR Форум - это ведущая платформа для обмена лучшими практиками, изучения передовых технологий и выработки прогрессивных подходов в управлении человеческими ресурсами в государственном секторе.\n\nОбъединяя лидеров государственного управления, IT-специалистов, HR-практиков и экспертов по цифровизации, Форум создает пространство для конструктивного диалога по вопросам внедрения современных технологий и инновационных решений в трансформацию кадровых процессов в системе государственного управления.\n\nGovHR Форум — это важный катализатор для всех, кто стремится совершенствовать государственные HR-сервисы, внедрять интеллектуальные решения и формировать прозрачную, гибкую и эффективную систему управления человеческим капиталом.\n\nGovHR Форум — к эффективному и прозрачному государственному управлению будущего.",
            kz: "GovHR Форумы – бұл мемлекеттік секторда адам ресурстарын басқару саласындағы заманауи тәсілдерді дамытуға, үздік тәжірибелермен алмасуға, сондай-ақ цифрлық шешімдерді зерделеуге арналған кәсіби алаң.\n\nФорум мемлекеттік басқару саласының көшбасшыларын, IT мамандарын, HR практиктері мен цифрландыру саласындағы сарапшыларды біріктіре отырып, мемлекеттік басқару жүйесіндегі кадрлық үдерістерді трансформациялау мәселелерінде заманауи технологиялар мен инновациялық шешімдерді енгізу бойынша конструктивті диалог жүргізуге мүмкіндік береді.\n\nGovHR Форумы – мемлекеттік кадр қызметін жетілдіруге, заманауи HR құралдарын енгізуге және адами ресурстарды басқару жүйесін жаңа сапалық деңгейге көтеруге бағытталған маңызды катализатор.\n\nGovHR Форумы — болашақтың тиімді әрі ашық мемлекеттік басқаруына бастар жол."
        },
    },

    Sections: {
        section: {
            en: "SESSION",
            ru: "СЕССИЯ",
            kz: "СЕССИЯ"
        },
        title: {
            en: "Sessions",
            ru: "Сессии",
            kz: "Сессия"
        },
        items: [
            {
                id: 1,
                title: {
                    en: "AI IN GOV",
                    ru: "ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ В ГОСУДАРСТВЕННОМ УПРАВЛЕНИИ",
                    kz: "МЕМЛЕКЕТТІК БАСҚАРУДАҒЫ ЖАСАНДЫ ИНТЕЛЛЕКТ"
                },
                description: {
                    en: "Interactive Panel:",
                    ru: "Интерактивная панель:",
                    kz: "Интерактивті панель:"
                },
                hovertext: {
                    en: "Integrating Artificial Intelligence into the Civil Service",
                    ru: "Интеграция искусственного интеллекта в систему государственной службы",
                    kz: "Мемлекеттік қызметке жасанды интеллектіні интеграциялау"
                },
                image: "/sections/1.jpg",
            },
            {
                id: 2,
                title: {
                    en: "UNIFIED HR SYSTEMS",
                    ru: "ЕДИНЫЕ HR-СИСТЕМЫ",
                    kz: "БІРТҰТАС КАДР ЖҮЙЕЛЕРІ"
                },
                description: {
                    en: "Fishbowl Session:",
                    ru: "Fishbowl сессия:",
                    kz: "Fishbowl сессия:"
                },
                hovertext: {
                    en: "Establishing Unified Human Resource Management Systems",
                    ru: "Создание единой системы управления человеческими ресурсами",
                    kz: "Персоналды басқарудың біртұтас жүйелерін қалыптастыру"
                },
                image: "/sections/2.jpg",
            },
            {
                id: 3,
                title: {
                    en: "HR Analytics",
                    ru: "HR-АНАЛИТИКА",
                    kz: "HR АНАЛИТИКА"
                },
                description: {
                    en: "Foresight Session:",
                    ru: "Форсайт сессия:",
                    kz: "Форсайт сессия: "
                },
                hovertext: {
                    en: "Data-Driven Proactive HR Development and Strategic HR Planning",
                    ru: "Формирование HR на основе данных и стратегическое планирование человеческих ресурсов",
                    kz: "Деректерге негізделген проактивті HR қалыптастыру және адам ресурстарын стратегиялық жоспарлау"
                },
                image: "/sections/3.jpg",
            },
            {
                id: 4,
                title: {
                    en: "Advanced Training System",
                    ru: "ПЕРЕДОВАЯ СИСТЕМА ОБУЧЕНИЯ",
                    kz: "ОҚЫТУДЫҢ ОЗЫҚ ЖҮЙЕСІ"
                },
                description: {
                    en: "Interactive Panel:",
                    ru: "Интерактивная панель:",
                    kz: "Интерактивті панель: "
                },
                hovertext: {
                    en: "Training and Competence Development for Civil Servants",
                    ru: "Обучение и развитие компетенций государственных служащих",
                    kz: "Мемлекеттік қызметкерлерді оқыту және құзыреттерін жетілдіру"
                },
                image: "/sections/4.jpg",
            }
        ]
    },

    Speakers: {
        title: {
            en: "Speakers",
            ru: "Спикеры",
            kz: "Спикерлер"
        }
    },

    News: {
        title: {
            en: "News",
            ru: "Новости",
            kz: "Жаңалықтар"
        },
        items: [
            {
                id: 1,
                title: "GovHR Forum 2023",
                date: {
                    en: "October 10, 2023",
                    ru: "10 октября 2023",
                    kz: "10 қазан 2023"
                },
                description: "The Imperative of Diversifying Green Energy Sources: Is Kazakhstan the Key to Europe’s Sustainable Future?",
                url: "https://www.govhrforum.com",
                image: "/news/1.jpg",
            }
        ]
    },
    
    Partners: {
        title: {
            en: "Partners",
            ru: "Партнеры",
            kz: "Партнеры"
        },
        items: [
            {
                id: 1,
                url: {
                    en: "https://www.gov.kz/memleket/entities/qyzmet?lang=en",
                    ru: "https://www.gov.kz/memleket/entities/qyzmet?lang=ru",
                    kz: "https://www.gov.kz/memleket/entities/qyzmet?lang=kk"
                },
                image: "/АДГС.png",
            },
            {
                id: 2,
                url: {
                    en: "https://www.apa.kz/en/",
                    ru: "https://www.apa.kz/ru/",
                    kz: "https://www.apa.kz/kz/"
                },
                image: "/АГУ.png",
            },
            {
                id: 3,
                url: {
                    en: "https://www.astanacivilservicehub.org/en",
                    ru: "https://www.astanacivilservicehub.org/ru",
                    kz: "https://www.astanacivilservicehub.org/kk"
                },
                image: "/ACSH.png",
            }
        ]
    },

    Registration: {
        title: {
            en: "New Systems, Modern Services, Novel Solutions",
            ru: "Новые системы, современные сервисы, инновационные решения",
            kz: "ЖАҢА ЖҮЙЕЛЕР, ЗАМАНАУИ ҚЫЗМЕТТЕР, ТЫҢ ШЕШІМДЕР"
        },
        description: {
            en: "June 20, 2025 | Astana, Abay 33A",
            ru: "20 июня 2025 | Астана, Абая 33А",
            kz: "20 МАУСЫМ 2025 | АСТАНА, АБАЙ 33А"
        },
        name: {
            en: "Name",
            ru: "Имя",
            kz: "Аты"
        },
        surname: {
            en: "Surname",
            ru: "Фамилия",
            kz: "Тегі"
        },
        patronymic: {
            en: "Patronymic",
            ru: "Отчество",
            kz: "Әкесінің аты"
        },
        organiztion: {
            en: "Organization",
            ru: "Организация",
            kz: "Ұйым атауы"
        },
        position: {
            en: "Position",
            ru: "Должность",
            kz: "Лауазымы"
        },
        country: {
            en: "Country",
            ru: "Страна",
            kz: "Мемлекет"
        },
        email: {
            en: "Email",
            ru: "Электронная почта",
            kz: "Электрондық пошта адресі"
        },
        phone: {
            en: "Phone",
            ru: "Телефон",
            kz: "Телефон нөмірі"
        },
        section: {
            en: "Forum Interest Areas:",
            ru: "Интересующие направления форума:",
            kz: "Форум тақырыптары:"
        },
        s1: {
            en: "Interactive Session - “Integration of Artificial Intelligence in Public Service”",
            ru: "ИНТЕРАКТИВНАЯ ПАНЕЛЬ - «Интеграция искусственного интеллекта в систему государственной службы»",
            kz: "ИНТЕРАКТИВТІ ПАНЕЛЬ - «Мемлекеттік қызметке жасанды интеллектіні интеграциялау»"
        },

        s2: {
            en: "Fishbowl Session - “Development of Unified Personnel Management Systems”",
            ru: "FISHBOWL СЕССИЯ -«Создание единой системы управления человеческими ресурсами»",
            kz: "FISHBOWL СЕССИЯ - «Персоналды басқарудың біртұтас жүйелерін қалыптастыру»"
        },

        s3: {
            en: "Foresight Session - “Proactive, Data-Driven HR Strategies and Strategic Workforce Planning”",
            ru: "ФОРСАЙТ СЕССИЯ - «Формирование HR на основе данных и стратегическое планирование человеческих ресурсов»",
            kz: "ФОРСАЙТ СЕССИЯ - «Деректерге негізделген проактивті HR қалыптастыру және адам ресурстарын стратегиялық жоспарлау»"
        },

        s4: {
            en: "Interactive Session - “Training and Competency Development for Civil Servants”",
            ru: "ИНТЕРАКТИВНАЯ ПАНЕЛЬ - «Обучение и развитие компетенций государственных служащих»",
            kz: "ИНТЕРАКТИВТІ ПАНЕЛЬ - «Мемлекеттік қызметкерлерді оқыту және құзыреттерін жетілдіру»"
        },

        confirm: {
            en: "I consent to the use of my data for organizational purposes and the use of photos/videos taken during the event.",
            ru: "Я даю согласие на использование моих данных в организационных целях, а также на использование фото- и видеоматериалов, снятых во время мероприятия.",
            kz: "Мен өз деректерімді ұйымдастыру рәсімдері аясында пайдалануға, сондай-ақ іс-шара барысында түсірілген фото- және бейнематериалдарды пайдалануға келісімімді беремін."
        },

        photo: {
            en: "Upload photo 3x4",
            ru: "Загрузить фото 3x4",
            kz: "Суретті жүктеу 3x4"
        },

        iin: {
            en: "IIN (Individual Identification Number)",
            ru: "ИИН (Идентификационный номер)",
            kz: "ЖСН (Жеке сәйкестендіру нөмірі)"
        },

        pasport: {
            en: "Passport Number",
            ru: "Номер паспорта",
            kz: "Паспорт нөмірі"
        },

        button: {
            en: "Register",
            ru: "Зарегистрироваться",
            kz: "Тіркелу"
        },
            
    },

ForesightTopics: {
  title: {
    en: "Foresight Topics",
    ru: "Тематические задания",
    kz: "Тақырыптық тапсырмалар"
  },
  topics: [
    {
      id: "skillsMap",
      en: {
        title: "Future Skill Map 2030",
        text: "The skill map that will guide the workforce development in 2030, focusing on skills needed for the future workforce."
      },
      ru: {
        title: "Карта будущих навыков 2030",
        text: "Карта навыков, которая определит развитие кадров к 2030 году, с акцентом на навыки будущего."
      },
      kz: {
        title: "Дағдылар картасы 2030",
        text: "2030 жылға дейін кадрларды дамытуға бағытталған болашақ дағдылар картасы."
      }
    },
    {
      id: "digitalTwin",
      en: {
        title: "Decision-Making Model of Future HR",
        text: "Exploring the concept of digital twins for civil servants, and the potential risks and benefits in public service."
      },
      ru: {
        title: "Модель принятия решений HR будущего",
        text: "Изучение концепции цифровых двойников для госслужащих, а также возможные риски и преимущества."
      },
      kz: {
        title: "Болашақтың HR шешімдерін қабылдау моделі",
        text: "Мемлекеттік қызметшілер үшін цифрлық егіздер ұғымын зерттеу және оның артықшылықтары мен тәуекелдері."
      }
    },
    {
      id: "hrModel",
      en: {
        title: "Data Policy in the Organization of the Future",
        text: "Examining the decision-making process in Human Resources as it evolves to meet future needs and challenges."
      },
      ru: {
        title: "Политика данных в организации будущего",
        text: "Анализ процесса принятия решений в HR в контексте его эволюции для решения будущих задач."
      },
      kz: {
        title: "Ұйымдардағы деректер саясаты",
        text: "Болашақ қажеттіліктер мен мәселелерге бейімделу барысындағы HR шешім қабылдау үдерісін талдау."
      }
    },
    {
      id: "futureMorning",
      en: {
        title: "Archetypes of the HR Function in 2035",
        text: "Imagining the daily routine of a civil servant in the future, and how technology will influence their workday."
      },
      ru: {
        title: "Архетипы HR-функции 2035",
        text: "Воображаемый распорядок дня госслужащего будущего и влияние технологий на его рабочий день."
      },
      kz: {
        title: "HR функциясының архетиптері - 2035",
        text: "Болашақ мемлекеттік қызметшінің күн тәртібі және технологиялардың оның жұмыс күніне әсері."
      }
    }
  ]
}


};
export default translations;