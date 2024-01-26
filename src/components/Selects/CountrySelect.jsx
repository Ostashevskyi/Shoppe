import React from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

export const CountrySelect = ({ label, register, required }) => {
  countries.registerLocale(enLocale);

  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  return (
    <select
      {...register(label, { required })}
      className="border-b-2 border-gray pb-2 xl:min-w-[400px] lg:min-w-[400px] xxl:min-w-[400px] w-full text-dark_gray placeholder:text-dark_gray focus:outline-none"
      defaultValue="Country"
    >
      <option value="Country" hidden>
        Country *
      </option>
      {!!countryArr?.length &&
        countryArr.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
    </select>
  );
};
