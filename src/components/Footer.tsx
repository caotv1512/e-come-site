import React from "react";

function Footer() {
  return (
    <footer>
      <div className="f-top">
        <div className="container container-240">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <div className="footer-block footer-about">
                <div className="f-logo">
                  <a href="#">
                    <img src="img/logo.png" alt="" className="img-reponsive" />
                  </a>
                </div>
                <ul className="footer-block-content">
                  <li className="address">
                    <span>
                      45 Grand Central Terminal New York,NY 1017 United State
                      USA
                    </span>
                  </li>
                  <li className="phone">
                    <span>(+123) 456 789 - (+123) 666 888</span>
                  </li>
                  <li className="email">
                    <span>Contact@yourcompany.com</span>
                  </li>
                  <li className="time">
                    <span>
                      Mon-Sat 9:00pm - 5:00pm &nbsp;&nbsp;&nbsp; Sun : Closed
                    </span>
                  </li>
                </ul>
                <div className="footer-social social">
                  <h3 className="footer-block-title">Follow us</h3>
                  <a href="#" className="fa fa-twitter" />
                  <a href="#" className="fa fa-dribbble" />
                  <a href="#" className="fa fa-behance" />
                  <a href="#" className="fa fa-instagram" />
                </div>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3">
              <div className="footer-block">
                <h3 className="footer-block-title">Quick menu</h3>
                <ul className="footer-block-content">
                  <li>
                    <a href="#">TV &amp; Video</a>
                  </li>
                  <li>
                    <a href="#">Home Audio &amp; Theater</a>
                  </li>
                  <li>
                    <a href="#">Camera, Photo &amp; Video</a>
                  </li>
                  <li>
                    <a href="#">Cell Phones &amp; Accessories</a>
                  </li>
                  <li>
                    <a href="#">Headphones</a>
                  </li>
                  <li>
                    <a href="#">Video Games</a>
                  </li>
                  <li>
                    <a href="#">Bluetooth &amp; Wireless Speakers</a>
                  </li>
                  <li>
                    <a href="#">Car Electronics</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-2 col-lg-2">
              <div className="footer-block">
                <h3 className="footer-block-title">Customer Service</h3>
                <ul className="footer-block-content">
                  <li>
                    <a href="#">My Account</a>
                  </li>
                  <li>
                    <a href="#">Track your Order</a>
                  </li>
                  <li>
                    <a href="#">Returns/Exchange</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Customer Service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
              <div className="footer-block">
                <div className="footer-block-phone">
                  <h3 className="footer-block-title">Hot Line</h3>
                  <p className="phone-desc">Call Us toll Free</p>
                  <p className="phone-light">
                    (+123) 456 789 or (+123) 666 888
                  </p>
                </div>
                <div className="footer-block-newsletter">
                  <h3 className="footer-block-title">Subscription</h3>
                  <p>Register now to get updates on promotions and coupons.</p>
                  <form className="form_newsletter" action="#" method="post">
                    <input
                      type="email"
                      defaultValue=""
                      placeholder="Enter your emaill adress"
                      name="EMAIL"
                      id="mail"
                      className="newsletter-input form-control"
                    />
                    <button
                      id="subscribe"
                      className="button_mini btn btn-gradient"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f-bottom">
        <div className="container container-240">
          <div className="row flex lr">
            <div className="col-xs-6 f-copyright">
              <span>© 2023 CaoTV. All rights reserved.</span>
            </div>
            <div className="col-xs-6 f-payment hidden-xs">
              <a href="#">
                <img
                  src="img/payment/mastercard.png"
                  alt=""
                  className="img-reponsive"
                />
              </a>
              <a href="#">
                <img
                  src="img/payment/paypal.png"
                  alt=""
                  className="img-reponsive"
                />
              </a>
              <a href="#">
                <img
                  src="img/payment/visa.png"
                  alt=""
                  className="img-reponsive"
                />
              </a>
              <a href="#">
                <img
                  src="img/payment/american-express.png"
                  alt=""
                  className="img-reponsive"
                />
              </a>
              <a href="#">
                <img
                  src="img/payment/western-union.png"
                  alt=""
                  className="img-reponsive"
                />
              </a>
              <a href="#">
                <img
                  src="img/payment/jcb.png"
                  alt=""
                  className="img-reponsive"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
