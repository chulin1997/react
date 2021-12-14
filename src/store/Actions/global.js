export const createSetJwt = (type, payload) => {
  // return {
  //   type,
  //   payload,
  // };
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type,
        payload
      })
    }, 1000)
  }
};
