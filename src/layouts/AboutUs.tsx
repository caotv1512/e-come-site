import React from "react";

function AboutUs() {
  return (
    <div>
      {" "}
      <div className="aboutus">
        <div className="container container-240">
          <div className="about-img spc2">
            <img
              src="img/about/about_1.jpg"
              alt=""
              className="img-responsive"
            />
          </div>
        </div>
        <div className="about-content">
          <div className="container container-240">
            <div className="entry-inside v4 text-center">
              <img src="img/single/simple_icon.png" alt="" />
              <h1 className="entry-title v2 spc">
                Multi-Purpose WooCommerce Theme for Electronics Store{" "}
              </h1>
            </div>
          </div>
          <div className="container container-240">
            <div className="row pd1">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <h3 className="about-title spc">Our vision</h3>
                <p className="about-desc spc">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when
                  <br /> looking at its layout. The point of using Lorem Ipsum
                  is that it has a more-or-less normal distribution of
                  <br /> letters, as opposed to using 'Content here, content
                  here', making it look like readable English. Many desktop
                  publishing packages and web page editors now use Lorem Ipsum
                  as their default model text,{" "}
                </p>
                <div className="about-img">
                  <img
                    src="img/about/about_2.jpg"
                    alt=""
                    className="img-responsive"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <h3 className="about-title spc">Our vision</h3>
                <p className="about-desc spc">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when
                  <br /> looking at its layout. The point of using Lorem Ipsum
                  is that it has a more-or-less normal distribution of
                  <br /> letters, as opposed to using 'Content here, content
                  here', making it look like readable English. Many desktop
                  publishing packages and web page editors now use Lorem Ipsum
                  as their default model text,{" "}
                </p>
                <div className="about-img">
                  <img
                    src="img/about/about_3.jpg"
                    alt=""
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient">
            <div className="container container-240">
              <div className="row pd2">
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div className="about-element text-center">
                    <img src="img/about/icon1.png" alt="" />
                    <h3 className="about-title v2">More than 2000 + items</h3>
                    <p className="about-desc">
                      Radable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div className="about-element text-center">
                    <img src="img/about/icon2.png" alt="" />
                    <h3 className="about-title v2">More than 2000 + items</h3>
                    <p className="about-desc">
                      Radable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters
                    </p>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div className="about-element text-center">
                    <img src="img/about/icon3.png" alt="" />
                    <h3 className="about-title v2">More than 2000 + items</h3>
                    <p className="about-desc">
                      Radable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container container-240">
            <div className="team">
              <h1 className="about-title v3 spc text-center">Our teams</h1>
              <div  style={{display: 'flex'}} className="d-flex owl-theme js-owl-team">
                <div style={{marginRight: '40px'}} className="team-item">
                  <div className="team-img">
                    <img src="img/about/team_1.jpg" alt="" />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">Robert Smith</h3>
                    <p className="team-career">Director</p>
                    <p className="team-desc">
                      Radable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters
                    </p>
                  </div>
                </div>
                <div style={{marginRight: '40px'}} className="team-item">  
                  <div className="team-img">
                    <img src="img/about/team_2.jpg" alt="" />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">Rudy Reeves</h3>
                    <p className="team-career">CEO</p>
                    <p className="team-desc">
                      Radable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters
                    </p>
                  </div>
                </div>
                <div style={{marginRight: '40px'}} className="team-item">  
                  <div className="team-img">
                    <img src="img/about/team_3.jpg" alt="" />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">Sandra Hale</h3>
                    <p className="team-career">Designer</p>
                    <p className="team-desc">
                      Radable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters
                    </p>
                  </div>
                </div>
                <div style={{marginRight: '40px'}} className="team-item">  
                  <div className="team-img">
                    <img src="img/about/team_4.jpg" alt="" />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">Brandon Vasquez</h3>
                    <p className="team-career">Director</p>
                    <p className="team-desc">
                      Radable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
