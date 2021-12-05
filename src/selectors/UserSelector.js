export const getUser = (state) => {
  const user = state.user;
  if(user) return user;
  return null;
}
