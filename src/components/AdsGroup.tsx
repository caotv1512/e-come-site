import React from 'react'

function AdsGroup() {
  return (
    <div className="ads-group v3">
    <div className="container container-240">
      <div className="row">
        <div className="col-lg-3 col-md-3 set-w" />
        <div className="col-lg-9 col-md-9 set-w2">
          <div className="row">
            <div className="col-md-8 col-sm-8 col-xs-12">
              <div className="slide">
                <div className="e-slide v2 js-slider-3items">
                  <div className="e-slide-img v2">
                    <a href="/#">
                      <img src="img/slider/h1_s1.jpg" alt="" />
                    </a>
                    <div className="box-center slide-content v3">
                      <p className="cate v2 white text-center">
                        Power to the pro
                      </p>
                      <h3 className="white v3 text-center">
                        The vision is brighter than ever.
                      </h3>
                      <a href="/#" className="slide-btn e-red-gradient">
                        Shop now
                        <i className="ion-ios-arrow-forward" />
                      </a>
                    </div>
                  </div>
                  {/* <div className="e-slide-img v2">
                    <a href="/#">
                      <img src="img/slider/h1_s2.jpg" alt="" />
                    </a>
                    <div className="box-center slide-content v3">
                      <p className="cate v2 white text-center">
                        Power to the pro
                      </p>
                      <h3 className="white v3 text-center">
                        The vision is brighter than ever.
                      </h3>
                      <a href="/#" className="slide-btn e-red-gradient">
                        Shop now
                        <i className="ion-ios-arrow-forward" />
                      </a>
                    </div>
                  </div>
                  <div className="e-slide-img v2">
                    <a href="/#">
                      <img src="img/slider/h1_s3.jpg" alt="" />
                    </a>
                    <div className="box-center slide-content v3">
                      <p className="cate v2 white text-center">
                        Power to the pro
                      </p>
                      <h3 className="white v3 text-center">
                        The vision is brighter than ever.
                      </h3>
                      <a href="/#" className="slide-btn e-red-gradient">
                        Shop now
                        <i className="ion-ios-arrow-forward" />
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="ads">
                <div className="banner-img banner-img2">
                  <a href="/#">
                    <img
                      src="img/banner/h1_b1.jpg"
                      alt=""
                      className="img-responsive"
                    />
                  </a>
                  <div className="h-banner-content v3">
                    <p className="content-name">Mini Quick Chagre 3.0</p>
                    <p className="content-price percent">
                      Sale up to <span className="red">40</span>
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
      </div>
    </div>
  </div>
  )
}

export default AdsGroup