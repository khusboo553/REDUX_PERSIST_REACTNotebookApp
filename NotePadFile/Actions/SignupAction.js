export const userSignUp=(signUpUser)=>{
  console.log("usersignup..........");
  return {
    type:"USER_SIGNUP",
    payload:signUpUser
  }
};
export const saveArray=(array)=>{
  return {
    type: 'ARRAY_SAVE',
    payload: array
  }
};
