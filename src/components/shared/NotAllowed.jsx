import React from "react";
import { ButtonM } from "@/components/Buttons/ButtonM";
import { useAuth0 } from "@auth0/auth0-react";

const NotAllowed = ({ message }) => {
  const { loginWithPopup } = useAuth0();
  return (
    <div className="flex flex-col gap-2">
      <p>To have an access to {message}, please log in</p>
      <ButtonM onClick={() => loginWithPopup()}>Log in</ButtonM>
    </div>
  );
};

export default NotAllowed;
