import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      Language: "EN",
      EN: "EN",
      TH: "TH",
      Test: "Test",
      "Layout & Style": "Layout & Style",
      "Connect API": "Connect API",
      "Form & Table": "Form & Table",
      "Move shape": "Move shape",
      "Move position": "Move position",
    },
  },
  th: {
    translation: {
      Language: "ไทย",
      EN: "อังกฤษ",
      TH: "ไทย",
      Test: "แบบทดสอบที่",
      "Layout & Style": "การจัดการหน้าเว็บ",
      "Connect API": "การเชื่อมต่อ API",
      "Form & Table": "การจัดการหน้าฟอร์ม",
      "Move shape": "เลื่อนรูปแบบ",
      "Move position": "เปลี่ยนตำแหน่ง",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
