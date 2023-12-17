import React from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <section className={classes["info_section"] +' '+ classes["layout_padding2-top"]}>
        <div className={classes["social_container"]}>
          <div className={classes["social_box"]}>
            <a href="/">
              <img className={classes["icon-img"]} alt='social-link' src="/imgs/facebook.svg"/>
            </a>
            <a href="/">
            <img className={classes["icon-img"]} alt='social-link' src="/imgs/twitter.svg"/>
            </a>
            <a href="/">
            <img className={classes["icon-img"]} alt='social-link' src="/imgs/instagram.svg"/>
            </a>
           
          </div>
        </div>
        <div className="info_container ">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <h6>
                  ABOUT US
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className={classes["info_form"]}>
                  <h5>
                    Newsletter
                  </h5>
                  <form action="#">
                    <input type="email" placeholder="Enter your email"/>
                    <button>
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h6>
                  NEED HELP
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet,
                </p>
              </div>
              <div className="col-md-6 col-lg-3">
                <h6>
                  CONTACT US
                </h6>
                <div className={classes["info_link-box"]}>
                  <a href="/">
                  <FontAwesomeIcon className={classes.icon} icon={faLocationDot} />
                    <span> Gb road 123 london Uk </span>
                  </a>
                  <a href="/">
                  <FontAwesomeIcon className={classes.icon} icon={faPhone} />
                    <span>+01 12345678901</span>
                  </a>
                  <a href="/">
                  <FontAwesomeIcon className={classes.icon} icon={faEnvelope} />
                    <span> demo@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <footer className={classes["footer_section"]}>
          <div className="container">
            <p>
              © <span id="displayYear">2023</span> All Rights Reserved By
              <a href="https://shrouk-saadon.netlify.app/">Shrouk.S</a>
            </p>
          </div>
        </footer>
       
    
      </section>
    );
}

export default Footer;
