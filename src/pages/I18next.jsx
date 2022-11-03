import React, { useState } from "react";

import { useTranslation, Trans } from "react-i18next";
import Footer from "../components/react-i18next/footer";

const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
  ko: { nativeName: "Korean" },
};

const I18next = () => {
  const { t, i18n } = useTranslation();
  const [count, setCounter] = useState(0);

  console.log(Object.keys(lngs));

  return (
    <div>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            style={{
              fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
            }}
            type="submit"
            onClick={() => {
              i18n.changeLanguage(lng);
              setCounter(count + 1);
            }}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <p>
        <i>{t("counter", { count })}</i>
      </p>
      <p>
        <Trans i18nKey="description.part1">
          Edit <code>src/App.js</code> and save to reload.
        </Trans>
      </p>
      <p>{t("description.part2")}</p>
      <Footer t={t} />
    </div>
  );
};

export default I18next;
