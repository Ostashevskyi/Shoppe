import { useSelector } from "react-redux";

const getTheme = () => {
  const { theme } = useSelector((state) => state.theme);
  return theme;
};

export default getTheme;
