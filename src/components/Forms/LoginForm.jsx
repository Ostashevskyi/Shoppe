import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { supabase } from "@/auth/client";

import { EMAIL_PATTERN } from "@/utils/constants";

import { Input } from "@/components/Inputs/Input";
import { SubmitInput } from "@/components/Inputs/SubmitInput";
import { ErrorMessage } from "@/components/shared/ErrorMessage";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState();

  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        setError(error);
        // Handle error appropriately
      } else {
        console.log("Login successful");
        navigate("/");
        // Redirect or perform actions after successful login
      }
    } catch (error) {
      setError(error);
      // Handle error appropriately
    }
  };

  return (
    <form
      className="flex flex-col gap-11 mb-60"
      onSubmit={handleSubmit((data) => {
        loginUser(data.Email, data.Password);
      })}
    >
      <div>
        <Input
          label={"Email"}
          register={register}
          required
          pattern={EMAIL_PATTERN}
        />
        {errors["Email"]?.type === "required" && <ErrorMessage required />}
        {errors["Email"]?.type === "pattern" && <ErrorMessage />}
      </div>
      <div>
        <Input
          label={"Password"}
          register={register}
          required
          type={"password"}
        />
        {errors["Password"] && <ErrorMessage required />}
      </div>
      {error ? <p>{error.message}</p> : ""}
      <div className="flex justify-center items-center flex-col gap-3">
        <div className="min-w-[500px]">
          <SubmitInput label={"Sign in"} />
        </div>
        <NavLink className="heading5D" to={"/reset-password"}>
          Have you forgotten your password?
        </NavLink>
      </div>
    </form>
  );
};
