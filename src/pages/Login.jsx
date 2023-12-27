import React, { useEffect, useState } from "react";
import Wrapper from "@/components/Wrapper";
import { LoginForm, RegisterForm } from "../components/Form";
import { supabase } from "../auth/client";

export const signUpUser = async ({ userInfo }) => {
  await supabase.auth.signUp({
    email: userInfo.email,
    password: userInfo.password,
    options: {
      data: {
        first_name: userInfo.firstName,
        last_name: userInfo.lastName,
        display_name: userInfo.displayName,
      },
    },
  });
};

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Wrapper>
      <main className="flex flex-col justify-center items-center mt-32">
        <p className="heading1D mb-16">My account</p>
        <div className="max-w-fit max-h-fit bg-light_gray p-1 rounded-md flex items-center justify-between gap-4 heading3D mb-32">
          <button
            className={`${
              isLogin && "bg-white shadow-md"
            } w-[236px] h-[50px] rounded-md `}
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Sign in
          </button>
          <button
            className={`${
              !isLogin && "bg-white shadow-md"
            } w-[236px] h-[50px] rounded-md `}
            onClick={() => {
              setIsLogin(false);
            }}
          >
            Register
          </button>
        </div>
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </main>
    </Wrapper>
  );
};

export default Login;
