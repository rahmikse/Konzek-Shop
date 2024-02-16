import React from "react";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const [t] = useTranslation("global");

  return (
    <div className="container contact-container ">
      <div className="row">
        <div className="col-md-6">
          <h2>{t("contact.contact-us")}</h2>
          <p>
            {t("contact.email")}
            <a href="mailto:info@konzek.com"> info@konzek.com</a>
          </p>
          <p>
            {t("contact.call")}
            <a href="tel:+1234567890">90 (216) 392 16 42</a>
          </p>
          <p>
            {t("contact.address")}
            <address>{t("contact.address-office")}</address>
          </p>
        </div>
        <div className="col-md-6">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.996385990675!2d29.141205699999997!3d40.937746399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc43cc160e2f%3A0xcb5cb94b2a5db1a2!2sKonzek%20Teknoloji%20San.%20ve%20Tic.%20A.%C5%9E.!5e0!3m2!1sen!2sus!4v1708072347423!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
