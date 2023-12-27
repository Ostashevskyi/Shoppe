import React from "react";

import Wrapper from "@/components/Wrapper";
import { ContactForm } from "@/components/Forms/ContactForm";

const ContactUs = () => {
  return (
    <Wrapper>
      <main className="mt-32 mb-64 max-w-[908px] m-auto">
        <div className="mb-24 flex flex-col justify-center items-center gap-10">
          <p className="heading1D">Contact Us</p>
          <p className="heading3D max-w-[550px] text-center">
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
