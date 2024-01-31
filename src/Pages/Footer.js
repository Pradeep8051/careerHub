import { Image } from 'antd';
import React from 'react';

const Footer = () => {
  return (
    <div>
    <footer className="footer-section">
  <div className="container">
    <div className="footer-cta pt-5 ">
      <div className="row">
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-map-marker-alt" />
            <div className="cta-text">
              <h4>Find us</h4>
              <span>
              Delhi
                {/* A-1401, Skytech Matrott, Sec – 76
                NOIDA, GB Nagar, Uttar Pradesh – 201301{" "} */}
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-phone" />
            <div className="cta-text">
              <h4>Call us</h4>
              <span>+91 8920968721</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="far fa-envelope-open" />
            <div className="cta-text">
              <h4>Mail us</h4>
              <span>contact@careehub.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-content pt-5 pb-1">
      <div className="row">
        <div className="col-xl-4 col-lg-4 mb-50">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="/">
              <Image 
              
              // width={"20%"}
              // height={"80px"}
              preview={false}
              className={"img-fluid my-3"}
              src={require("../images/Careerhub logo.png")}
            />
                {/* <img
                  src="../images/Logo2.png"
                  className="img-fluid"
                  alt="logo"
                /> */}
              </a>
            </div>
            <div className="footer-text">
              <p>
              “CareeHub” is a bridge between career seekers and employers/consultants, where they meet together without any mediator.  The employers post their vacant positions i.e. skill programs, internships, courses, Jobs, etc., and career seekers (employees) apply directly.{" "}
              </p>
            </div>
            <div className="footer-social-icon">
              <span>Follow us</span>
              <ul className="social_icon">
              <li><a href="#"><i class="display-flex-center zmdi zmdi-facebook"></i></a></li>
                    <li><a href="#"><i class="display-flex-center zmdi zmdi-twitter"></i></a></li>
                    <li><a href="#"><i class="display-flex-center zmdi zmdi-google"></i></a></li>
                    <li><a href="#"><i class="display-flex-center zmdi zmdi-youtube"></i></a></li>
                {/* <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className=" zmdi zmdi-google-youtube" />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
          {/* <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
            <ul>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Gallery</a>
              </li>
              <li>
                <a href="#">Selection Process</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Sponsorship</a>
              </li>
              <li>
                <a href="#">Our Policies</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <div className="footer-text mb-25">
              <p>
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
            </div>
            <div className="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" />
                <button>
                  <i className="fab fa-telegram-plane" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
          <div className="copyright-text">
            <p>
              Copyright © 2023, All Right Reserved{" "}
              <a href="#">Soumitra Ghosh</a>
            </p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
          <div className="footer-menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Policy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

      
    </div>
  );
}

export default Footer;
