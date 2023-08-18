import React from 'react'

function HomeBanner() {
  return (
    <div className="homepage-banner">
    <div className="container container-240">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="banner-img banner-img2">
            <a href="/#">
              <img
                src="img/banner/h1_b2.jpg"
                alt=""
                className="img-responsive"
              />
            </a>
            <div className="h-banner-content">
              <p className="content-name">The pro stage for your home</p>
              <p className="content-price">
                From <span className="red">69.99</span>
              </p>
              <a href="/#" className="btn-banner">
                Shop now
                <i className="ion-ios-arrow-forward" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="banner-img banner-img2">
            <a href="/#">
              <img
                src="img/banner/h1_b3.jpg"
                alt=""
                className="img-responsive"
              />
            </a>
            <div className="h-banner-content">
              <p className="content-name">Smart speaker for music lovers</p>
              <p className="content-price">
                From <span className="red">39.99</span>
              </p>
              <a href="/#" className="btn-banner">
                Shop now
                <i className="ion-ios-arrow-forward" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomeBanner