export const addToken = (token) => ({
  type: "SET_TOKEN",
  payload: token,
});
export const removeToken = () => ({
  type: "REMOVE_TOKEN",
});
