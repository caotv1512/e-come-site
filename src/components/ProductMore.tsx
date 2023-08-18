import React from 'react'

function ProductMore() {
  return (
    <div className="more-product bg-gradient bg-insinde">
    <div className="container container-240">
      <div className="h-heading">
        <div className="title-icon t-inline">
          <img src="img/iconbs.png" alt="" />
          <h1>You may like</h1>
        </div>
        <a href="#" className="btn-morepd">
          <span>
            <i className="icon-refresh" />
          </span>
          Refresh for more
        </a>
      </div>
      <div className="multiple-row js-multiple-row">
        <div className="product-item">
          <div className="pd-bd product-inner v2">
            <div className="flex align-center">
              <div className="product-img">
                <a href="#">
                  <img
                    src="img/product/ipad.jpg"
                    alt=""
                    className="img-reponsive"
                  />
                </a>
              </div>
              <div className="product-info">
                <div className="color-group"></div>
                <div className="element-list element-list-left"></div>
                <div className="element-list element-list-middle">
                  <p className="product-cate">Audio Speakers</p>
                  <h3 className="product-title">
                    <a href="#">Harman Kardon Onyx Studio </a>
                  </h3>
                  <div className="product-bottom v2">
                    <div className="product-price">
                      <span>$1,215.00</span>
                    </div>
                    <div className="product-bottom-element flex">
                      <a href="#" className="btn-icon btn-view">
                        <span className="icon-bg icon-view" />
                      </a>
                      <div className="color-group">
                        <a href="#" className="circle darkyellow" />
                        <a href="#" className="circle skyblue" />
                        <a href="#" className="circle pink" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-button-group hidden-xs hidden-sm">
                  <a href="#" className="btn-icon">
                    <span className="icon-bg icon-cart" />
                  </a>
                  <a href="#" className="btn-icon">
                    <span className="icon-bg icon-wishlist" />
                  </a>
                  <a href="#" className="btn-icon">
                    <span className="icon-bg icon-compare" />
                  </a>
                </div>
              </div>
            </div>
            <div className="product-button-group hidden-md hidden-lg">
              <a href="#" className="btn-icon">
                <span className="icon-bg icon-cart" />
              </a>
              <a href="#" className="btn-icon">
                <span className="icon-bg icon-wishlist" />
              </a>
              <a href="#" className="btn-icon">
                <span className="icon-bg icon-compare" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductMore