import { ThinRoundedStar } from "@smastrom/react-rating";

export const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<,>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const POSTS_ON_PAGE = 4;
export const ORDERS_ON_PAGE = 5;

export const STAR_STYLES = {
  itemShapes: ThinRoundedStar,
  activeStrokeColor: "#000",
  activeFillColor: "#000",
  inactiveFillColor: "#fff",
  inactiveStrokeColor: "#000",
  itemStrokeWidth: 1,
};
