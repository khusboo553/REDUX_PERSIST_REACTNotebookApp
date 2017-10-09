
export const afterLogin=(userDetails)=>{

  return{
    type:"User-Details",
    payload:userDetails
  }
};
