import React from "react";
import { useTranslation } from "react-i18next";

const RetryLater = () => {
  const [t] = useTranslation("global");
  return (
    <div style={{ textAlign: "center", marginTop: "150px" }}>
      <h2>{t("retry.header")}</h2>
      <p>{t("retry.message")}</p>
      <a href="/" className="btn btn-outline-dark">
        {t("cart.go-home")}{" "}
      </a>
    </div>
  );
};

export default RetryLater;
