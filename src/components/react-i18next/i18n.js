import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguaeDetector from "i18next-browser-languagedetector";

import { DateTime } from "luxon";

i18n
  .use(LanguaeDetector) // 사용자 언어 탐지
  .use(initReactI18next) // i18n 객체를 react-18next에 전달
  .init({
    // for all options read: https://www.i18next.com/overview/configuration-options
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          // 번역본 쓸 공간
          description: {
            part1: "Edit <1>src/App.js</1> and save to reload.",
            part2: "Learn React",
          },
          counter_one: "Changed language just once",
          counter_other: "Changed language already {{count}} times",
          footer: {
            date: "Today is {{date, DATE_HUGE}}",
          },
        },
      },
      de: {
        translation: {
          description: {
            part1: "Ändere <1>src/App.js</1> und speichere um neu zu laden.",
            part2: "Lerne React",
          },
          counter_one: "Die Sprache wurde erst ein mal gewechselt",
          counter_other: "Die Sprache wurde {{count}} mal gewechselt",
          footer: {
            date: "Heute ist {{date, DATE_HUGE}}",
          },
        },
      },
      ko: {
        translation: {
          description: {
            part1: "src/App.js를 편집하고 저장하여 다시 로드합니다.",
            part2: "React 배우러가기",
          },
          counter_one: "언어를 한번 바꾸었습니다.",
          counter_other: "언어를 {{count}}번 바꾸었습니다.",
          footer: {
            date: "오늘의 날짜 {{date, DATE_HUGE}}",
          },
        },
      },
    },
  });

// 새로운 용법
i18n.services.formatter.add("DATE_HUGE", (value, lng, options) => {
  return DateTime.fromJSDate(value)
    .setLocale(lng)
    .toLocaleString(DateTime.DATE_HUGE);
});

export default i18n;
