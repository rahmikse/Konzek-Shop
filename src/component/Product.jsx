import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/cartSlice";
import { useTranslation } from "react-i18next";

const Product = () => {
  const id = useParams();
  const [t, i18n] = useTranslation("global");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      axios
        .get(`https://fakestoreapi.com/products/${id.id}`)
        .then((response) => setProduct(response?.data));
      setLoading(false);
    };
    const detectedLng =
      localStorage.getItem("i18nextLng") || window.navigator.language;
    i18n.changeLanguage(detectedLng);

    getProduct();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">
            {t(`products.${product.id}.category`)}
          </h4>
          <h1 className="display-5">{t(`products.${product.id}.title`)}</h1>
          <p className="lead">
            {t("rating")} {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">
            {t("latest-product.dolar")}
            {product.price}
          </h3>
          <p className="lead">{t(`products.${product.id}.description`)}</p>
          <button
            onClick={() => dispatch(handleAddToCart)}
            className="btn btn-outline-dark"
          >
            {t("btn.add-to-cart")}
          </button>
          <NavLink to="/cart" className="btn btn-outline-dark px-3 ms-2">
            {t("btn.go-to-cart")}
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
