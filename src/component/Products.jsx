import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Products = () => {
  const [t] = useTranslation("global");
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [lodaing, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response?.clone().json());
        setFilter(await response?.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (category) => {
    const updateProduct = data?.filter((prod) => prod.category === category);
    setFilter(updateProduct);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(data)}
          >
            {t("latest-product.all")}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            {t("latest-product.men-clothing")}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            {t("latest-product.women-clothing")}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            {t("latest-product.jewelery")}
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            {t("latest-product.electronic")}
          </button>
        </div>
        <div className="row">
          {filter.map((product, index) => {
            return (
              <div key={index} className="col-md-3 mb-4">
                <div
                  className="card h-100 text-center p-4"
                  style={{ width: "18rem" }}
                  key={product?.id}
                >
                  <img
                    src={product?.image}
                    className="card-img-top"
                    alt={product?.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text lead fw-bold">
                      {t("latest-product.dolar")} {product?.price}
                    </p>
                    <NavLink
                      to={`/products/${product?.id}`}
                      className="btn btn-outline-dark"
                    >
                      {t("btn.buy-now")}
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              {t("latest-product.header")}
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {lodaing ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
