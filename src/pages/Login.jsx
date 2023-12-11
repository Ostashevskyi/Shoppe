import React, { useState } from "react";
import Wrapper from "@/components/Wrapper";
import { LoginForm, RegisterForm } from "../components/Form";

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
