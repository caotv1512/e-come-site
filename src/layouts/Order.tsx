import React from "react";
import { Link } from "react-router-dom";

function Order() {
  return (
    <div>
      <div className="container container-240">
        <div className="checkout">
          <ul className="breadcrumb v3">
            <li>
             <Link to={"/"}>Home</Link>
            </li>
            <li className="active">Cart</li>
          </ul>
          <div className="row">
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="shopping-cart bd-7">
                <div className="cmt-title text-center abs">
                  <h1 className="page-title v2">Cart</h1>
                </div>
                <div className="table-responsive">
                  <table className="table cart-table">
                    <tbody>
                      <tr className="item_cart">
                        <td className="product-name flex align-center">
                          <a href="#" className="btn-del">
                            <i className="ion-ios-close-empty" />
                          </a>
                          <div className="product-img">
                            <img
                              src="img/product/sound2.jpg"
                              alt="Futurelife"
                            />
                          </div>
                          <div className="product-info">
                            <a href="#" title="">
                              Harman Kardon Onyx Studio{" "}
                            </a>
                          </div>
                        </td>
                        <td className="bcart-quantity single-product-detail">
                          <div className="single-product-info">
                            <div className="e-quantity">
                              <input
                                type="number"
                                step={1}
                                min={1}
                                max={999}
                                name="quantity"
                                defaultValue={1}
                                title="Qty"
                                className="qty input-text js-number"
                                size={4}
                              />
                              <div className="tc pa">
                                <a className="js-plus quantity-right-plus">
                                  <i className="fa fa-caret-up" />
                                </a>
                                <a className="js-minus quantity-left-minus">
                                  <i className="fa fa-caret-down" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="total-price">
                          <p className="price">$1,215.00</p>
                        </td>
                      </tr>
                      <tr className="item_cart">
                        <td className="product-name flex align-center">
                          <a href="#" className="btn-del">
                            <i className="ion-ios-close-empty" />
                          </a>
                          <div className="product-img">
                            <img
                              src="img/product/sound2.jpg"
                              alt="Futurelife"
                            />
                          </div>
                          <div className="product-info">
                            <a href="#" title="">
                              Harman Kardon Onyx Studio{" "}
                            </a>
                          </div>
                        </td>
                        <td className="bcart-quantity single-product-detail">
                          <div className="single-product-info">
                            <div className="e-quantity">
                              <input
                                type="number"
                                step={1}
                                min={1}
                                max={999}
                                name="quantity"
                                defaultValue={1}
                                title="Qty"
                                className="qty input-text js-number"
                                size={4}
                              />
                              <div className="tc pa">
                                <a className="js-plus quantity-right-plus">
                                  <i className="fa fa-caret-up" />
                                </a>
                                <a className="js-minus quantity-left-minus">
                                  <i className="fa fa-caret-down" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="total-price">
                          <p className="price">$1,215.00</p>
                        </td>
                      </tr>
                      <tr className="item_cart">
                        <td className="product-name flex align-center">
                          <a href="#" className="btn-del">
                            <i className="ion-ios-close-empty" />
                          </a>
                          <div className="product-img">
                            <img
                              src="img/product/sound2.jpg"
                              alt="Futurelife"
                            />
                          </div>
                          <div className="product-info">
                            <a href="#" title="">
                              Harman Kardon Onyx Studio{" "}
                            </a>
                          </div>
                        </td>
                        <td className="bcart-quantity single-product-detail">
                          <div className="single-product-info">
                            <div className="e-quantity">
                              <input
                                type="number"
                                step={1}
                                min={1}
                                max={999}
                                name="quantity"
                                defaultValue={1}
                                title="Qty"
                                className="qty input-text js-number"
                                size={4}
                              />
                              <div className="tc pa">
                                <a className="js-plus quantity-right-plus">
                                  <i className="fa fa-caret-up" />
                                </a>
                                <a className="js-minus quantity-left-minus">
                                  <i className="fa fa-caret-down" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="total-price">
                          <p className="price">$1,215.00</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="table-cart-bottom">
                  <form className="form_coupon" action="#" method="post">
                    <input
                      type="email"
                      defaultValue=""
                      placeholder="Coupon code"
                      name="EMAIL"
                      id="mail"
                      className="newsletter-input form-control"
                    />
                    <div className="input-icon">
                      <img src="img/coupon-icon.png" alt="" />
                    </div>
                    <button
                      id="subscribe2"
                      className="button_mini btn"
                      type="submit"
                    >
                      Apply coupon
                    </button>
                  </form>
                  <a href="#" className="btn btn-update">
                    Update cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col-xs-12">
              <div className="cart-total bd-7">
                <div className="cmt-title text-center abs">
                  <h1 className="page-title v3">Cart totals</h1>
                </div>
                <div className="table-responsive">
                  <table className="shop_table">
                    <tbody>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td>$ 1.215.00</td>
                      </tr>
                      <tr className="cart-shipping">
                        <th>Shipping</th>
                        <td className="td">
                          <ul className="shipping">
                            <li>
                              <input
                                type="radio"
                                name="gender"
                                defaultValue="Flat"
                                id="radio1"
                              />
                              <label htmlFor="radio1">Flat rate : $ 12</label>
                            </li>
                            <li>
                              <input
                                type="radio"
                                name="gender"
                                defaultValue="Free"
                                id="radio2"
                              />
                              <label htmlFor="radio2">Free Shipping</label>
                            </li>
                          </ul>
                          <a href="#" className="calcu">
                            Calculate shipping
                          </a>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Total</th>
                        <td>$ 1.215.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="cart-total-bottom">
                  <a href="#" className="btn-gradient btn-checkout">
                    Proceed to checkout
                  </a>
                </div>
                <div className="sign-in-divider">
                  <span>or</span>
                </div>
                <div className="cart-total-bottom pp-checkout">
                  <a href="#">
                    <img
                      src="img/checkoutpp.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
