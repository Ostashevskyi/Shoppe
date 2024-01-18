export const useUserID = (user) => {
  return user?.sub?.split("|").splice(1, 2).join();
};
