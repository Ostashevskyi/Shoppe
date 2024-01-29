import React from "react";

import Wrapper from "@/components/Wrapper";

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <main className="max-w-[670px] m-auto mt-24 mb-60 xs:mx-4 sm:mx-4 md:mx-4 xs:mt-9 sm:mt-9 md:mt-9 xs:mb-24 sm:mb-24 md:mb-24">
        <p className="heading1D lg:text-center xl:text-center xxl:text-center mb-10 xs:text-lg sm:text-lg md:text-lg  ">
          Privacy Policy
        </p>
        <p className="heading 5D mb-10">
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis.
        </p>
        <section className="mb-10">
          <p className="heading2D mb-6">Security</p>
          <p className="heading5D">
            Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
            sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
            eget pellentesque risus scelerisque.
          </p>
        </section>
        <section>
          <p className="heading2D mb-6">Cookies</p>
          <ul className="ml-3 list-disc list-inside heading5D">
            <li>
              Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
              sollicitudin.
            </li>
            <li>
              Nam fringilla molestie velit, eget pellentesque risus scelerisque
            </li>
          </ul>
        </section>
      </main>
    </Wrapper>
  );
};

export default PrivacyPolicy;
