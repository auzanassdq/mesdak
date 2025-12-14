"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Deklarasi tipe untuk window.google
declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: new (
          options: {
            pageLanguage: string;
            includedLanguages: string;
            autoDisplay: string;
          },
          element: string
        ) => void;
      };
    };
    googleTranslateElementInit: () => void;
    googleTranslateIntervalId?: NodeJS.Timeout;
  }
}

const TranslateComponent = () => {
  const [selectedLang, setSelectedLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "gb" },
    { code: "fr", name: "French", flag: "fr" },
    { code: "es", name: "Spanish", flag: "es" },
    { code: "ar", name: "Arabic", flag: "sa" },
    { code: "zh-CN", name: "Chinese", flag: "cn" },
    { code: "pt", name: "Portuguese", flag: "pt" },
    { code: "de", name: "German", flag: "de" },
  ];

  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode);
    setIsOpen(false);

    // if (langCode === 'id') {
    //   const iframe = document.querySelector('.goog-te-banner-frame') as HTMLIFrameElement;
    //   if (iframe) {
    //     const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    //     const restoreButton = iframeDoc?.querySelector('.goog-te-button button') as HTMLButtonElement;
    //     if (restoreButton) {
    //       restoreButton.click();
    //     }
    //   }
    //   return;
    // }

    const googleTranslate = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;
    if (googleTranslate) {
      googleTranslate.value = langCode;
      googleTranslate.dispatchEvent(new Event("change"));
    }
  };

  useEffect(() => {
    if (typeof window === undefined) return;
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          autoDisplay: "false",
          pageLanguage: "en",
          includedLanguages: "en,fr,es,ar,zh-CN,pt,de",
        },
        "google_translate_element"
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="google_translate_element" style={{ display: "none" }}></div>

      <div className="notranslate group relative bg-transparent">
        <div
          className="flex cursor-pointer items-center gap-2 rounded border-[1px] border-solid border-black/10 px-3 py-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image
            src={`https://flagcdn.com/w20/${
              languages.find((l) => l.code === selectedLang)?.flag
            }.png`}
            alt=""
            width={50}
            height={50}
            className="h-[15px] w-[25px]"
          />
          {/* <span>{languages.find((l) => l.code === selectedLang)?.name}</span> */}
        </div>

        {/* {isOpen && ( */}
        <div className="absolute w-[135px] inset-x-0 left-0 z-50 hidden origin-top-left overflow-hidden rounded border-2 bg-white group-hover:block">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className="flex cursor-pointer items-center gap-2 px-3 py-2 text-black/80 hover:bg-black/10"
              onClick={() => handleLanguageChange(lang.code)}
            >
              <Image
                src={`https://flagcdn.com/w20/${lang.flag}.png`}
                alt={lang.name}
                width={50}
                height={50}
                className="h-[15px] w-[25px]"
              />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default TranslateComponent;
