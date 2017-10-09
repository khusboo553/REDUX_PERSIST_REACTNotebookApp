
export default function (state = {}, action) {

  switch (action.type) {
    case "USER_LOGIN":
      return action.payload;
      break;
    default:
    return state;
  };

};
