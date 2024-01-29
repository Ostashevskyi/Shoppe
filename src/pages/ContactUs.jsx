import React from "react";

import Wrapper from "@/components/Wrapper";
import { ContactForm } from "@/components/Forms/ContactForm";

const ContactUs = () => {
  return (
    <Wrapper>
      <main className="mt-32 mb-64 max-w-[908px] m-auto xs:mx-4 sm:mx-4 md:mx-4 xs:mb-24 sm:mb-24 md:mb-24 xs:mt-9 sm:mt-9 md:mt-9">
        <div className="mb-24 xs:mb-14 sm:mb-14 md:mb-14 flex flex-col justify-center lg:items-center gap-10">
          <p className="heading1D xs:text-xl sm:text-xl md:text-xl">
            Contact Us
          </p>
          <p className="heading3D max-w-[550px] lg:text-center xs:text-xl sm:text-xl md:text-xl">
            Say Hello send us your thoughts about our products or share your
            ideas with our Team!
          </p>
        </div>
        <ContactForm />
      </main>
    </Wrapper>
  );
};

export default ContactUs;
