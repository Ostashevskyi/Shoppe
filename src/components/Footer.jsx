import React from "react";

import { NavLink } from "react-router-dom";

import TwitterIcon from "@/components/icons/TwitterIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";

import { NewsletterInput } from "@/components/Inputs/NewsletterInput";

const Footer = () => {
  return (
    <footer className="mt-auto flex-shrink-0">
      {/* FOOTER DESKTOP */}
      <section className="hidden lg:flex lg:mx-4 xl:flex xxl:flex flex-col border-t-2 border-t-light_gray pt-12">
        <div className="flex flex-wrap justify-between mb-12">
          <div className="flex items-center gap-10  heading5D space-y-0 uppercase text-dark_gray">
            <NavLink to="/contact-us">Contact</NavLink>
            <NavLink to="/terms-of-services">Terms of services</NavLink>
          </div>
          <div>
            <NewsletterInput />
          </div>
        </div>
        <div className="flex justify-between mb-20">
          <div>
            <p className="heading5D text-dark_gray">
              © 2024 Shelly.
              <NavLink to={"/privacy"} className="ml-2">
                Terms of use and privacy policy
              </NavLink>
              .
            </p>
          </div>
          <div className="flex gap-7">
            <NavLink to="https://www.linkedin.com/">
              <LinkedinIcon />
            </NavLink>
            <NavLink to="https://www.facebook.com/">
              <FacebookIcon />
            </NavLink>
            <NavLink to="https://www.instagram.com/">
              <InstagramIcon />
            </NavLink>
            <NavLink to="https://twitter.com/">
              <TwitterIcon />
            </NavLink>
          </div>
        </div>
      </section>

      {/* FOOTER MOBILE */}
      <section className="lg:hidden xl:hidden xxl:hidden mx-4 mb-20">
        <div className="mb-7">
          <NewsletterInput />
        </div>
        <div className="flex flex-col gap-2 body_smallD space-y-0 uppercase text-dark_gray mb-8">
          <NavLink to="/contact-us">Contact</NavLink>
          <NavLink to="/terms-of-services">Terms of services</NavLink>
        </div>
        <div className="flex items-center gap-2 mb-8">
          <p className="text-text">Follow us</p>
          <div className="w-12 ">
            <p className="h-[1px] bg-text w-full"></p>
          </div>
          <div className="flex gap-7">
            <NavLink to="https://www.linkedin.com/">
              <LinkedinIcon />
            </NavLink>
            <NavLink to="https://www.facebook.com/">
              <FacebookIcon />
            </NavLink>
            <NavLink to="https://www.instagram.com/">
              <InstagramIcon />
            </NavLink>
            <NavLink to="https://twitter.com/">
              <TwitterIcon />
            </NavLink>
          </div>
        </div>
        <div>
          <p className="heading5D text-dark_gray">
            © 2024 Shelly.
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
