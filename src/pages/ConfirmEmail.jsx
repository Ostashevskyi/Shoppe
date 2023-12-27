import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import { supabase } from "../auth/client";
import { ButtonM } from "@/components/Button";
import { NavLink } from "react-router-dom";

const ConfirmEmail = () => {
  const [session, setSession] = useState();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  }, []);

  return (
    <Wrapper>
      <div className="mt-24 mb-60 text-center">
        {session ? (
          <div>
            <p>Confirmed!</p>
            <NavLink to="/">
              <ButtonM>Go to main</ButtonM>
            </NavLink>
          </div>
        ) : (
          <p>List was sent to your email. Please check your email!</p>
        )}
      </div>
    </Wrapper>
  );
};

export default ConfirmEmail;
