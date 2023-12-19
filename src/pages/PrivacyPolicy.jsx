import React from "react";
import Wrapper from "@/components/Wrapper";

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <main className="max-w-[670px] m-auto mt-24 mb-60">
        <p className="heading1D text-center mb-10">Privacy Policy</p>
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
