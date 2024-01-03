import { supabase } from "./client";

export const getSession = () => {
  const session = supabase.auth.getSession().then(({ data: { session } }) => {
    return session;
  });

  console.log(session);
  return session;
};
