import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div>
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
                  <div className="collapse navbar-collapse fa-align-center" id="myNavbar">
                    <ul className="nav navbar-nav fa-align-center">
                      <li className="level1">
                        <a href="/#">
                          <img src="img/icon-diamond.png" alt="" />
                          <Link to="/">Home</Link>
                        </a>
                      </li>
                      <li className="level1">
                        <a href="/#">
                          <Link to="/">Shop</Link>
                          <span className="h-ribbon h-pos e-skyblue">New</span>
                        </a>
                      </li>
                      <li className="level1">
                        <Link to="/">Page</Link>
                      </li>
                      <li className="level1">
                        <a href="/#">
                          <Link to="/">About</Link>
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
    </div>
  );
}

export default SideBar;
