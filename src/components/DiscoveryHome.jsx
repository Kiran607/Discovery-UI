import React from "react";
import SideImage from "./SideImage";
import DiscoveryGolfVideo from "./DiscoveryGolfVideo";
import LeftImage from "./LeftImage";
import ImageGallery from "./ImageGallery";
import TopDrawer from './Drawer';
import {Parallax} from 'react-parallax';
import data from '../assests/data.json';

export default class DiscoveryUi extends React.Component {

  constructor(props){
    super(props);
    this.state={
      open:false,
      close:true,
      mouseX: 0,
      mouseY: 0,
      trailingX: 0,
      trailingY: 0,
    }
    this.cursor = React.createRef();
    this.cursorTrailing = React.createRef();
    this.animationFrame = null;
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.onMouseMove);
    this.moveCursor();
  }

  onMouseMove = (evt) => {
    const { clientX, clientY } = evt;
    this.setState({
      mouseX: clientX,
      mouseY: clientY,
    });
  }

  moveCursor = () => {
    const { mouseX, mouseY, trailingX, trailingY } = this.state;
    const diffX = mouseX - trailingX;
    const diffY = mouseY - trailingY;
    //  Number in expression is coeficient of the delay. 10 for example. You can play with it. 
    this.setState({
      trailingX: trailingX + diffX / 10,
      trailingY: trailingY + diffY / 10,
    },
    () => {
    // Using refs and transform for better performance.
      this.cursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      this.cursorTrailing.current.style.transform = `translate3d(${trailingX-10}px, ${trailingY -10}px, 0)`;
      this.animationFrame = requestAnimationFrame(this.moveCursor);
    });
  }

  handleMouseMove=(e)=>{
    const {clientX,clientY}=e;

    this.setState({
      xMain:clientX,
      yMain:clientY
    })
  }

  handleToggel=()=>{
    if (this.state.open === false) {
      this.setState({ open: true });
    } else {
      this.setState({ open: false });
    }
  }

  handleToggelClose=()=>{
    if (this.state.open === true) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  }



  render() {
    return (
      <div className="wrapper" 
      >
         <div className="cursors">
          <div 
            className="cursor"
            ref={this.cursor}
          />
          <div 
            className='cursor'
            ref={this.cursorTrailing}
          />
        
          
        <header className="site-header site-header-normal">
          <div className="head-log"></div>
          <nav className="siteHeadingTabs">
            
              {data.menu.map((postData,index)=>{
                return <ul className="headerMenu" key={index}> <li className="menuItem"><a href="/whatweDo" className= "menu-head-link">{postData.what}</a></li>
                <li className="menuItem"><a href="/our-world" className= "menu-head-link">{postData.our}</a></li>
                <li className="menuItem"><a href="/our-world" className= "menu-head-link">{postData.experenice}</a></li>
              <li className="menuItem"><a href="/our-world" className= "menu-head-link">{postData.company}</a></li>
              <li className="menuItem"><a href="/our-world" className= "menu-head-link">{postData.contact}</a></li></ul>
              })}   
            
            <button type="button" className="head-toogel" onClick={this.handleToggel}>
                <div className="c-bruger">
                    <div className="bruger-line"></div>
                    <div className="bruger-line"></div>
                    <div className="bruger-line"></div>
                </div>
                <div className="bruger-close">
                    <div className="bruger-closeLine"></div>
                    <div className="bruger-closeLine"></div>
                </div>
            </button>
          </nav>
        </header>
        <TopDrawer
        open={this.state.open}
        handleClose={this.handleToggelClose}
        />
        <main className="page">
          <article className="data-view">
            <div className="page_mask">
              <div className="soomth-section">
                <div className="glof-image">
                  <figure className="glof-image-bg">
                    <picture className="">
                      <img src={require("../assests/Golf.jpg")} className="golfBg" alt="" />
                    </picture>
                  </figure>
                  <div className="innerName">
                    <h1 className="hero-title">Golf</h1>
                  </div>
                  <div className="scrollDown-text">
                    <span className="scroll">Scroll down</span>
                  </div>
                </div>
              </div>
              <div className="first-pargraph">
                <div className="row-samll">
                  {data.text.map((postData,index)=>{
                   return <div className="text" key={index}>
                    <div>
                      {postData.firstLine}
                    </div>
                    <div>
                      {postData.secondLine}
                    </div>
                    <div>
                      {postData.thridLine}
                    </div>
                    <div>
                      {postData.fourthLine}
                    </div>
                  </div>
                  })}
                </div>
              </div>
            </div>
            <SideImage />
            <div className="videoPlay">
              <img className="videoImg"
                src={require("../assests/golf-video-placeholder.jpg")}
                alt=""
              />
            </div>
            <LeftImage />
            <ImageGallery />
            <div className="pageBottom">
              <Parallax className="horseImg" bgImage={require("../assests/horseRide.jpg") } strength={'200'}>
              <section className="bottomSection">
                <figure className="bottomImage">
                </figure>
                <div className="insideImage">
                  <h1 className="h-text">Outdoor Pursuits</h1>
                  <div className="btn-explore">Explore</div>
                </div>
                
              </section>
              </Parallax>
              <Parallax strength={'500'}>
                {data.footMenu.map((postData,index)=>{
             return <footer className="footerPage" key={index}>
                <div className="o-row">
                  <div className="c-siteFoot">
                    <nav className="c-siteFootNav">
                      <div className="c-siteFootItem">
                        <h4 id="title">{postData.title}</h4>
                        <ul id="menuFoot">
                          <li id="c-site-menu-item">
                            <a href="/careers" className="c-site-foot-menu-link">{postData.carrers}</a>
                          </li>
                          <li id="c-site-menu-item">
                            <a href="/foundation" className="c-site-foot-menu-link">{postData.fondation}</a>
                          </li>
                          <li id="c-site-menu-item">
                            <a href="/press" className="c-site-foot-menu-link">{postData.press}</a>
                          </li>
                          <li id="c-site-menu-item">
                            <a href="/privacy" className="c-site-foot-menu-link">{postData.privacy}</a>
                          </li>
                        </ul>
                      </div>
                      <div className="c-site-menu">
                        <h4 id="title">{postData.getInTouch}</h4>
                        <ul id="menuFoot">
                          <li id="c-site-menu-item">
                            <a href="/telephone" className="c-site-foot-menu-link">{postData.telephone}</a>
                          </li>
                          <li id="c-site-menu-item">
                            <a href="/mail" className="c-site-foot-menu-link" id="mailLink">{postData.mail}</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="c-site-foot-bootom">
                  <p>{postData.copyWright}</p>
                </div>
              </footer>
              })}
              </Parallax>
            </div>
          </article>
        </main>
        </div>
      </div>
    );
  }
}
