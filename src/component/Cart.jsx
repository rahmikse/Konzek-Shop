import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  clearCart,
  removeFromCart,
} from "../redux/reducer/cartSlice";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const items = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.totalPrice);
  const [t] = useTranslation("global");
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleClear = (item) => {
    dispatch(clearCart(item));
  };
  return (
    <>
      <h2 className=" text-center mt-4">{t("cart.header")}</h2>
      <hr />
      <div className=" container mb-3  my-4">
        <div className=" card d-flex flex-column justify-content-center align-items-center ">
          {items && items.length === 0 ? (
            <>
              <div>
                <img
                  src="./empty-cart.jpg"
                  className="card-img-top"
                  width={200}
                  height={300}
                  alt="Empty Cart"
                />
                <div className="card-body">
                  <h5 className="card-title fw-bolder fs-3">
                    {t("cart.empty-header")}
                  </h5>
                  <p className="card-text ">{t("cart.message")}</p>
                  <a href="/" className="btn btn-outline-dark">
                    {t("cart.go-home")}{" "}
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <ul>
                {items.map((item) => (
                  <>
                    <li className="list-group-item mt-5">
                      <div className=" mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <img
                              src={item?.image}
                              className="img-fluid rounded-start"
                              alt={t(`products.${item?.id}.title`)}
                              height={300}
                              width={200}
                            />
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">
                                {item?.title.substring(0, 16)}
                              </h5>
                              <p className="">
                                {t(`products.${item.id}.description`)}
                              </p>
                              <p className="card-text fw-bolder ">
                                {item.quantity} X {item.price} ={" "}
                                {t("latest-product.dolar")}
                                {item.quantity * item.price}
                              </p>

                              <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="btn btn-outline-dark me-2 py-0 px-2"
                              >
                                <i className="fa fa-minus"></i>
                              </button>
                              <button
                                onClick={() => handleAddItem(item)}
                                className="btn btn-outline-dark py-0 px-2"
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <button
                      onClick={() => handleClear(item)}
                      className="btn btn-outline-dark py-0 px-2  d-flex justify-content-evenly fw-bolder"
                      style={{
                        width: "120px",
                        position: "absolute",
                        right: "10px",
                        bottom: "10px",
                      }}
                    >
                      {" "}
                      {t("cart.clear")}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        style={{
                          width: "13px",
                          height: "13x",
                          backgroundColor: "white",
                          position: "absolute",
                          right: "3",
                          top: "3px",
                        }}
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </button>
                  </>
                ))}
              </ul>
              <p className="position-absolute totalPrice fw-bolder">
                Toplam Tutar: {t("latest-product.dolar")}
                {Math.round(total)}
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
