import React from "react";

export const NewsletterInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex items-center justify-between border-b-2 pb-3 lg:gap-32 xl:gap-32 xxl:gap-32 border-text"
    >
      <input
        placeholder="Give an email, get the newsletter."
        type="email"
        required
        className="xs:min-w-[200px] sm:min-w-[200px] lg:min-w-[250px] xl:min-w-[250px] md:min-w-[250px] xxl:min-w-[250px] xs:text-xs sm:text-xs focus:outline-none placeholder:text-dark_gray text-dark_gray bg-transparent"
      />
      <input
        type="submit"
        className="bg-arrow bg-center bg-no-repeat text-transparent bg-transparent "
      />
    </form>
  );
};
