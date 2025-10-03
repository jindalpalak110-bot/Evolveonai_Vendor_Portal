export const loginAction = (token: string, user: {email: string; name: string; role: string; }) => {
  return {
    type: "LOGIN",
    payload: { token, user},
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
