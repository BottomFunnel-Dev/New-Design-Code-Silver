import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <div className="container-fluid footerparentdiv">
        <div className="container footerContainer">
          <div className="col-lg-4  my-5 headingPolicies headingGetinTouch">
            <h5>Get in Touch</h5>
            <div className="footercalldiv mt-4">
              <img src="/img/FooterIcon/Phone.png" alt="" />
              <p>1800-120-5869</p>
            </div>
            <div className="footercalldiv">
              <img src="/img/FooterIcon/Mail.png" alt="" />
              <p>getintouch@lotusjeweller.com</p>
            </div>
            <div className="footerSocialIcons mt-4">
              <a href="#">
                <img src="/img/FooterIcon/IG.png" alt="" />
              </a>
              <a href="#">
                <img src="/img/FooterIcon/FB.png" alt="" />
              </a>
              <a href="#">
                <img src="/img/FooterIcon/IN.png" alt="" />
              </a>
              <a href="#">
                <img src="/img/FooterIcon/TW.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-3  my-5 headingPolicies">
            <h5>Our Policies</h5>
            <ul className="mt-4">
              <li> <a href="/return-exchange-policy">Return & Exchange Policy</a> </li>
              <li>Cancellation Policy</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-lg-3  my-5 headingPolicies">
            <h5>Customer Delight</h5>
            <ul className="mt-4">
              <li>Track Your Order</li>
              <li>Best Price Assurance</li>
              <li>Jewellery Makeover</li>
            </ul>
          </div>
          <div className="col-lg-2  my-5 headingPolicies headingOverview">
            <h5>Overview</h5>
            <ul className="mt-4">
              <li>Collections</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark py-2">
        <p className="text-light text-center m-0">
          Copyright &copy; 2024 Bottom Funnel. All Right Reserved
        </p>
      </div>
    </>
  );
};
