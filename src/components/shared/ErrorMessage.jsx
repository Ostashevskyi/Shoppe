import React from "react";

export const ErrorMessage = (required) => {
  return (
    <p role="alert" className="text-errors">
      {required ? "This field is required" : "Value is not valid"}
    </p>
  );
};
