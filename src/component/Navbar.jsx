import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const [t] = useTranslation("global");
  const state = useSelector((state) => state.cart.cartItems);

  const isActive = (path) => {
    const currentPath = window.location.pathname;
    return currentPath === path || currentPath.startsWith(path + "/");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 navbar-light shadow-sm fixed-top">
        <div className="container">
          <NavLink className="navbar-brand fw-4 fs-4" to="/">
            KONZEK
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                  to="/home"
                  activeClassName="active"
                >
                  {t("navbar.home")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${
                    isActive("/products") ? "active" : ""
                  }`}
                  to="/products"
                  activeClassName="active"
                >
                  {t("navbar.products")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                  to="/about"
                  activeClassName="active"
                >
                  {t("navbar.about")}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                  to="/contact"
                  activeClassName="active"
                >
                  {t("navbar.contacts")}
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>
                {t("register.login")}
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>
                {t("register.register")}
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>
                {t("register.cart")} ({state.length})
              </NavLink>
            </div>
          </div>
        </div>
        <LanguageSwitcher />
      </nav>
    </div>
  );
}
