export default function(state={},action){
    console.log("again calll");
  switch (action.type) {
    case "User-Details":

      console.log(action.payload);
      return action.payload;

    default:
      return state;
  };

};
