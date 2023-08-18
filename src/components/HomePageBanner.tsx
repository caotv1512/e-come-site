import React from 'react'

function HomePageBanner() {
  return (
    <div className="homepage-banner">
    <div className="container container-240">
      <div className="row">
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="banner-img banner-img2">
            <a href="#">
              <img
                src="img/banner/h1_b4.jpg"
                alt=""
                className="img-responsive"
              />
            </a>
            <div className="h-banner-content v2">
              <p className="content-name">Home at the good</p>
              <p className="content-price">
                From <span className="red">69.99</span>
              </p>
              <a href="#" className="btn-banner">
                Shop now
                <i className="ion-ios-arrow-forward" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="banner-img banner-img2">
            <a href="#">
              <img
                src="img/banner/h1_b5.jpg"
                alt=""
                className="img-responsive"
              />
            </a>
            <div className="h-banner-content v2">
              <p className="content-name">Snap Digital Camera</p>
              <p className="content-price">
                From <span className="red">19.99</span>
              </p>
              <a href="#" className="btn-banner">
                Shop now
                <i className="ion-ios-arrow-forward" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 col-xs-12">
          <div className="banner-img banner-img2">
            <a href="#">
              <img
                src="img/banner/h1_b6.jpg"
                alt=""
                className="img-responsive"
              />
            </a>
            <div className="h-banner-content v2">
              <p className="content-name">Minimal Gold Wall Clock</p>
              <p className="content-price">
                From <span className="red">39.99</span>
              </p>
              <a href="#" className="btn-banner">
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

export default HomePageBanner