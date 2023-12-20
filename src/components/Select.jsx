import React from "react";
import { useDispatch } from "react-redux";
import { setFilterType } from "../store/filterSlice";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

export const CatalogSelect = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilterType(e.target.value));
  };

  return (
    <select
      className="py-4 pl-2 pr-44 border border-gray rounded-md"
      defaultValue="Sort By"
      onChange={(e) => handleChange(e)}
    >
      <option value="Sort By" disabled hidden>
        Sort by
      </option>
      <option value="">None</option>
      <option value="necklace">Necklace</option>
      <option value="earrings">Earrings</option>
      <option value="pin">Pins</option>
    </select>
  );
};

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
      className="border-b-2 border-gray pb-2 min-w-[400px] w-full text-dark_gray placeholder:text-dark_gray focus:outline-none"
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
