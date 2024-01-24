import React from "react";

export const NewsletterInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex items-center justify-between border-b-2 pb-3"
    >
      <input
        placeholder="Give an email, get the newsletter."
        type="email"
        required
        className="lg:min-w-[250px] xs:text-xs focus:outline-none placeholder:text-dark_gray text-dark_gray"
      />
      <input
        type="submit"
        className="bg-arrow bg-center bg-no-repeat text-transparent "
      />
    </form>
  );
};
