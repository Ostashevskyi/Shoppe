import React from "react";
import { NavLink } from "react-router-dom";
import { NewsletterInput } from "@/components/Inputs/NewsletterInput";

import {
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  twitterIcon,
} from "@/utils/icon_imports";

const Footer = () => {
  return (
    <footer>
      {/* FOOTER DESKTOP */}
      <section className="hidden lg:flex md:flex xxl:flex border-t-2 border-t-light_gray pt-12">
        <div className=" flex-wrap justify-between mb-12">
          <div className="flex items-center gap-10  heading5D space-y-0 uppercase text-dark_gray">
            <NavLink to="/contact-us">Contact</NavLink>
            <NavLink to="/terms-of-services">Terms of services</NavLink>
            <NavLink to="/shipping-and-returns">Shipping and returns</NavLink>
          </div>
          <div>
            <NewsletterInput />
          </div>
        </div>
        <div className="flex justify-between mb-20">
          <div>
            <p className="heading5D text-dark_gray">
              © 2023 Shelly.
              <NavLink to={"/privacy"} className="ml-2">
                Terms of use and privacy policy
              </NavLink>
              .
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
      </section>

      {/* FOOTER MOBILE */}
      <section className="mx-4 mb-20">
        <div className="mb-7">
          <NewsletterInput />
        </div>
        <div className="flex flex-col gap-2 body_smallD space-y-0 uppercase text-dark_gray mb-8">
          <NavLink to="/contact-us">Contact</NavLink>
          <NavLink to="/terms-of-services">Terms of services</NavLink>
          <NavLink to="/shipping-and-returns">Shipping and returns</NavLink>
        </div>
        <div className="flex items-center gap-2 mb-8">
          <p>Follow us</p>
          <div className="w-12 ">
            <p className="h-[1px] bg-black w-full"></p>
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
        <div>
          <p className="heading5D text-dark_gray">
            © 2023 Shelly.
            <NavLink to={"/privacy"} className="ml-2">
              Terms of use and privacy policy
            </NavLink>
            .
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
