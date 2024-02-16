import React from "react";
import Products from "./Products";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [t] = useTranslation("global");
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/bgImg.jpg"
          className="card-image"
          alt="background"
          height="650px"
        />

        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container align-items-end d-flex flex-column  ">
            <h5 className="card-title display-4 fw-bolder mb-0 text-secondary-emphasis">
              {t("home.main-header")} <br /> {t("home.main-header2")}
            </h5>
            <p className="align-items-start card-text text-secondary-emphasis fw-bolder ">
              {t("home.section-header-check-all")}
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
