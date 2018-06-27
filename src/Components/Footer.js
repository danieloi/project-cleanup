import React from "react";
import { Link } from "react-router-dom";
import icon from "./1x1.png";

export const Footer = () => {
  return (
    <footer className="footer clearfix" role="contentinfo">
      <div className="contain flex_footer">
        <div className="">
          <Link to="order" className="toggle_one">
            <img src={icon} alt="icon" className="footer_icon " />
          </Link>
          <Link to="order" className="toggle_two">
            <p className="created ">
              <span className="one">S</span> <span className="two">&</span>
              <span className="three">S</span>
            </p>
          </Link>
          <Link to="order" className="toggle_three">
            <p className="created ">
              <span className="one">S</span>{" "}
              <span className="two_smaller">&</span>
              <span className="three_smaller">S</span>
            </p>
          </Link>
        </div>
        <div className="text-right">
          <Link to="/order" className="footer_nav">
            ORDER
          </Link>
          <div className="divider" />
          <Link to="/about" className="footer_nav">
            ABOUT
          </Link>
          <div className="divider" />
          <Link to="/faqs" className="footer_nav">
            FAQs
          </Link>
          <div className="divider" />

          {/* <a href="http://mayowa.me" target="_blank" rel="noopener noreferrer">
            www.mayowa.me <span className="glyphicon glyphicon-new-window" />
          </a> */}
        </div>
      </div>
    </footer>
  );
};
