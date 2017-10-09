export default function (state = {}, action) {
console.log("usersignupReducer..........");

  switch (action.type) {
    case "USER_SIGNUP":
    console.log("usersignup");
      return action.payload;
      break;
    case "ARRAY_SAVE":
    console.log("ARRAY_SAVE");
      // return {...state};
      return action.payload;
       break;
    default:
       console.log("def");
      return state;
  }

}
