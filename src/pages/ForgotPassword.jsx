import React from "react";

import Wrapper from "@/components/Wrapper";
import { ForgotPasswordForm } from "@/components/Forms/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <Wrapper>
      <div className="mt-32 max-w-fit flex flex-col items-center justify-center m-auto">
        <p className="mb-10 heading1D">Have you Forgotten Your Password ?</p>
        <p className="heading3D max-w-[500px] text-center mb-20">
          If you've forgotten your password, enter your e-mail address and we'll
          send you an e-mail
        </p>
        <div className="flex flex-col gap-16 mb-64">
          <ForgotPasswordForm />
        </div>
      </div>
    </Wrapper>
  );
};

export default ForgotPassword;
