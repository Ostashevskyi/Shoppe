import React from "react";
import { ButtonM } from "@/components/Buttons/ButtonM";
import { useAuth0 } from "@auth0/auth0-react";

const NotAllowed = ({ message }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="flex flex-col gap-2 text-text mb-[15%] xs:mb-44 sm:mb-44 md:mb-44">
      <p>To have an access to {message}, please log in</p>
      <ButtonM onClick={() => loginWithRedirect()}>Log in</ButtonM>
    </div>
  );
};

export default NotAllowed;
