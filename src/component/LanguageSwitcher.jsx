import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
const LanguageSwitcher = () => {
  const { i18n } = useTranslation("global");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [enabled, setEnabled] = useState(false);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    setEnabled(!enabled);
  };

  return (
    <div className="me-5">
      <BootstrapSwitchButton
        onChange={() => changeLanguage(currentLanguage === "tr" ? "en" : "tr")}
        checked={true}
        onlabel="EN"
        offlabel="TR"
        onstyle="light"
        offstyle="dark"
      />
    </div>
  );
};
export default LanguageSwitcher;
