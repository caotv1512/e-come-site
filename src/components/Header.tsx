import React from "react";
import NavHeader from "./NavHeader";

function Header() {
  return (
    <div>
      <header id="header" className="header-v1">
        <div className="header-top-banner">
          <a href="/#">
            <img src="img/banner-top.jpg" alt="" className="img-reponsive" />
          </a>
        </div>
        {/* <div className="topbar">
          <div className="container container-240">
            <div className="row flex">
              <div className="col-md-6 col-sm-6 col-xs-4 flex-left">
                <div className="topbar-left">
                  <div className="element element-store hidden-xs hidden-sm">
                    <a
                      id="label1"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src="img/icon-map.png" alt="" />
                      <span>Store Location</span>
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="label1">
                      <li>
                        <a href="/#">New York</a>
                      </li>
                      <li>
                        <a href="/#">California</a>
                      </li>
                      <li>
                        <a href="/#">Los Angeles</a>
                      </li>
                    </ul>
                  </div>
                  <div className="element hidden-xs hidden-sm">
                    <a href="/#">
                      <img src="img/icon-track.png" alt="" />
                      <span>Track Your Order</span>
                    </a>
                  </div>
                  <div className="element element-account hidden-md hidden-lg">
                    <a href="/#">My Account</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-8 flex-right">
                <div className="topbar-right">
                  <div className="element hidden-xs hidden-sm">
                    <a href="/#">Buyer Protection </a>
                  </div>
                  <div className="element hidden-xs hidden-sm">
                    <a href="/#">Help</a>
                  </div>
                  <div className="element hidden-xs hidden-sm">
                    <a href="/#">
                      <img src="img/icon-phone.png" alt="" />
                      <span>Save big on our app!</span>
                    </a>
                  </div>
                  <div className="element element-leaguage">
                    <a
                      id="label2"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img src="img/icon-l.png" alt="" />
                      <span>English</span>
                      <span className="ion-ios-arrow-down f-10 e-arrow" />
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="label2">
                      <li>
                        <a href="/#">EN</a>
                      </li>
                      <li>
                        <a href="/#">DE</a>
                      </li>
                      <li>
                        <a href="/#">FR</a>
                      </li>
                    </ul>
                  </div>
                  <div className="element element-currency">
                    <a
                      id="label3"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span>USD</span>
                      <span className="ion-ios-arrow-down f-10 e-arrow" />
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="label3">
                      <li>
                        <a href="/#">USD</a>
                      </li>
                      <li>
                        <a href="/#">AUD</a>
                      </li>
                      <li>
                        <a href="/#">EUR</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <NavHeader/> */}
        <div className="header-center">
          <div className="container container-240">
            <div className="row flex">
              <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 v-center header-logo">
                <a href="/#">
                  <img src="img/logo.png" alt="" className="img-reponsive" />
                </a>
              </div>
              <div className="col-lg-7 col-md-7 v-center header-search hidden-xs hidden-sm">
                <form
                  method="get"
                  className="searchform ajax-search"
                  action="/search"
                  role="search"
                >
                  <input type="hidden" name="type" defaultValue="product" />
                  <input
                    type="text"
                    // onBlur="if (this.value=='') this.value = this.defaultValue"
                    // onFocus="if (this.value==this.defaultValue) this.value = ''"
                    name="q"
                    className="form-control"
                    placeholder="i’m shoping for..."
                  />
                  <ul className="list-product-search hidden-xs hidden-sm">
                    <li>
                      <a className="flex align-center" href="">
                        <div className="product-img">
                          <img src="img/product/iphonex.jpg" alt="" />
                        </div>
                        <h3 className="product-title">
                          Notebook Black Spire Smartphone Black 2.0
                        </h3>
                      </a>
                    </li>
                    <li>
                      <a className="flex align-center" href="">
                        <div className="product-img">
                          <img src="img/product/sound.jpg" alt="" />
                        </div>
                        <h3 className="product-title">
                          Smartphone 6S 64GB LTE
                        </h3>
                      </a>
                    </li>
                    <li>
                      <a className="flex align-center" href="">
                        <div className="product-img">
                          <img src="img/product/phone4.jpg" alt="" />
                        </div>
                        <h3 className="product-title">
                          Notebook Black Spire Smartphone Black 2.0
                        </h3>
                      </a>
                    </li>
                    <li>
                      <a className="flex align-center" href="">
                        <div className="product-img">
                          <img src="img/product/phone5.jpg" alt="" />
                        </div>
                        <h3 className="product-title">
                          Smartphone 6S 64GB LTE{" "}
                        </h3>
                      </a>
                    </li>
                    <li>
                      <a className="flex align-center" href="">
                        <div className="product-img">
                          <img src="img/product/phone1.jpg" alt="" />
                        </div>
                        <h3 className="product-title">
                          Notebook Black Spire Smartphone Black 2.0
                        </h3>
                      </a>
                    </li>
                  </ul>
                  <div className="search-panel">
                    <a
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      href="/#"
                    >
                      All categories <span className="fa fa-caret-down" />
                    </a>
                    <ul
                      id="category"
                      className="dropdown-menu dropdown-category"
                    >
                      <li>
                        <a href="/#">TV &amp; Video</a>
                      </li>
                      <li>
                        <a href="/#">Home Audio &amp; Theater</a>
                      </li>
                      <li>
                        <a href="/#">Camera, Photo &amp; Video</a>
                      </li>
                      <li>
                        <a href="/#">Cell Phones &amp; Accessories</a>
                      </li>
                      <li>
                        <a href="/#">Headphones</a>
                      </li>
                      <li>
                        <a href="/#">Car Electronics</a>
                      </li>
                      <li>
                        <a href="/#">Electronics Showcase</a>
                      </li>
                    </ul>
                  </div>
                  <span className="input-group-btn">
                    <button className="button_search" type="button">
                      <i className="ion-ios-search-strong" />
                    </button>
                  </span>
                </form>
                <div className="tags">
                  <span>Most searched :</span>
                  <a href="/#">umbrella</a>
                  <a href="/#">hair accessories </a>
                  <a href="/#">diamond</a>
                  <a href="/#"> painting slime</a>
                  <a href="/#">sunglasses</a>
                </div>
              </div>
              <div className="col-lg-3  col-md-3 col-sm-6 col-xs-6 v-center header-sub">
                <div className="right-panel">
                  <div className="header-sub-element hidden-xs hidden-sm">
                    <div className="sub-left">
                      <img src="img/icon-call.png" alt="" />
                    </div>
                    <div className="sub-right">
                      <span>Call Us Free</span>
                      <div className="phone">(+123) 456 789 </div>
                    </div>
                  </div>
                  <div className="header-sub-element row">
                    <a className="hidden-xs hidden-sm" href="">
                      <img src="img/icon-user.png" alt="" />
                    </a>
                    <a href="/#">
                      <img src="img/icon-heart.png" alt="" />
                    </a>
                    <div className="cart">
                      <a
                        href="/#"
                        className="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        id="label5"
                      >
                        <img src="img/icon-cart.png" alt="" />
                        <span className="count cart-count">0</span>
                      </a>
                      <div className="dropdown-menu dropdown-cart">
                        <ul className="mini-products-list">
                          <li className="item-cart">
                            <div className="product-img-wrap">
                              <a href="/#">
                                <img
                                  src="img/cart1.jpg"
                                  alt=""
                                  className="img-reponsive"
                                />
                              </a>
                            </div>
                            <div className="product-details">
                              <div className="inner-left">
                                <div className="product-name">
                                  <a href="/#">Harman Kardon Onyx Studio </a>
                                </div>
                                <div className="product-price">
                                  $ 60.00 <span>( x2)</span>
                                </div>
                              </div>
                            </div>
                            <a href="/#" className="e-del">
                              <i className="ion-ios-close-empty" />
                            </a>
                          </li>
                          <li className="item-cart">
                            <div className="product-img-wrap">
                              <a href="/#">
                                <img
                                  src="img/cart1.jpg"
                                  alt=""
                                  className="img-reponsive"
                                />
                              </a>
                            </div>
                            <div className="product-details">
                              <div className="inner-left">
                                <div className="product-name">
                                  <a href="/#">Harman Kardon Onyx Studio </a>
                                </div>
                                <div className="product-price">
                                  $ 60.00 <span>( x2)</span>
                                </div>
                              </div>
                            </div>
                            <a href="/#" className="e-del">
                              <i className="ion-ios-close-empty" />
                            </a>
                          </li>
                        </ul>
                        <div className="bottom-cart">
                          <div className="cart-price">
                            <span>Subtotal</span>
                            <span className="price-total">$ 120.00</span>
                          </div>
                          <div className="button-cart">
                            <a href="/#" className="cart-btn btn-viewcart">
                              View Cart
                            </a>
                            <a
                              href="/#"
                              className="cart-btn e-checkout btn-gradient"
                            >
                              Checkout
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a
                      href="/#"
                      className="hidden-md hidden-lg icon-pushmenu js-push-menu"
                    >
                      <i className="fa fa-bars f-15" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </header>
    </div>
  );
}

export default Header;
