import React from "react";
import { NavLink } from "react-router-dom";
import { NewsletterInput } from "./Input";

import {
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  twitterIcon,
} from "@/utils/icon_imports";

const Footer = () => {
  return (
    <footer className="border-t-2 border-t-light_gray pt-12">
      <div className="flex flex-wrap justify-between mb-12">
        <div className="flex items-center gap-10  heading5D space-y-0 uppercase text-dark_gray">
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="terms-of-services">Terms of services</NavLink>
          <NavLink to="shipping-and-returns">Shipping and returns</NavLink>
        </div>
        <div>
          <NewsletterInput />
        </div>
      </div>
      <div className="flex justify-between mb-20">
        <div>
          <p className="heading5D text-dark_gray">
            © 2023 Shelly. Terms of use and privacy policy.
          </p>
        </div>
        <div className="flex gap-7">
          <NavLink to="#">
            <img src={linkedinIcon} />
          </NavLink>
          <NavLink to="#">
            <img src={facebookIcon} />
          </NavLink>
          <NavLink to="#">
            <img src={instagramIcon} />
          </NavLink>
          <NavLink to="#">
            <img src={twitterIcon} />
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
