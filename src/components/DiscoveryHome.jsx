import React from "react";
import SideImage from "./SideImage";
import DiscoveryGolfVideo from "./DiscoveryGolfVideo";
import LeftImage from "./LeftImage";
import ImageGallery from "./ImageGallery";

export default class DiscoveryUi extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <header className="site-header site-header-normal">
          <div className="head-log"></div>
          <div className="siteHeadingTabs">
            <ul className="headerMenu">
              <li className="menuItem">What we do</li>
              <li className="menuItem">Our Worlds</li>
              <li className="menuItem">Experiences</li>
              <li className="menuItem">Company</li>
              <li className="menuItem">Contact</li>
            </ul>
          </div>
        </header>
        <main className="page">
          <article className="data-view">
            <div className="page_mask">
              <div className="soomth-section">
                <div className="glof-image">
                  <figure className="glof-image-bg">
                    <picture className="">
                      <img src={require("../assests/Golf.jpg")} alt="" />
                    </picture>
                  </figure>
                  <div className="innerName">
                    <h1>Golf</h1>
                  </div>
                  <div className="scrollDown-text">
                    <span className="scroll">Scroll down</span>
                  </div>
                </div>
              </div>
              <div className="first-pargraph">
                <div className="row-samll">
                  <p className="text">
                    <div>
                      We commission the world’s most renowned course architects
                      to{" "}
                    </div>
                    <div>
                      design spectacular golf experiences on challenging yet
                    </div>
                    <div>
                      incredibly playable 18-hole courses. Our trademark comfort
                    </div>
                    <div>
                      stations also set new standards in on-course amenities.
                    </div>
                  </p>
                </div>
              </div>
            </div>
            <SideImage />
            <div className="videoPlay">
              <img
                src={require("../assests/golf-video-placeholder.jpg")}
                alt=""
              />
            </div>
            <LeftImage />
            <ImageGallery />
            <div className="pageBottom">
              <section className="bottomSection">
                <div>
                  <img
                    src={require("../assests/horseRide.jpg")}
                    alt=""
                    id="horseRide"
                  />
                </div>
              </section>
              <footer className="footerPage">
                <div className="o-row">
                  <div className="c-siteFoot">
                    <nav className="c-siteFootNav">
                      <div className="c-siteFootItem">
                        <h4 id="title">Company</h4>
                        <ul id="menuFoot">
                          <li id="c-site-menu-item">
                            <a href="/careers">Careers</a>
                          </li>
                          <li id="c-site-menu-item">
                            <a href="/foundation">Foundation</a>
                          </li>
                          <li id="c-site-menu-item">
                            <a href="/press">Press</a>
                          </li>
                          <li id="c-site-menu-item">
                            <a href="/privacy">Privacy</a>
                          </li>
                        </ul>
                      </div>
                      <div className="c-site-menu">
                        <h4 id="title">Get In Touch</h4>
                        <ul id="menuFoot">
                          <li id="c-site-menu-item">
                            <a href="/telephone">(480) 624-5200</a>
                          </li>
                          <li id="c-site-menu-item">
                            <a href="/mail">mail@discoverylandco.com</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </footer>
            </div>
          </article>
        </main>
      </div>
    );
  }
}
