import React from "react";

function NavHeader() {
  return (
    <div>
      <div className="col-lg-9 widget-left">
        <div className="flex lr e-border">
          <nav className="main-menu flex align-center">
            <button
              type="button"
              className="icon-mobile e-icon-menu icon-pushmenu js-push-menu"
            >
              <span className="navbar-toggler-bar" />
              <span className="navbar-toggler-bar" />
              <span className="navbar-toggler-bar" />
            </button>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav js-menubar">
                <li className="level1 active hassub">
                  <a href="#">Home</a>
                  <span className="plus js-plus-icon" />
                  <div className="menu-level-1 ver2 dropdown-menu">
                    <div className="row">
                      <div className="cate-item col-md-4 col-sm-12">
                        <div className="demo-img">
                          <a href="home1.html">
                            <img
                              src="img/demo/demo1.jpg"
                              alt=""
                              className="img-reponsive"
                            />
                          </a>
                        </div>
                        <div className="demo-text">Demo 1</div>
                      </div>
                      <div className="cate-item col-md-4 col-sm-12">
                        <div className="demo-img">
                          <a href="home2.html">
                            <img
                              src="img/demo/demo2.jpg"
                              alt=""
                              className="img-reponsive"
                            />
                          </a>
                        </div>
                        <div className="demo-text">Demo 2</div>
                      </div>
                      <div className="cate-item col-md-4 col-sm-12">
                        <div className="demo-img">
                          <a href="home3.html">
                            <img
                              src="img/demo/demo3.jpg"
                              alt=""
                              className="img-reponsive"
                            />
                          </a>
                        </div>
                        <div className="demo-text">Demo 3</div>
                      </div>
                      <div className="cate-item col-md-4 col-sm-12">
                        <div className="demo-img">
                          <a href="home4.html">
                            <img
                              src="img/demo/demo4.jpg"
                              alt=""
                              className="img-reponsive"
                            />
                          </a>
                        </div>
                        <div className="demo-text">Demo 4</div>
                      </div>
                      <div className="cate-item col-md-4 col-sm-12">
                        <div className="demo-img">
                          <a href="home5.html">
                            <img
                              src="img/demo/demo5.jpg"
                              alt=""
                              className="img-reponsive"
                            />
                          </a>
                        </div>
                        <div className="demo-text">Demo 5</div>
                      </div>
                      <div className="cate-item col-md-4 col-sm-12">
                        <div className="demo-img">
                          <a href="#">
                            <img
                              src="img/demo/demo6.jpg"
                              alt=""
                              className="img-reponsive"
                            />
                          </a>
                          <div className="overlay-img box-center">
                            <a href="#" className="btn-gradient btn-csoon">
                              Coming soon
                            </a>
                          </div>
                        </div>
                        <div className="demo-text">Demo 6</div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="level1 dropdown hassub">
                  <a href="#">
                    Shop<span className="h-ribbon h-pos e-green">sale</span>
                  </a>
                  <span className="plus js-plus-icon" />
                  <div className="menu-level-1 dropdown-menu">
                    <ul className="level1">
                      <li className="level2 col-4">
                        <a href="#">Shop Layout</a>
                        <ul className="menu-level-2">
                          <li className="level3">
                            <a href="shop_full.html" title="">
                              Shop Full Width
                            </a>
                          </li>
                          <li className="level3">
                            <a href="shopgrid_v1.html" title="">
                              Shop Grid v.1
                            </a>
                          </li>
                          <li className="level3">
                            <a href="shopgrid_v2.html" title="">
                              Shop Grid v.2
                            </a>
                            <span className="h-ribbon v3 e-red h-pos">Hot</span>
                          </li>
                          <li className="level3">
                            <a href="shoplist.html" title="">
                              Shop List
                            </a>
                          </li>
                          <li className="level3">
                            <a href="shopleft_sidebar.html" title="">
                              Shop Left Sidebar
                            </a>
                          </li>
                          <li className="level3">
                            <a href="shopright_sidebar.html" title="">
                              Shop Right Sidebar
                            </a>
                          </li>
                        </ul>
                        <a href="#">Categories</a>
                        <ul className="menu-level-2">
                          <li className="level3">
                            <a href="cat_fullwidth.html" title="">
                              Categories Full Width
                            </a>
                            <span className="h-ribbon v3 e-red h-pos">Hot</span>
                          </li>
                          <li className="level3">
                            <a href="cat_left_sidebar.html" title="">
                              Categories Left Sidebar
                            </a>
                          </li>
                          <li className="level3">
                            <a href="cat_right_sidebar.html" title="">
                              Categories Right Sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="level2 col-4">
                        <a href="# ">Single Product Type</a>
                        <ul className="menu-level-2">
                          <li className="level3">
                            <a href="bundle.html" title="">
                              Bundle
                            </a>
                            <span className="h-ribbon v3 e-red h-pos">Hot</span>
                          </li>
                          <li className="level3">
                            <a href="pin_product.html" title="">
                              Pin Product
                            </a>
                          </li>
                          <li className="level3">
                            <a href="360degree.html" title="">
                              360 Degree
                            </a>
                            <span className="h-ribbon v3 e-green h-pos">
                              new
                            </span>
                          </li>
                          <li className="level3">
                            <a href="feature_video.html" title="">
                              Featued video
                            </a>
                          </li>
                          <li className="level3">
                            <a href="simple.html">Simple</a>
                          </li>
                          <li className="level3">
                            <a href="variable.html">Variable</a>
                          </li>
                          <li className="level3">
                            <a href="affilate.html">External / Affiliate</a>
                          </li>
                          <li className="level3">
                            <a href="grouped.html">Grouped</a>
                          </li>
                          <li className="level3">
                            <a href="outofstock.html">Out of stock</a>
                          </li>
                          <li className="level3">
                            <a href="onsale.html">On sale</a>
                          </li>
                        </ul>
                      </li>
                      <li className="level2 col-4">
                        <a href="#">Single Product Layout</a>
                        <ul className="menu-level-2">
                          <li className="level3">
                            <a href="product_extended.html" title="">
                              Product Extended
                            </a>
                            <span className="h-ribbon v3 e-red h-pos">Hot</span>
                          </li>
                          <li className="level3">
                            <a href="product_sidebar.html" title="">
                              Product Left Sidebar
                            </a>
                          </li>
                          <li className="level3">
                            <a href="product_right_sidebar.html" title="">
                              Product Right Sideba
                            </a>
                          </li>
                        </ul>
                        <a href="#">Other Pages</a>
                        <ul className="menu-level-2">
                          <li className="level3">
                            <a href="shop_full.html" title="">
                              Shop
                            </a>
                          </li>
                          <li className="level3">
                            <a href="cart.html" title="">
                              Cart
                            </a>
                          </li>
                          <li className="level3">
                            <a href="wishlist.html" title="">
                              My Wishlist
                            </a>
                          </li>
                          <li className="level3">
                            <a href="checkout.html" title="">
                              Checkout
                            </a>
                          </li>
                          <li className="level3">
                            <a href="myaccount.html" title="">
                              My Account
                            </a>
                          </li>
                          <li className="level3">
                            <a href="track.html" title="">
                              Track Your Order
                            </a>
                          </li>
                          <li className="level3">
                            <a href="quickview.html" title="">
                              Quick View
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="clearfix" />
                  </div>
                </li>
                <li className="level1 active dropdown">
                  <a href="#">Mega menu</a>
                </li>
                <li className="level1 active dropdown">
                  <a href="#">
                    Pages<span className="h-ribbon h-pos e-skyblue">new</span>
                  </a>
                  <span className="plus js-plus-icon" />
                  <ul className="dropdown-menu menu-level-1">
                    <li className="level2">
                      <a href="aboutus.html" title="About Us ">
                        About Us{" "}
                      </a>
                    </li>
                    <li className="level2">
                      <a href="contactus.html" title="Contact">
                        Contact
                      </a>
                    </li>
                    <li className="level2">
                      <a href="faq.html" title="FAQs">
                        FAQs
                      </a>
                    </li>
                    <li className="level2">
                      <a href="404.html" >
                        404
                      </a>
                    </li>
                    <li className="level2">
                      <a href="commingsoon.html" title="Coming Soon">
                        Coming Soon
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="level1 active dropdown">
                  <a href="#">Blog</a>
                  <ul className="dropdown-menu menu-level-1">
                    <li className="level2">
                      <a href="blog-standar.html" title="Blog Standar">
                        Blog Standar
                      </a>
                    </li>
                    <li className="level2">
                      <a href="blog_grid.html" title="Blog Gird">
                        Blog Gird
                      </a>
                    </li>
                    <li className="level2">
                      <a href="blog-standar.html" title="Blog Sidebar">
                        Blog Sidebar
                      </a>
                    </li>
                    <li className="level2">
                      <a href="blog-single-post.html" title="Blog Single Post">
                        Blog Single Post
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
          <div className="header-bottom-right hidden-xs hidden-sm">
            <img src="img/icon-ship.png" alt="" className="img-reponsive" />
            <span>Free Shipping on Orders $100</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavHeader;
