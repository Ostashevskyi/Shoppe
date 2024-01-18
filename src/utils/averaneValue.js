export const averageValue = (data) => {
  if (data.length) {
    return data?.reduce((prev, next) => prev + next) / data?.length;
  } else {
    return;
  }
};
