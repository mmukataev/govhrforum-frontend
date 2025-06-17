"use client";
import { useState, useEffect } from 'react';

import translations from '@/translations/translations';
import Link from 'next/link';

export default function Registration() {
    const [step, setStep] = useState(1);
    const [iin, setIIN] = useState('');
    const validateIIN = (value) => /^\d{12}$/.test(value);
    const [foresightTopic, setForesightTopic] = useState('');



    const [showModal, setShowModal] = useState(false);
      const [lang, setLang] = useState("en");
        useEffect(() => {
            setLang(document.documentElement.lang || "en");
        }, []); 

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        patronymic: '',
        organization: '',
        position: '',
        country: '',
        email: '',
        phone: '',
        session: '',
        consent: false,
        photo: null
    });

const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    });
};


const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1) {
        if (!formData.consent) {
            alert('You must consent to the use of your data.');
            return;
        }
        setStep(2); // переход ко второму шагу
        return;
    }

    if (step === 2) {
        if (formData.country === 'Казахстан' && iin.length !== 12) {
            alert('ИИН должен содержать ровно 12 цифр');
            return;
        }
    }

    const formPayload = new FormData();
    for (const key in formData) {
        if (formData[key] !== null) {
            formPayload.append(key, formData[key]);
        }
    }
    formPayload.append("iin", iin);

    try {
        const response = await fetch('https://api-govhrforum.apa.kz/api/registration/', {
            method: 'POST',
            body: formPayload,
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error response:", errorText);
            throw new Error('Something went wrong with the registration.');
        }

        const data = await response.json();
        setShowModal(true);
        setFormData({
            name: '',
            surname: '',
            patronymic: '',
            organization: '',
            position: '',
            country: '',
            email: '',
            phone: '',
            session: '',
            consent: false,
            photo: null,
        });
        setIIN('');
        setStep(1);
    } catch (error) {
        alert(error.message);
    }
};



    return (
        <main className="pb-[100px]">
            <div className="relative h-[750px] bg-[url('/academy.jpg')] bg-cover bg-center flex items-center justify-center">
                <div className="z-9 text-white flex flex-col items-center justify-center text-center">
                    <h2 className="text-[40px] uppercase">{translations.Registration.title[lang]}</h2>
                    <p className="text-[25px] uppercase">{translations.Registration.description[lang]}</p>
                </div>
                <img
                    src="/overlaymain.svg"
                    alt="Logo"
                    className="z-[2] absolute absolute top-0 left-0 w-full h-full object-cover"
                />
            </div>
            <div className="container flex flex-col gap-[10px] max-w-4xl mx-auto mt-[100px]">
                {step === 1 && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
                    <div className="flex gap-[10px]">
                        <label htmlFor="name">{translations.Registration.name[lang]}:
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="surname">{translations.Registration.surname[lang]}:
                            <input
                                type="text"
                                id="surname"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        {/* <label htmlFor="patronymic">{translations.Registration.patronymic[lang]}:
                            <input
                                type="text"
                                id="patronymic"
                                name="patronymic"
                                value={formData.patronymic}
                                onChange={handleChange}
                                required
                            />
                        </label> */}
                        {/* <input
                            type="hidden"
                            id="patronymic"
                            name="patronymic"
                            value={null}
                        /> */}

                    </div>

                    <div className="flex gap-[10px]">
                        <label htmlFor="organization">{translations.Registration.organiztion[lang]}:
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label htmlFor="position">{translations.Registration.position[lang]}:
                            <input
                                type="text"
                                id="position"
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>

                    <label htmlFor="email">{translations.Registration.email[lang]}:
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label htmlFor="phone">{translations.Registration.phone[lang]}:
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, ''); // Удаляет всё, кроме цифр
                        }}
                        inputMode="numeric"
                        required
                    />
                    </label>


                    <label>{translations.Registration.section[lang]}</label>

                    <div className="items-center space-x-4">
                        <label htmlFor="aiIntegration" className="flex items-center">
                            <input
                                type="radio"
                                id="aiIntegration"
                                name="session"
                                value="aiIntegration"
                                checked={formData.session === 'aiIntegration'}
                                onChange={handleChange}
                                className="mr-2"
                                required 
                            />
                            {translations.Registration.s1[lang]}
                        </label>

                        <label htmlFor="fishbowlSession" className="flex items-center">
                            <input
                                type="radio"
                                id="fishbowlSession"
                                name="session"
                                value="fishbowlSession"
                                checked={formData.session === 'fishbowlSession'}
                                onChange={handleChange}
                                className="mr-2"
                                required 
                            />
                            {translations.Registration.s2[lang]}
                        </label>

                        <label htmlFor="trainingDevelopment" className="flex items-center">
                            <input
                                type="radio"
                                id="trainingDevelopment"
                                name="session"
                                value="trainingDevelopment"
                                checked={formData.session === 'trainingDevelopment'}
                                onChange={handleChange}
                                className="mr-2"
                                required 
                            />
                            {translations.Registration.s4[lang]}
                        </label>

                        <label htmlFor="foresightSession" className="flex items-center">
                            <input
                                type="radio"
                                id="foresightSession"
                                name="session"
                                value="foresightSession"
                                checked={formData.session === 'foresightSession'}
                                onChange={handleChange}
                                className="mr-2"
                                required
                            />
                            {translations.Registration.s3[lang]}
                        </label>

                        {formData.session === 'foresightSession' && (
                            <fieldset className="border border-gray-300 rounded-md p-4 my-5">
                                <legend className="text-lg font-semibold mb-2">
                                    {translations.ForesightTopics.title[lang] || translations.ForesightTopics.title["en"]}
                                </legend>
                                <div className="space-y-2">
                                    {translations.ForesightTopics.topics.map((topic) => {
                                        const label = `${topic[lang]?.title || topic.en.title}`;
                                        return (
                                            <label key={topic.id} className="flex items-center">
                                                <input
                                                    type="radio"
                                                    name="foresightTopic"
                                                    value={label}
                                                    checked={foresightTopic === label}
                                                    onChange={(e) => setForesightTopic(e.target.value)}
                                                    className="mr-2"
                                                    required
                                                />
                                                {label}
                                            </label>
                                        );
                                    })}
                                </div>
                            </fieldset>
                        )}
                    </div>

                        {/* <label htmlFor="photo" className='mt-[20px]'>
                            {translations.Registration.photo[lang]}
                            <input
                                type="file"
                                id="photo"
                                name="photo"
                                accept="image/*"
                                onChange={handleChange}
                                required
                            />
                        </label> */}

                    <div className="mt-6 flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            required
                            className="mt-1 w-5 h-5 accent-[var(--customaccent)]"
                        />
                        <label htmlFor="consent" className="text-sm text-gray-700 leading-snug">
                            {translations.Registration.confirm[lang]}
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="mt-[50px] px-[30px] h-[50px] flex text-white text-[20px] items-center rounded-[360px] bg-[var(--customaccent)] w-fit"
                    >
                        {translations.Registration.button[lang]}
                    </button>
                </form>
            )}
            {step === 2 && (
<form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
  <fieldset className="mt-4">
    <legend className="mb-2 font-semibold">{translations.Registration.country[lang]}</legend>
    <div className="flex items-center space-x-6">
      <label className="flex items-center">
        <input
          type="radio"
          name="country"
          value="Казахстан"
          checked={formData.country === 'Казахстан'}
          onChange={handleChange}
          className="mr-2"
          required
        />
        {lang === 'ru' ? 'Гражданин Казахстана' : lang === 'kz' ? 'Қазақстан азаматы' : 'Citizen of Kazakhstan'}
      </label>
      <label className="flex items-center">
        <input
          type="radio"
          name="country"
          value="Не гражданин Казахстана"
          checked={formData.country === 'Не гражданин Казахстана'}
          onChange={handleChange}
          className="mr-2"
        />
        {lang === 'ru' ? 'Не гражданин Казахстана' : lang === 'kz' ? 'Қазақстан азаматы емес' : 'Not a citizen of Kazakhstan'}
      </label>
    </div>
  </fieldset>

  <label htmlFor="iin" className="block mb-2 text-lg font-semibold">
  {formData.country === 'Казахстан'
    ? (lang === 'ru' ? 'Введите ИИН' : lang === 'kz' ? 'ЖСН енгізіңіз' : 'Enter your IIN')
    : (lang === 'ru' ? 'Введите номер документа' : lang === 'kz' ? 'Құжат нөмірін енгізіңіз' : 'Enter your document number')}

  <input
    type="text"
    id="iin"
    name="iin"
    value={iin}
    onChange={(e) => {
      // Если гражданин, оставляем только цифры и максимум 12
      if (formData.country === 'Казахстан') {
        setIIN(e.target.value.replace(/\D/g, '').slice(0, 12));
      } else {
        // Иначе можно вводить любой текст (не ограничиваем)
        setIIN(e.target.value);
      }
    }}
    maxLength={formData.country === 'Казахстан' ? 12 : undefined}
    className="border rounded px-4 py-2 w-full text-lg"
    required
  />
  </label>

  <button
    type="submit"
    className="mt-4 px-6 py-2 bg-[var(--customaccent)] text-white rounded"
  >
    {lang === 'ru' ? 'Завершить регистрацию' : lang === 'kz' ? 'Тіркеуді аяқтау' : 'Finish Registration'}
  </button>
</form>

            )}
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full text-center">
                        <h2 className="text-xl font-bold mb-4">{lang === 'ru' ? 'Регистрация прошла успешно!' : lang === 'kz' ? 'Тіркеу сәтті өтті!' : 'Registration Successful!'}</h2>
                        <p className="mb-4">
                            {lang === 'ru'
                                ? 'Спасибо за регистрацию. Мы свяжемся с вами при необходимости.'
                                : lang === 'kz'
                                ? 'Тіркелгеніңіз үшін рахмет. Қажет болған жағдайда сізбен хабарласамыз.'
                                : 'Thank you for registering. We will contact you if necessary.'}
                        </p>
                        <Link
                            href="/"
                            onClick={() => setShowModal(false)}
                            className="px-4 py-2 mt-4 bg-[var(--customaccent)] text-white rounded"
                        >
                            OK
                        </Link>
                    </div>
                </div>
            )}

        </main>
    );
}
