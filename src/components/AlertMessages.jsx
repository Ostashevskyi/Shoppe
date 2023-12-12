import React from "react";

export const RequiredMessage = () => {
  return (
    <p role="alert" className="text-errors">
      This field is required
    </p>
  );
};

export const InvalidValueMessage = () => {
  return (
    <p role="alert" className="text-errors">
      Value is not valid
    </p>
  );
};
