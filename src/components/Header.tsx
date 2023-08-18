import React from "react";

function Header() {
  return (
    <div>
      <header id="header" className="header-v1">
        <div className="header-top-banner">
          <a href="/#">
            <img src="img/banner-top.jpg" alt="" className="img-reponsive" />
          </a>
        </div>
        <div className="topbar">
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
        </div>
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
        <div className="header-bottom hidden-xs hidden-sm">
          <div className="container container-240">
            <div className="row flex lr2">
              <div className="col-lg-3 widget-verticalmenu">
                <div className="navbar-vertical">
                  <button className="navbar-toggles">
                    <span>All Departments</span>
                  </button>
                </div>
                <div className="vertical-wrapper">
                  <ul className="vertical-group">
                    <li className="vertical-item level1 mega-parent">
                      <a href="/#">New Arrivals</a>
                    </li>
                    <li className="vertical-item level1 mega-parent">
                      <a href="/#">
                        Top 100 Best Seller{" "}
                        <span className="h-ribbon e-red mg-l10">Hot</span>
                      </a>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="/#">TV &amp; Video</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu v2 tvbg pd2 style1">
                        <ul className="level1">
                          <li className="level2 col-md-5">
                            <a href="/#">TVs by Type</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="/#" title="">
                                  4K Ultra HD
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Smart TVs
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  LED &amp; LCD TVs &amp; amplifiers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  OLED TVs
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  QLED/Quantum Dot TVs
                                </a>
                              </li>
                            </ul>
                            <a href="/#">Blu-ray &amp; DVD Players</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="/#" title="">
                                  4K Blu-ray Players
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Streaming Blu-ray Players
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  3D Blu-ray Players
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Portable Blu-ray Players
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  DVD Recorders
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 col-md-7">
                            <a href="# ">Home Audio</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="/#" title="">
                                  Home Theater Systems
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Soundbars
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Speakers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Receivers &amp; Amplifiers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Premium Audio
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="/#">Home Audio &amp; Theater</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu v2 homebg pd2 style1">
                        <ul className="level1">
                          <li className="level2 col-md-4">
                            <a href="/#">Home theater</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="/#" title="">
                                  Sound bars
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Speakers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Receivers &amp; amplifiers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Equalizers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Phono preamps
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 col-md-4">
                            <a href="# ">Speakers</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="/#" title="">
                                  Bluetooth speakers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Ceiling &amp; in-wall speakers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Digital music systems
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Outdoor
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Satellite speakers
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 col-md-4">
                            <a href="/#">Accessories</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="/#" title="">
                                  Receivers &amp; amplifiers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Cd &amp; tape players
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Tuners
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Curntables
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Receivers &amp; adapters
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="/#">Camera, Photo &amp; Video</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu">
                        <ul className="vertical-menu1">
                          <li>
                            <a href="/#">Car Audio</a>
                          </li>
                          <li>
                            <a href="/#">Radar Detectors</a>
                          </li>
                          <li>
                            <a href="/#">Car Safety &amp; Security</a>
                          </li>
                          <li>
                            <a href="/#">Car Video</a>
                          </li>
                          <li>
                            <a href="/#">Two-Way Radios</a>
                          </li>
                          <li>
                            <a href="/#">CB Radios &amp; Scanners</a>
                          </li>
                          <li>
                            <a href="/#">In-Dash Mounting Kits</a>
                          </li>
                          <li>
                            <a href="/#">Installation Accessories.</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="/#">Cell Phones &amp; Accessories</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu v2 phonebg pd2 style1">
                        <ul className="level1">
                          <li className="level2 col-md-4">
                            <a href="/#">Cell Phones</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="/#" title="">
                                  Samsung Galaxy S8
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  iPhone 7/7 Plus
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  iPhone 6
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Samsung Galaxy S7
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Unlocked Phones
                                </a>
                              </li>
                            </ul>
                            <a href="/#">Cases</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="/#" title="">
                                  4Armbands
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Armbands
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Cases
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Flip Cases
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Holsters &amp; Clips
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 col-md-8">
                            <a href="# ">Accessories</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="/#" title="">
                                  Batteries
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Bluetooth Headsets
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Bluetooth Speakers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Car Accessories
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Chargers
                                </a>
                              </li>
                            </ul>
                            <a href="# ">Connected Devices</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="/#" title="">
                                  Tablets
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Mobile Hotspots
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Smart Watches
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Wearable Technology
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="/#">Headphones</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu v2 headphonebg pd3 style1">
                        <ul className="level1">
                          <li className="level2 col-md-6">
                            <a href="/#">Headphones</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="/#" title="">
                                  In-Ear &amp; Earbud
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  On-Ear
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Over-Ear
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Wireless
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Sports &amp; Fitness
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="level2 col-md-6">
                            <a href="# ">Speaker System</a>
                            <ul className="menu-level-2">
                              <li className="level3">
                                <a href="/#" title="">
                                  Complete Systems
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Sound Bars
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Surround Sound
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Receivers &amp; Amplifiers
                                </a>
                              </li>
                              <li className="level3">
                                <a href="/#" title="">
                                  Equalizers
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="/#">Car Electronics</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu">
                        <ul className="vertical-menu1">
                          <li>
                            <a href="/#">Car Audio</a>
                          </li>
                          <li>
                            <a href="/#">Radar Detectors</a>
                          </li>
                          <li>
                            <a href="/#">Car Safety &amp; Security</a>
                          </li>
                          <li>
                            <a href="/#">Car Video</a>
                          </li>
                          <li>
                            <a href="/#">Two-Way Radios</a>
                          </li>
                          <li>
                            <a href="/#">CB Radios &amp; Scanners</a>
                          </li>
                          <li>
                            <a href="/#">In-Dash Mounting Kits</a>
                          </li>
                          <li>
                            <a href="/#">Installation Accessories.</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop">
                      <a href="/#">Electronics Showcase</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu">
                        <ul className="vertical-menu1">
                          <li>
                            <a href="/#">Car Audio</a>
                          </li>
                          <li>
                            <a href="/#">Radar Detectors</a>
                          </li>
                          <li>
                            <a href="/#">Car Safety &amp; Security</a>
                          </li>
                          <li>
                            <a href="/#">Car Video</a>
                          </li>
                          <li>
                            <a href="/#">Two-Way Radios</a>
                          </li>
                          <li>
                            <a href="/#">CB Radios &amp; Scanners</a>
                          </li>
                          <li>
                            <a href="/#">In-Dash Mounting Kits</a>
                          </li>
                          <li>
                            <a href="/#">Installation Accessories.</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="vertical-item level1 vertical-drop mega-parent">
                      <a href="/#">All categlories</a>
                      <div className="menu-level-1 dropdown-menu vertical-menu v2 pd">
                        <div className="row">
                          <div className="col-md-4 text-center cate-item">
                            <a href="/#">
                              <img
                                src="img/megamenu/cate1.jpg"
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                            <h3>
                              <a href="/#">Mirrorless Cameras</a>
                            </h3>
                          </div>
                          <div className="col-md-4 text-center cate-item">
                            <a href="/#">
                              <img
                                src="img/megamenu/cate2.jpg"
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                            <h3>
                              <a href="/#">Lenses</a>
                            </h3>
                          </div>
                          <div className="col-md-4 text-center cate-item">
                            <a href="/#">
                              <img
                                src="img/megamenu/cate3.jpg"
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                            <h3>
                              <a href="/#">Photography Drones</a>
                            </h3>
                          </div>
                          <div className="col-md-4 text-center cate-item">
                            <a href="/#">
                              <img
                                src="img/megamenu/cate4.jpg"
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                            <h3>
                              <a href="/#">Sports &amp; Action Cameras</a>
                            </h3>
                          </div>
                          <div className="col-md-4 text-center cate-item">
                            <a href="/#">
                              <img
                                src="img/megamenu/cate5.jpg"
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                            <h3>
                              <a href="/#">Optics</a>
                            </h3>
                          </div>
                          <div className="col-md-4 text-center cate-item">
                            <a href="/#">
                              <img
                                src="img/megamenu/cate6.jpg"
                                alt=""
                                className="img-reponsive"
                              />
                            </a>
                            <h3>
                              <a href="/#">Accessories</a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 widget-left">
                <div className="flex lr">
                  <nav className="main-menu">
                    <div className="collapse navbar-collapse" id="myNavbar">
                      <ul className="nav navbar-nav">
                        <li className="level1">
                          <a href="/#">
                            <img src="img/icon-diamond.png" alt="" />
                            Flash Deals
                          </a>
                        </li>
                        <li className="level1">
                          <a href="/#">
                            Tech Discovery
                            <span className="h-ribbon h-pos e-skyblue">
                              New
                            </span>
                          </a>
                        </li>
                        <li className="level1">
                          <a href="/#">Trending Styles</a>
                        </li>
                        <li className="level1">
                          <a href="/#">
                            Gift Cards{" "}
                            <span className="h-ribbon h-pos e-green">sale</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="header-bottom-right hidden-xs hidden-sm">
                    <img
                      src="img/icon-ship.png"
                      alt=""
                      className="img-reponsive"
                    />
                    <span>Free Shipping on Orders $100</span>
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
