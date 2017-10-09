
export const userLogin = (user) => {
  console.log("you clicked user");
  console.log(user);
  return {
    type: "USER_LOGIN",
    payload: user
  }
};
