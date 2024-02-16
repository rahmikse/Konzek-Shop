import React from "react";
import { useTranslation } from "react-i18next";
const AboutPage = () => {
  const { t } = useTranslation("global");
  return (
    <div className="container about-container ">
      <div className="row">
        <div className="col-md-6">
          <h1 className="text-center">{t("about.header")}</h1>
          <div className="mt-4">
            <h2>{t("about.title")}</h2>
            <p>{t("about.section1")}</p>
            <p>{t("about.section2")}</p>
            <p>{t("about.section3")}</p>
          </div>
        </div>
        <div className="col-md-6 text-center align-content-center konzek-about-png">
          <img
            src="./about.png"
            alt="About Us"
            className="img-fluid rounded"
            height={300}
            width={300}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
