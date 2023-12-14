import { format } from "date-fns";

export const formatDate = (date) => {
  return format(new Date(date ? date : "12-12-2002"), "MMMM dd, yyyy");
};
